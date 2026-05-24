class Shape {
  area() {
    throw new Error("Subclasses must implement area().");
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }
}

let rect = new Rectangle(4, 5);
console.log(rect.area());
