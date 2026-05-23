class Bird:
    def move(self):
        return "Flying"


class Penguin(Bird):
    def move(self):
        return "Swimming"


penguin = Penguin()
print(penguin.move())
