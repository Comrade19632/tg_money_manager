from aiogram import Bot
from django.conf import settings


async def send_message_to_user(telegram_id, text):
    bot = Bot(settings.TELEGRAM_BOT_TOKEN)
    await bot.send_message(telegram_id, text=text)
    await bot.close()
