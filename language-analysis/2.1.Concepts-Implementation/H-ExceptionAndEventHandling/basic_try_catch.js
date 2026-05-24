try {
  let result = 10 / 0;
  if (!Number.isFinite(result)) {
    throw new Error("Cannot divide by zero");
  }
} catch (error) {
  console.log(error.message);
}
