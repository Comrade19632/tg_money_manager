from aiogram import types
from aiogram.dispatcher import FSMContext
from aiogram.dispatcher.filters import Command
from aiogram.dispatcher.filters.state import State, StatesGroup

from apps.accountant.enums import EnumType
from apps.telegram_bot.management.loaders.telegram_bot_loader import dp
from apps.telegram_bot.services import Api


class Form(StatesGroup):
    add_correction_income_amount = State()
    add_correction_income_title = State()


@dp.message_handler(Command("add_correction_income"))
@dp.message_handler(text="Добавить коррекцию на увеличение бюджета")
async def add_correction_income(message: types.Message, state: FSMContext):
    await message.reply(
        "Укажите сумму на которую нужно увеличить бюджет",
    )
    await Form.add_correction_income_amount.set()


@dp.message_handler(state=Form.add_correction_income_amount)
async def process_amount(message: types.Message, state: FSMContext):
    async with state.proxy() as data:
        markup = types.ReplyKeyboardMarkup(resize_keyboard=True, selective=True)
        markup.add("Без названия")
        data["amount"] = message.text

    await message.reply(
        "Укажите название для коррекции",
        reply_markup=markup,
    )
    await Form.add_correction_income_title.set()


@dp.message_handler(state=Form.add_correction_income_title)
async def process_title(message: types.Message, state: FSMContext):
    async with state.proxy() as data:
        markup = types.ReplyKeyboardRemove()
        data["title"] = message.text if not message.text == "Без названия" else None

        api = Api(message.from_user.id)
        response = api.create_transaction(
            {
                "enum_type": EnumType.INCOME,
                "is_correction": True,
                "amount": data["amount"],
                "date": None,
                "title": data["title"],
            }
        )

        if error := response.get("error"):
            await message.reply(error, reply_markup=markup)
            await state.finish()

        await message.reply(response.get("data"), reply_markup=markup)
        await state.finish()
