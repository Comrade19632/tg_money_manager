from datetime import datetime, timedelta

from django.conf import settings

import aiogram.utils.markdown as md
from aiogram import types
from aiogram.dispatcher import FSMContext
from aiogram.dispatcher.filters import Command
from aiogram.dispatcher.filters.state import State, StatesGroup
from aiogram.types import InlineKeyboardButton, InlineKeyboardMarkup
from aiogram.utils.callback_data import CallbackData

from apps.accountant.enums import EnumType
from apps.telegram_bot.management.loaders.telegram_bot_loader import dp
from apps.telegram_bot.services import Api


@dp.message_handler(Command("start"))
@dp.message_handler(text="Получить ссылку для логина на сайте")
async def login(message: types.Message):
    api = Api(message.from_user.id)

    response = api._get_jwt_tokens()

    if error := response.get("error"):
        await message.reply(error)
        return

    if settings.DEBUG:
        url = f"http://localhost:3000/login?access={response['data']['access']}&refresh={response['data']['refresh']}&user={response['data']['user']}"
        await message.reply(url)
        return

    else:
        url = f"https://tgmm.xyz/login?access={response['data']['access']}&refresh={response['data']['refresh']}&user={response['data']['user']}"

        login_button = InlineKeyboardButton("Авторизоваться на сайте", url=url)
        keyboard = InlineKeyboardMarkup().add(login_button)

        await message.reply("Нажмите на кнопку ниже ⬇", reply_markup=keyboard)
        return
