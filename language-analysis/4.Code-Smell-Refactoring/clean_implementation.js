function cleanImplementation(account, action, amount = 0) {
  const balance = account.balance ?? 0;

  if (action === "balance") {
    return { status: "success", balance };
  }

  if (action === "deposit") {
    if (amount <= 0) {
      throw new Error("Deposit amount must be greater than zero.");
    }

    const updatedBalance = balance + amount;
    account.balance = updatedBalance;
    return { status: "success", balance: updatedBalance };
  }

  if (action === "withdraw") {
    if (amount <= 0) {
      throw new Error("Withdrawal amount must be greater than zero.");
    }

    if (amount > balance) {
      throw new Error("Insufficient funds.");
    }

    const updatedBalance = balance - amount;
    account.balance = updatedBalance;
    return { status: "success", balance: updatedBalance };
  }

  throw new Error("Unknown action.");
}

const account = { balance: 1000 };

console.log("\nRefactored implementation");
console.log(cleanImplementation(account, "balance"));
console.log(cleanImplementation(account, "deposit", 500));
console.log(cleanImplementation(account, "withdraw", 200));
