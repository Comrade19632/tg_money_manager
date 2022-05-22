from asgiref.sync import async_to_sync

from server import celery_app

from ..services import send_message_to_user as _send_message_to_user


@celery_app.task(name="apps.telegram_bot.tasks.send_message_to_user")
def send_message_to_user(telegram_id, text):
    async_to_sync(_send_message_to_user)(telegram_id, text)
