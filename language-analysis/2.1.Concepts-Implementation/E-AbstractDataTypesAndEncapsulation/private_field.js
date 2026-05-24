class Account {
  #balance;

  constructor(balance) {
    this.#balance = balance;
  }

  showBalance() {
    return this.#balance;
  }
}

const acc = new Account(5000);
console.log(acc.showBalance());
