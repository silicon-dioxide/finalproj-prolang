function withdraw(balance, amount) {
  if (amount > balance) {
    throw new Error("Insufficient balance");
  }
  return balance - amount;
}

try {
  console.log(withdraw(500, 700));
} catch (error) {
  console.log(error.message);
}
