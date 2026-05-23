def clean_implementation(account, action, amount=0):
    balance = account.get("balance", 0)

    if action == "balance":
        return {"status": "success", "balance": balance}

    if action == "deposit":
        if amount <= 0:
            raise ValueError("Deposit amount must be greater than zero.")
        balance += amount
        account["balance"] = balance
        return {"status": "success", "balance": balance}

    if action == "withdraw":
        if amount <= 0:
            raise ValueError("Withdrawal amount must be greater than zero.")
        if amount > balance:
            raise ValueError("Insufficient funds.")
        balance -= amount
        account["balance"] = balance
        return {"status": "success", "balance": balance}

    raise ValueError("Unknown action.")


account = {"balance": 1000}

print("\nRefactored implementation")
print(clean_implementation(account, "balance"))
print(clean_implementation(account, "deposit", 500))
print(clean_implementation(account, "withdraw", 200))
