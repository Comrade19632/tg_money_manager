from aiogram import types
from aiogram.dispatcher import FSMContext
from aiogram.dispatcher.filters import Command
from aiogram.dispatcher.filters.state import State, StatesGroup

from apps.accountant.enums import EnumType
from apps.telegram_bot.management.loaders.telegram_bot_loader import dp
from apps.telegram_bot.services import Api


class Form(StatesGroup):
    add_income_category_title = State()


@dp.message_handler(Command("add_income_category"))
@dp.message_handler(text="Добавить категорию доходов")
async def add_income_category(message: types.Message, state: FSMContext):
    await message.reply(
        "Укажите название категории",
    )
    await Form.add_income_category_title.set()


@dp.message_handler(state=Form.add_income_category_title)
async def process_title(message: types.Message, state: FSMContext):
    markup = types.ReplyKeyboardRemove()

    api = Api(message.from_user.id)
    response = api.create_category(
        {
            "enum_type": EnumType.INCOME,
            "title": message.text,
        }
    )

    if error := response.get("error"):
        markup = types.ReplyKeyboardRemove()
        await message.reply(error, reply_markup=markup)
        await state.finish()

    await message.reply(response.get("data"), reply_markup=markup)
    await state.finish()
