for (let num = 1; num <= 5; num += 1) {
  if (num === 2) {
    continue;
  }
  if (num === 5) {
    break;
  }
  console.log("num:", num);
}
