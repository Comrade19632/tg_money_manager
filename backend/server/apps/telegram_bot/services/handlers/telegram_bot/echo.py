from aiogram import types

from apps.telegram_bot.management.loaders.telegram_bot_loader import dp


@dp.message_handler()
async def echo(message: types.Message):
    await message.answer(message.text)
