from datetime import datetime, timedelta

import aiogram.utils.markdown as md
from aiogram import types
from aiogram.dispatcher import FSMContext
from aiogram.dispatcher.filters import Command
from aiogram.dispatcher.filters.state import State, StatesGroup
from aiogram.types import ParseMode
from aiogram.utils.callback_data import CallbackData

from apps.accountant.enums import EnumType
from apps.telegram_bot.management.loaders.telegram_bot_loader import dp
from apps.telegram_bot.services import Api


@dp.message_handler(Command("get_outcome_categories"))
@dp.message_handler(text="Мои категории расходов")
async def get_outcome_categories(message: types.Message):
    api = Api(message.from_user.id)

    response = api.get_categories({"enum_type": EnumType.OUTCOME})
    if error := response.get("error"):
        markup = types.ReplyKeyboardRemove()
        await message.reply(error, reply_markup=markup)
        return

    categories = response.get("data")

    if not categories:
        markup = types.ReplyKeyboardRemove()
        await message.reply(
            "Нет категорий, создайте их через специальное меню", reply_markup=markup
        )
        return

    for category in categories:
        keyboard = types.InlineKeyboardMarkup()
        delete_button = types.InlineKeyboardButton(
            text="Удалить",
            callback_data=cb.new(id=category["id"]),
        )
        keyboard.add(delete_button)

        await message.reply(
            md.text(
                md.text("Название: ", md.bold(category["title"])),
                md.text("Создана: ", md.bold(category["created"])),
                sep="\n",
            ),
            parse_mode=ParseMode.MARKDOWN,
            reply_markup=keyboard,
        )


cb = CallbackData("delete_outcome_category", "id")


@dp.callback_query_handler(cb.filter())
async def callbacks(call: types.CallbackQuery, callback_data: dict):
    api = Api(call.message.chat.id)

    response = api.delete_category(category_id=callback_data["id"])

    if error := response.get("error"):
        await call.answer(text=error)
        return

    await call.answer(text=response.get("data"))
