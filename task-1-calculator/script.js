// script.js
document.addEventListener("DOMContentLoaded", function () {
  const display = document.getElementById("display");
  const buttons = document.querySelectorAll(".btn");
  const operators = ["+", "-", "*", "/", "%"];
  let currentInput = "";
  let operator = "";
  let firstOperand = null;
  let answer = null;

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const value = button.getAttribute("data-value");

      if (button.id === "clear") {
        currentInput = "";
        operator = "";
        firstOperand = null;
        display.textContent = "";
      } else if (button.id === "del") {
        currentInput = currentInput.slice(0, -1);
        display.textContent = currentInput;
      } else if (button.id === "equals") {
        if (currentInput !== "") {
          try {
            currentInput = eval(
              currentInput.replace("sqrt", "Math.sqrt")
            ).toString();
            display.textContent = currentInput;
            answer = currentInput;
            firstOperand = null;
            operator = "";
          } catch {
            display.textContent = "Error";
            currentInput = "";
          }
        }
      } else if (operators.includes(value)) {
        currentInput += value;
        display.textContent = currentInput;
      } else if (value === "sqrt") {
        currentInput += "sqrt(";
        display.textContent = currentInput;
      } else if (value === "ANS") {
        currentInput += answer || "";
        display.textContent = currentInput;
      } else if (value === "±") {
        if (currentInput.startsWith("-")) {
          currentInput = currentInput.slice(1);
        } else {
          currentInput = "-" + currentInput;
        }
        display.textContent = currentInput;
      } else {
        currentInput += value;
        display.textContent = currentInput;
      }
    });
  });
});
