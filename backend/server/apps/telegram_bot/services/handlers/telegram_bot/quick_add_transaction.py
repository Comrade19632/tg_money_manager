from aiogram import types
from aiogram.dispatcher import FSMContext
from aiogram.dispatcher.filters.state import State, StatesGroup

from apps.accountant.enums import EnumType
from apps.telegram_bot.management.loaders.telegram_bot_loader import dp
from apps.telegram_bot.services import Api


class UnknownTransactionType(Exception):
    """
    Unknown transaction type
    """

    pass


class Form(StatesGroup):
    category = State()


@dp.message_handler(regexp=r"^(?=.)([+-]([0-9]*)(\.([0-9]+))?)$", state="*")
async def quick_add_transaction(message: types.Message, state: FSMContext):
    async with state.proxy() as data:
        data["amount"] = message.text[1:]
        data["enum_type"] = get_type_of_transaction_by_message(message.text)

        api = Api(message.from_user.id)

        response = api.get_categories({"enum_type": data["enum_type"]})
        if error := response.get("error"):
            markup = types.ReplyKeyboardRemove()
            await message.reply(error, reply_markup=markup)
            await state.finish()

        categories = response.get("data")

        data["categories"] = categories

        markup = types.ReplyKeyboardMarkup(resize_keyboard=True, selective=True)

        for category in categories:
            markup.add(category["title"])

        markup.add("Без категории")

        await message.reply(
            "Выберите категорию для транзакции",
            reply_markup=markup,
        )

    await Form.category.set()


@dp.message_handler(state=Form.category)
async def process_category(message: types.Message, state: FSMContext):
    async with state.proxy() as data:
        markup = types.ReplyKeyboardRemove()
        data["category"] = message.text
        category = next(
            (
                category
                for category in data["categories"]
                if category["title"] == data["category"]
            ),
            None,
        )
        api = Api(message.from_user.id)
        response = api.create_transaction(
            {
                "enum_type": data["enum_type"],
                "category__id": category["id"] if category else None,
                "is_monthly": data["enum_type"] == EnumType.INCOME,
                "amount": data["amount"],
            }
        )
        if error := response.get("error"):
            markup = types.ReplyKeyboardRemove()
            await message.reply(error, reply_markup=markup)
            await state.finish()

        await message.reply(response.get("data"), reply_markup=markup)
        await state.finish()


def get_type_of_transaction_by_message(message):
    if message[0] == "-":
        return EnumType.OUTCOME
    if message[0] == "+":
        return EnumType.INCOME
    else:
        raise UnknownTransactionType
