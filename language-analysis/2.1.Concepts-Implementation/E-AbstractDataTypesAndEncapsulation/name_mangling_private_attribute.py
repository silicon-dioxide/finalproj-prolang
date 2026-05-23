class Account:
    def __init__(self, balance):
        self.__balance = balance

    def show_balance(self):
        return self.__balance


acc = Account(5000)
print(acc.show_balance())
