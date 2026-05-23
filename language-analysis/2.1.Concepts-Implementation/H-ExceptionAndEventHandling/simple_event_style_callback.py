def button_click(callback):
    print("Button clicked")
    callback()


def show_message():
    print("Callback executed")


button_click(show_message)
