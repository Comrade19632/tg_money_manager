from datetime import datetime, timedelta

from aiogram import types
from aiogram.dispatcher import FSMContext
from aiogram.dispatcher.filters import Command
from aiogram.dispatcher.filters.state import State, StatesGroup

from apps.accountant.enums import EnumType
from apps.telegram_bot.management.loaders.telegram_bot_loader import dp
from apps.telegram_bot.services import Api


class Form(StatesGroup):
    add_income_amount = State()
    add_income_date = State()
    add_income_category = State()
    add_income_title = State()


@dp.message_handler(Command("add_income"))
@dp.message_handler(text="Добавить доход")
async def add_income(message: types.Message, state: FSMContext):
    await message.reply(
        "Укажите сумму дохода",
    )
    await Form.add_income_amount.set()


@dp.message_handler(state=Form.add_income_amount)
async def process_income_amount(message: types.Message, state: FSMContext):
    async with state.proxy() as data:
        data["amount"] = message.text
    markup = types.ReplyKeyboardMarkup(resize_keyboard=True, selective=True)
    markup.add(datetime.today().strftime("%Y-%m-%d"))
    markup.add((datetime.today() - timedelta(1)).strftime("%Y-%m-%d"))
    markup.add((datetime.today() - timedelta(2)).strftime("%Y-%m-%d"))
    await message.reply(
        "Укажите когда вы получили доход в формате YYYY-MM-DD, либо выберите один из предложенных вариантов",
        reply_markup=markup,
    )
    await Form.add_income_date.set()


@dp.message_handler(state=Form.add_income_date)
async def process_date(message: types.Message, state: FSMContext):
    async with state.proxy() as data:
        data["date"] = message.text
        api = Api(message.from_user.id)

        response = api.get_categories({"enum_type": EnumType.INCOME})

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
        "Выберите категорию дохода",
        reply_markup=markup,
    )
    await Form.add_income_category.set()


@dp.message_handler(state=Form.add_income_category)
async def process_category(message: types.Message, state: FSMContext):
    async with state.proxy() as data:
        markup = types.ReplyKeyboardMarkup(resize_keyboard=True, selective=True)
        markup.add("Без названия")
        data["category"] = message.text

    await message.reply(
        "Укажите название для траты",
        reply_markup=markup,
    )
    await Form.add_income_title.set()


@dp.message_handler(state=Form.add_income_title)
async def process_title(message: types.Message, state: FSMContext):
    async with state.proxy() as data:
        markup = types.ReplyKeyboardRemove()
        data["title"] = message.text if not message.text == "Без названия" else None
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
                "enum_type": EnumType.INCOME,
                "category__id": category["id"] if category else None,
                "amount": data["amount"],
                "date": data["date"],
                "title": data["title"],
            }
        )

        if error := response.get("error"):
            markup = types.ReplyKeyboardRemove()
            await message.reply(error, reply_markup=markup)
            await state.finish()

        await message.reply(response.get("data"), reply_markup=markup)
        await state.finish()
