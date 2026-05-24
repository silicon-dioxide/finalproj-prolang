try {
  let value = Number.parseInt("abc", 10);
  if (Number.isNaN(value)) {
    throw new TypeError("Value conversion error");
  }

  let result = 10 / value;
  if (!Number.isFinite(result)) {
    throw new RangeError("Division by zero error");
  }
} catch (error) {
  if (error instanceof TypeError) {
    console.log(error.message);
  } else if (error instanceof RangeError) {
    console.log(error.message);
  }
}
