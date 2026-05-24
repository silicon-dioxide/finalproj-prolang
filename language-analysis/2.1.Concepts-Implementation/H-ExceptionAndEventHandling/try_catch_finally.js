try {
  let number = Number.parseInt("25", 10);
  if (Number.isNaN(number)) {
    throw new Error("Invalid number");
  }
  console.log(number);
} catch (error) {
  console.log(error.message);
} finally {
  console.log("Execution finished");
}
