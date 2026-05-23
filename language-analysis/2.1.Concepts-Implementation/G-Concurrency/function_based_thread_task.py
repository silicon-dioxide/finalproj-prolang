import threading


def print_numbers():
    for i in range(3):
        print("number:", i)


thread = threading.Thread(target=print_numbers)
thread.start()
thread.join()
