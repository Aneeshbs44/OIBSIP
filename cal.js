let displayValue = '';

function appendToDisplay(value) {
  displayValue += value;
  document.querySelector('.display').value = displayValue;
}

function clearDisplay() {
  displayValue = '';
  document.querySelector('.display').value = displayValue;
}

function backspace() {
  displayValue = displayValue.slice(0, -1);
  document.querySelector('.display').value = displayValue;
}

function calculate() {
  try {
    displayValue = eval(displayValue);
    document.querySelector('.display').value = displayValue;
  } catch (error) {
    alert('Invalid expression');
  }
}
