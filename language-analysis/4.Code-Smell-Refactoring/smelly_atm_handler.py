def atm_system(users, username, action, amount=0):
    if username in users:
        if action == "balance":
            print("Current balance:", users[username]["balance"])
            return users[username]["balance"]
        elif action == "deposit":
            if amount > 0:
                users[username]["balance"] = users[username]["balance"] + amount
                print("Deposit successful")
                print("New balance:", users[username]["balance"])
                return True
            else:
                print("Invalid deposit amount")
                return False
        elif action == "withdraw":
            if amount > 0:
                if users[username]["balance"] >= amount:
                    users[username]["balance"] = users[username]["balance"] - amount
                    print("Withdrawal successful")
                    print("New balance:", users[username]["balance"])
                    return True
                else:
                    print("Insufficient funds")
                    return False
            else:
                print("Invalid withdrawal amount")
                return False
        elif action == "transfer":
            print("Transfer feature not implemented")
            return None
        else:
            print("Unknown action")
            return None
    else:
        print("User not found")
        return None


users = {
    "cedric": {"balance": 1000},
}

print("Original implementation")
atm_system(users, "cedric", "balance")
atm_system(users, "cedric", "deposit", 500)
atm_system(users, "cedric", "withdraw", 200)
