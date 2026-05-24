let counter = 0;

async function incrementCounter() {
  for (let i = 0; i < 1000; i += 1) {
    counter += 1;
  }
}

(async () => {
  await Promise.all([
    incrementCounter(),
    incrementCounter(),
  ]);

  console.log("counter:", counter);
})();
