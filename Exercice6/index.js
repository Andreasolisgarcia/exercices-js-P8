const $display = document.getElementById("display");

function appendToDisplay(element) {
  $display.value += element;
}

function clearDisplay() {
  $display.value = "";
}

function calculateResult() {
  const result = eval($display.value);
  $display.value = result;
}
