from json import loads

import requests

from apps.telegram_bot.constants import API_LINK_FOR_TELEGRAM_BOTS


class Api:
    def __init__(self, telegram_id):
        self.telegram_id = telegram_id

    def get_categories(self, params=None):
        request_headers = self.get_auth_request_headers()

        path = "accountant/categories/"
        url = API_LINK_FOR_TELEGRAM_BOTS + path

        response = requests.get(url, headers=request_headers, params=params)

        if response.status_code == 200:
            return {"data": loads(response.text)["results"]}
        elif response.status_code == 400:
            return {"error": response.text}
        else:
            return {
                "error": "Не удалось получить список категорий, внутренняя ошибка сервера"
            }

    def create_category(self, category):
        request_headers = self.get_auth_request_headers()

        path = "accountant/categories/"
        url = API_LINK_FOR_TELEGRAM_BOTS + path

        response = requests.post(url, headers=request_headers, json=category)

        if response.status_code == 201:
            return {"data": "Категория успешно добавлена"}
        elif response.status_code == 400:
            return {"error": response.text}
        else:
            return {
                "error": "Не удалось получить список категорий, внутренняя ошибка сервера"
            }

    def delete_category(self, category_id):
        request_headers = self.get_auth_request_headers()

        path = f"accountant/categories/{category_id}"
        url = API_LINK_FOR_TELEGRAM_BOTS + path

        response = requests.delete(url, headers=request_headers)

        if response.status_code == 204:
            return {"data": "Категория успешно удалена"}
        elif response.status_code == 400:
            return {"error": response.text}
        else:
            return {"error": "Не удалось удалить категорию, внутренняя ошибка сервера"}

    def create_transaction(self, transaction):
        request_headers = self.get_auth_request_headers()

        path = "accountant/transactions/"
        url = API_LINK_FOR_TELEGRAM_BOTS + path

        response = requests.post(url, headers=request_headers, json=transaction)

        if response.status_code == 201:
            return {"data": "Транзакция успешно добавлена"}
        elif response.status_code == 400:
            return {"error": response.text}
        else:
            return {
                "error": "Не удалось добавить транзакцию, внутренняя ошибка сервера"
            }

    def get_auth_request_headers(self):
        token = self._get_jwt_token()
        return {"Authorization": f"Bearer {token}", "Content-Type": "application/json"}

    def _get_jwt_token(self):
        path = "token/"
        url = API_LINK_FOR_TELEGRAM_BOTS + path

        data = {"id": self.telegram_id}

        response = requests.post(url, json=data).json()
        return response["access"]
