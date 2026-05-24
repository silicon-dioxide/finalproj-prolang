class Temperature {
  constructor(celsius) {
    this._celsius = celsius;
  }

  get celsius() {
    return this._celsius;
  }

  set celsius(value) {
    if (value < -273.15) {
      throw new Error("Temperature cannot be below absolute zero.");
    }
    this._celsius = value;
  }
}

const temp = new Temperature(25);
console.log(temp.celsius);
temp.celsius = 30;
console.log(temp.celsius);
