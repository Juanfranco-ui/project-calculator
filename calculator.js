let firstNumber = "";
let secondNumber = "";
let currentOperator = null;

const display = document.querySelector("#display");
const buttons = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const clearBtn = document.querySelector("#clear");
const equalBtn = document.querySelector("#equals");

buttons.forEach((item) => {
  item.addEventListener("click", (event) => {
    const btnValue = event.target.textContent;

    if (currentOperator === null) {
      firstNumber += btnValue;
      display.textContent = firstNumber;
    } else {
      secondNumber += btnValue;
      display.textContent = secondNumber;
    }
  });
});
operators.forEach((item) => {
  item.addEventListener("click", (event) => {
    let num1 = Number(firstNumber);
    let num2 = Number(secondNumber);
    if (firstNumber !== "" && currentOperator !== "" && secondNumber !== "") {
      let numResult = operate(currentOperator, num1, num2);
      firstNumber = String(numResult);
      secondNumber = "";
      display.textContent = numResult;
    }
    currentOperator = event.target.textContent;
  });
});

clearBtn.addEventListener("click", () => {
  firstNumber = "";
  secondNumber = "";
  currentOperator = null;

  display.textContent = "0";
});

equalBtn.addEventListener("click", () => {
  const num1 = Number(firstNumber);
  const num2 = Number(secondNumber);

  let numReturn = operate(currentOperator, num1, num2);
  display.textContent = numReturn;
});

const operate = function (operator, a, b) {
  switch (operator) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return b === 0 ? "ERROR" : a / b;
    default:
      return "Error, invalid operator";
  }
};
