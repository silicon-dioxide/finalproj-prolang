def withdraw(balance, amount):
    if amount > balance:
        raise ValueError("Insufficient balance")
    return balance - amount


try:
    print(withdraw(500, 700))
except ValueError as error:
    print(error)
