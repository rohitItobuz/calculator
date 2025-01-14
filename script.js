const equation_button = document.querySelectorAll(".equation-button");
const operator_button = document.querySelectorAll(".operator-button");
const toggle_button = document.querySelector("#toggle-button");
const clear_button = document.querySelector("#clear-button");
const backspace_button = document.querySelector("#backspace-button");
const solve_button = document.querySelector("#solve-button");
const percentage_button = document.querySelector("#percentage-button");
const square_button = document.querySelector("#square-button");
const power_button = document.querySelector("#power-button");
const screen = document.querySelector("#screen");
let equation = "";
let operator_count = 0;
let operator;

const evaluate = () => {
  const operator_index = equation.indexOf(operator, 1);
  const number1 = equation.slice(0, operator_index);
  const number2 = equation.slice(operator_index + 1);

  if (operator === "+") {
    equation = parseFloat(number1) + parseFloat(number2);
  } else if (operator === "-") {
    equation = parseFloat(number1) - parseFloat(number2);
  } else if (operator === "X") {
    equation = parseFloat(number1) * parseFloat(number2);
  } else if (operator === "/") {
    equation = (parseFloat(number1) / parseFloat(number2)).toFixed(5);
  } else if (operator === "^") {
    equation = parseFloat(number1) ** parseFloat(number2);
  }
  equation = equation.toString();
  screen.textContent = equation;
  operator = "";
  operator_count = 0;
};

equation_button.forEach((button) => {
  button.addEventListener("click", () => {
    if (
      button.textContent === "." &&
      equation.includes(".", equation.indexOf(operator))
    )
      return;
    equation += button.textContent;
    screen.textContent = equation;
  });
});

percentage_button.addEventListener("click", () => {
  if (operator_count === 1) {
    evaluate();
  }
  equation = (equation === '') ? '' : (parseFloat(equation) / 100).toFixed(5).toString();
  screen.textContent = equation;
});

square_button.addEventListener("click", () => {
  if (operator_count === 1) {
    evaluate();
  }
  equation = (equation === '') ? '' : (parseFloat(equation) ** 2).toString();
  screen.textContent = equation;
});

power_button.addEventListener("click", () => {
  if (operator_count === 1) {
    evaluate();
  }
  equation = (equation === '') ? '' : (10 ** parseFloat(equation)).toString();
  screen.textContent = equation;
});

operator_button.forEach((button) => {
  button.addEventListener("click", () => {
    if (operator_count === 1) {
      if (equation.indexOf(operator, 1) !== equation.length - 1) evaluate();
      else equation = equation.slice(0, -1);
    }
    if (equation !== "") {
      operator = button.value;
      operator_count = 1;
      equation += button.value;
    }
    screen.textContent = equation;
  });
});

clear_button.addEventListener("click", () => {
  equation = "";
  operator_count = 0;
  screen.textContent = equation;
});

toggle_button.addEventListener("click", () => {
  if (operator_count === 1) {
    evaluate();
  }
  if (equation !== "") {
    equation = (parseFloat(equation) * -1).toString();
  }
  screen.textContent = equation;
});

backspace_button.addEventListener("click", () => {
  equation = (equation === "Infinity" || equation === "-Infinity" || equation === "NaN") ? "" : equation.slice(0, -1);
  operator_count = equation.indexOf(operator, 1) === -1 ? 0 : operator_count;
  screen.textContent = equation;
});

solve_button.addEventListener("click", evaluate);
