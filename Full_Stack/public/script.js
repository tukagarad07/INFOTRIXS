let displayValue = "";

function appendToDisplay(value) {
  displayValue += value;
  document.getElementById("display").value = displayValue;
}

function calculate() {
  try {
    displayValue = eval(displayValue);
    document.getElementById("display").value = displayValue;
  } catch (error) {
    document.getElementById("display").value = "Error";
  }
}

function clearDisplay() {
  displayValue = "";
  document.getElementById("display").value = displayValue;
}

// Keyboard input event listener
document.addEventListener("keydown", function(event) {
  const key = event.key;
  if (/[0-9+\-*/.=]/.test(key)) {
    if (key === "=" || key === "Enter") {
      calculate();
    } else {
      appendToDisplay(key);
    }
  } else if (key === "Escape") {
    clearDisplay();
  } else if (key === "Backspace") {
    displayValue = displayValue.slice(0, -1);
    document.getElementById("display").value = displayValue;
  }
});

