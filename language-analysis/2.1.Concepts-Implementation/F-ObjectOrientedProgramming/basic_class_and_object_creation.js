class Person {
  constructor(name) {
    this.name = name;
  }

  introduce() {
    return `My name is ${this.name}.`;
  }
}

let person = new Person("Cedric");
console.log(person.introduce());
