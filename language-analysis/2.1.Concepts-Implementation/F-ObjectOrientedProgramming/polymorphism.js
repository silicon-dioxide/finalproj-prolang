class Cat {
  sound() {
    return "Meow";
  }
}

class Cow {
  sound() {
    return "Moo";
  }
}

for (let animal of [new Cat(), new Cow()]) {
  console.log(animal.sound());
}
