function introduce(name, course = "Programming Languages") {
  return `${name} is enrolled in ${course}.`;
}

console.log(introduce("Cedric"));
console.log(introduce("Anna", "Data Structures"));
