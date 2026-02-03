let firstNumber = "";
let secondNumber = "";
let currentOperator = null;

const display = document.querySelector("#display");
const buttons = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const clearBtn = document.querySelector("#clear");
const equalBtn = document.querySelector("#equals");
const delBtn = document.querySelector("#backspace");

function updateHistory() {
  const history = document.querySelector("#history");
  history.textContent = `${firstNumber} ${currentOperator || ""} ${secondNumber}`;
}

function updateDisplay(value) {
  display.textContent = value;
}

function handleNumber(num) {
  if (currentOperator === null) {
    if (num === "." && firstNumber.includes(".")) return;
    firstNumber += num;
    updateDisplay(firstNumber);
    updateHistory();
  } else {
    if (num === "." && secondNumber.includes(".")) return;
    secondNumber += num;
    updateDisplay(secondNumber);
    updateHistory();
  }
}

function handleOperator(op) {
  if (firstNumber !== "" && currentOperator !== null && secondNumber !== "") {
    const result = operate(
      currentOperator,
      Number(firstNumber),
      Number(secondNumber),
    );
    firstNumber = String(result);
    secondNumber = "";
    updateDisplay(result);
  }
  currentOperator = op;
  updateHistory();
}

function handleClear() {
  firstNumber = "";
  secondNumber = "";
  currentOperator = null;
  updateDisplay("0");
  updateHistory();
}

function handleEquals() {
  if (firstNumber === "" || secondNumber === "" || currentOperator === null)
    return;

  const result = operate(
    currentOperator,
    Number(firstNumber),
    Number(secondNumber),
  );
  firstNumber = String(result);
  secondNumber = "";
  currentOperator = null;
  updateDisplay(result);
  updateHistory();
}

function handleDelete() {
  if (currentOperator === null) {
    firstNumber = firstNumber.slice(0, -1);
    updateDisplay(firstNumber || "0");
  } else {
    secondNumber = secondNumber.slice(0, -1);
    updateDisplay(secondNumber || "0");
  }
  updateHistory();
}

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => handleNumber(e.target.textContent));
});

operators.forEach((item) => {
  item.addEventListener("click", (e) => handleOperator(e.target.textContent));
});

clearBtn.addEventListener("click", handleClear);
equalBtn.addEventListener("click", handleEquals);
delBtn.addEventListener("click", handleDelete);

window.addEventListener("keydown", (e) => {
  if ((e.key >= "0" && e.key <= "9") || e.key === ".") handleNumber(e.key);
  if (["+", "-", "*", "/"].includes(e.key)) handleOperator(e.key);
  if (e.key === "Enter" || e.key === "=") handleEquals();
  if (e.key === "Escape") handleClear();
  if (e.key === "Backspace") handleDelete();
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
