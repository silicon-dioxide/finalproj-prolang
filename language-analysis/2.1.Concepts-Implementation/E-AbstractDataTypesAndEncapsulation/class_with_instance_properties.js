class Student {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}

const student = new Student("Cedric", 2);
console.log(student.name, student.year);
