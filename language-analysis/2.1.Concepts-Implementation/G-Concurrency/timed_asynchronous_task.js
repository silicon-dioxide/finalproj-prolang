function showMessage() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Task is running");
      resolve();
    }, 500);
  });
}

(async () => {
  await showMessage();
})();
