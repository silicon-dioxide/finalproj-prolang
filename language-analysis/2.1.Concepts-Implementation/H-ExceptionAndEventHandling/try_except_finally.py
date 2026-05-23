try:
    number = int("25")
    print(number)
except ValueError:
    print("Invalid number")
finally:
    print("Execution finished")
