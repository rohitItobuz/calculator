const equation_button = document.querySelectorAll('.equation-button');
const toggle_button = document.querySelector('#toggle-button');
const clear_button = document.querySelector('#clear-button');
const backspace_button = document.querySelector('#backspace-button');
const solve_button = document.querySelector('#solve-button');
const add_button = document.querySelector('#add-button');
const substraction_button = document.querySelector('#substraction-button');
const multiply_button = document.querySelector('#multiply-button');
const division_button = document.querySelector('#division-button');
const percentage_button = document.querySelector('#percentage-button');
const screen = document.querySelector('#screen');
let equation = "";
let operator_count = 0;
let operator;

equation_button.forEach(button => {
    button.addEventListener('click', () => {
        if (button.textContent === '.' && equation.includes('.'))
            return;
        equation += button.textContent;
        screen.textContent = equation;
    });
});

percentage_button.addEventListener('click', () => {
    equation = (parseFloat(equation) / 100).toFixed(5).toString();
    screen.textContent = equation;
})

add_button.addEventListener('click', () => {
    if (operator_count === 1) {
        evaluate();
    }
    operator_count++;
    equation += '+';
    screen.textContent = equation;
})

multiply_button.addEventListener('click', () => {
    equation = (parseFloat(equation) / 100).toFixed(5).toString();
    screen.textContent = equation;
})

division_button.addEventListener('click', () => {
    equation = (parseFloat(equation) / 100).toFixed(5).toString();
    screen.textContent = equation;
})

substraction_button.addEventListener('click', () => {
    equation = (parseFloat(equation) / 100).toFixed(5).toString();
    screen.textContent = equation;
})

clear_button.addEventListener('click', () => {
    equation = "";
    screen.textContent = equation;
})

toggle_button.addEventListener('click', () => {
    if (equation !== '') {
        equation = (parseFloat(equation) * -1).toString();
    }
    screen.textContent = equation;
})

backspace_button.addEventListener('click', () => {
    equation = (equation === 'Infinity' || equation === 'NaN') ? '' : equation.slice(0, -1);
    screen.textContent = equation;
})

solve_button.addEventListener('click', () => {
    let operator = equation.indexOf('+', 1);
    if (operator === -1)
        operator = equation.indexOf('-', 1);
    if (operator === -1)
        operator = equation.indexOf('X');
    if (operator === -1)
        operator = equation.indexOf('/');

    const number1 = equation.slice(0, operator);
    const number2 = equation.slice(operator + 1);

    if (equation.at(operator) === '+') {
        equation = parseFloat(number1) + parseFloat(number2);
    }
    else if (equation.at(operator) === '-') {
        equation = parseFloat(number1) - parseFloat(number2);
    }
    else if (equation.at(operator) === 'X') {
        equation = parseFloat(number1) * parseFloat(number2);
    }
    else if (equation.at(operator) === '/') {
        equation = parseFloat(number1) / parseFloat(number2);
    }

    equation = equation.toString();
    screen.textContent = equation;
})


const evaluate = () => {

}