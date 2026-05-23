import threading


def show_message():
    print("Thread is running")


thread = threading.Thread(target=show_message)
thread.start()
thread.join()
