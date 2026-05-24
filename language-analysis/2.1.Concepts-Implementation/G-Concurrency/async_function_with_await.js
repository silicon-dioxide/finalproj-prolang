async function sayHello() {
  await new Promise((resolve) => setTimeout(resolve, 500));
  console.log("Hello from async function");
}

(async () => {
  await sayHello();
})();
