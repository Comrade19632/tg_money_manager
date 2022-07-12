import random


def generate_random_hex():
    return "#%06x" % random.randint(0, 0xFFFFFF)
