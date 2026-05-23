class BankAccount:
    def __init__(self, owner, balance):
        self.owner = owner
        self._balance = balance

    def deposit(self, amount):
        self._balance += amount

    def withdraw(self, amount):
        if amount <= self._balance:
            self._balance -= amount

    def get_balance(self):
        return self._balance


account = BankAccount("Cedric", 1000)
account.deposit(500)
account.withdraw(200)
print(account.get_balance())
