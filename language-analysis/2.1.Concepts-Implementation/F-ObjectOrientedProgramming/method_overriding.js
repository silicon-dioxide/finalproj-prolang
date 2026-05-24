class Bird {
  move() {
    return "Flying";
  }
}

class Penguin extends Bird {
  move() {
    return "Swimming";
  }
}

let penguin = new Penguin();
console.log(penguin.move());
