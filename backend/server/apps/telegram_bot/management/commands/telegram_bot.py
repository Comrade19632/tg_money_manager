from django.core.management.base import BaseCommand

from aiogram import types


class Command(BaseCommand):
    help = "Running manual telegram bot"

    def handle(self, *args, **kwargs):
        """инициализация бота"""
        from aiogram import executor
        from apps.telegram_bot.services.handlers.telegram_bot import dp

        executor.start_polling(dp, on_startup=self.on_startup)

    async def on_startup(self, dp):
        """базовые действия при старте"""

        # установка фильтров и мидлварей
        # from apps.telegram_bot.conversation.filters import filters
        # from apps.telegram_bot.management.middlewares import middlewares
        # filters.setup(dp)
        # middlewares.setup(dp)

        # команды в боте
        await dp.bot.set_my_commands(
            [
                types.BotCommand("add_income", "Добавить доход"),
                types.BotCommand("add_outcome", "Добавить трату"),
            ]
        )
