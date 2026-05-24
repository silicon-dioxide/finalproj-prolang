class Course {
  constructor(title) {
    this._title = title;
  }

  getTitle() {
    return this._title;
  }

  setTitle(title) {
    this._title = title;
  }
}

const course = new Course("Programming Languages");
console.log(course.getTitle());
course.setTitle("Software Engineering");
console.log(course.getTitle());
