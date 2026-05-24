function buttonClick(callback) {
  console.log("Button clicked");
  callback();
}

function showMessage() {
  console.log("Callback executed");
}

buttonClick(showMessage);
