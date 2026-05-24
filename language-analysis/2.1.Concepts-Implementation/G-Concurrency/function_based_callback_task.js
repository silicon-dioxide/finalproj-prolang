function printNumbers(callback) {
  let count = 0;

  const interval = setInterval(() => {
    console.log("number:", count);
    count += 1;

    if (count === 3) {
      clearInterval(interval);
      callback();
    }
  }, 200);
}

printNumbers(() => {});
