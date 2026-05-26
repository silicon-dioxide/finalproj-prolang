function atmSystem(users, username, action, amount = 0) {
  if (users[username]) {
    if (action === "balance") {
      console.log("Current balance:", users[username].balance);
      return users[username].balance;
    } else if (action === "deposit") {
      if (!Number.isInteger(amount)) {
        console.log("Deposit amount must be an integer");
        return false;
      } else if (amount > 0) {
        users[username].balance = users[username].balance + amount;
        console.log("Deposit successful");
        console.log("New balance:", users[username].balance);
        return true;
      } else {
        console.log("Invalid deposit amount");
        return false;
      }
    } else if (action === "withdraw") {
      if (!Number.isInteger(amount)) {
        console.log("Withdrawal amount must be an integer");
        return false;
      } else if (amount > 0) {
        if (users[username].balance >= amount) {
          users[username].balance = users[username].balance - amount;
          console.log("Withdrawal successful");
          console.log("New balance:", users[username].balance);
          return true;
        } else {
          console.log("Insufficient funds");
          return false;
        }
      } else {
        console.log("Invalid withdrawal amount");
        return false;
      }
    }
  } else {
    console.log("User not found");
    return undefined;
  }
}

const users = {
  cedric: { balance: 1000 },
};

console.log("Original implementation");
atmSystem(users, "cedric", "balance");
atmSystem(users, "cedric", "deposit", 500);
atmSystem(users, "cedric", "withdraw", 111200);
atmSystem(users, "cedric", "deposit", "sss");
atmSystem(users, "cedric", "withdraw", 10.5);
atmSystem(users, "cedric", "deposit", 0);
atmSystem(users, "cedric", "withdraw", 0);
