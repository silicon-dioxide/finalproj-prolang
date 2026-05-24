function task(name, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Task ${name} finished`);
      resolve();
    }, delay);
  });
}

(async () => {
  await Promise.all([
    task("A", 500),
    task("B", 1000),
  ]);
})();
