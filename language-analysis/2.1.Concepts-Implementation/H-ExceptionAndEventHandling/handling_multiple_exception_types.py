try:
    value = int("abc")
    result = 10 / value
except ValueError:
    print("Value conversion error")
except ZeroDivisionError:
    print("Division by zero error")
