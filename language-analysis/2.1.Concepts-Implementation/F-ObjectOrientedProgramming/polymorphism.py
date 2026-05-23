class Cat:
    def sound(self):
        return "Meow"


class Cow:
    def sound(self):
        return "Moo"


for animal in [Cat(), Cow()]:
    print(animal.sound())
