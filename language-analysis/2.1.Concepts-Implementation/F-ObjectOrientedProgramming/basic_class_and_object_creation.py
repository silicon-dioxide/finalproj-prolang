class Person:
    def __init__(self, name):
        self.name = name

    def introduce(self):
        return f"My name is {self.name}."


person = Person("Cedric")
print(person.introduce())
