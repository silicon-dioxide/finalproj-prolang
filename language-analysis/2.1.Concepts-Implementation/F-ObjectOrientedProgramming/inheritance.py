class Animal:
    def speak(self):
        return "Animal sound"


class Dog(Animal):
    pass


dog = Dog()
print(dog.speak())
