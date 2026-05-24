class Animal {
  speak() {
    return "Animal sound";
  }
}

class Dog extends Animal {}

let dog = new Dog();
console.log(dog.speak());
