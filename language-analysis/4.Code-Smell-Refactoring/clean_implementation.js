function cleanImplementation(account, action, amount = 0) {
  const balance = account.balance ?? 0;

  if (action === "balance") {
    return { status: "success", balance };
  }

  if (action === "deposit") {
    if (!Number.isInteger(amount)) {
      throw new Error("Deposit amount must be an integer.");
    }

    if (amount <= 0) {
      throw new Error("Deposit amount must be greater than zero.");
    }

    const updatedBalance = balance + amount;
    account.balance = updatedBalance;
    return { status: "success", balance: updatedBalance };
  }

  if (action === "withdraw") {
    if (!Number.isInteger(amount)) {
      throw new Error("Withdrawal amount must be an integer.");
    }

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
}

function runAction(account, action, amount = 0) {
  try {
    console.log(cleanImplementation(account, action, amount));
  } catch (error) {
    console.log(error.message);
  }
}

const account = { balance: 1000 };

console.log("\nRefactored implementation");
runAction(account, "balance");
runAction(account, "deposit", 500);
runAction(account, "withdraw", 111200);
runAction(account, "deposit", "sss");
runAction(account, "withdraw", 10.5);
runAction(account, "deposit", 0);
runAction(account, "withdraw", 0);
