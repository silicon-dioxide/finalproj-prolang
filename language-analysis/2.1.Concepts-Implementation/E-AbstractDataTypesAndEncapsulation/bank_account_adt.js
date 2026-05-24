class BankAccount {
  constructor(owner, balance) {
    this.owner = owner;
    this._balance = balance;
  }

  deposit(amount) {
    this._balance += amount;
  }

  withdraw(amount) {
    if (amount <= this._balance) {
      this._balance -= amount;
    }
  }

  getBalance() {
    return this._balance;
  }
}

const account = new BankAccount("Cedric", 1000);
account.deposit(500);
account.withdraw(200);
console.log(account.getBalance());
