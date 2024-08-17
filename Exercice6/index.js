const $display = document.getElementById("display");

function appendToDisplay(element) {
  $display.value += element;
}

function clearDisplay() {
  $display.value = "";
}

function calculateResult() {
  const result = eval($display.value);
  if (result === Infinity) {
    $display.value = 'Division by zero is not allowed'
  } else {
    $display.value = result;
  }
}