const result = document.querySelector(".result");
const numberBtn = document.querySelectorAll(".number");
const operatorBtns = document.querySelectorAll(".op");

const clear = document.querySelector(".clear");
const equal = document.querySelector(".equal");
let num1 = 0;
let num2 = 0;
let operator = "";
let displayValue = "";
let opResult = "";

function operate(operator) {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;

    default:
      return null;
  }
}
function populateDisplay() {
  numberBtn.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      result.textContent = "";
      displayValue = displayValue.concat(`${e.target.textContent}`);
      result.textContent = displayValue;
      if (operator === "") {
        num1 = +displayValue;
      }

      if (operator !== "") {
        num2 = +displayValue;
      }
    });
  });
  let operation;
  operatorBtns.forEach((op) => {
    op.addEventListener("click", (e) => {
      if (num2 !== 0) {
        operation = operate(operator);
        if (operation === Infinity) {
          result.textContent = "Error.Cannot divide by zero";
          num1 = 0;
          num2 = 0;
          operator = "";
          displayValue = "";
          operation = null;
          return;
        }
        num1 = parseFloat(operation.toFixed(4));

        num2 = 0;

        result.textContent = num1;
      }
      displayValue = "";
      operator = e.target.textContent;
    });
  });
  equal.addEventListener("click", (e) => {
    operation = operate(operator);
    if (operation === Infinity) {
      result.textContent = "Error.Cannot divide by zero";
      num1 = 0;
      num2 = 0;
      operator = "";
      displayValue = "";
      operation = null;
      return;
    }
    num1 = parseFloat(operation.toFixed(4));

    num2 = 0;

    operator = "";
    displayValue = "";
    result.textContent = num1 ?? "";
  });
  clear.addEventListener("click", () => {
    num1 = 0;
    num2 = 0;
    operator = "";
    displayValue = "";
    result.textContent = "";
  });
}
populateDisplay();
