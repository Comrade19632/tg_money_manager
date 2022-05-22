import requests

from apps.telegram_bot.constants import API_LINK_FOR_TELEGRAM_BOTS


def get_jwt_token(telegram_id):
    path = "token/"
    url = API_LINK_FOR_TELEGRAM_BOTS + path

    data = {"id": telegram_id}

    response = requests.post(url, json=data).json()
    return response["access"]
