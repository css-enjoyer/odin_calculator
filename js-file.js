function add(...args) {
    let value = args.reduce((total, num) => {
        total += num;
        return total;
    });
    return value;
}

function subtract(...args) {
    let value = args.reduce((total, num) => {
        total -= num;
        return total;
    });
    return value;
}

function multiply(...args) {
    let value = args.reduce((total, num) => {
        total *= num;
        return total;
    });
    return value;
}

function divide(...args) {
    let value = args.reduce((total, num) => {
        total /= num;
        return total;
    });
    return value;
}

function operate(operator, ...args) {
    let value = operator(...args);
    console.log(value);
    return value;
}

const operators = document.querySelectorAll(".operator");
const numbers = document.querySelectorAll(".num");
const equal = document.querySelector("#equals");
const buttons = document.querySelectorAll("button");
const display = document.querySelector("#display");
let numA = "";
let numB = "";
let currentOperator = "";

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        if(button.textContent !== "=") {
            display.textContent += button.textContent;
        }
        if(button.textContent == "C") {
            display.textContent = "";
            numA = "";
            numB = "";
            currentOperator = "";
        }
    });
});
numbers.forEach((button) => {
    button.addEventListener("click", () => {
        if(currentOperator == "") {
            numA += button.textContent;
            console.log(numA);
        } else if(currentOperator != "") {
            numB += button.textContent;
            console.log(numB);

        }
    });
});

operators.forEach((button) => {
    button.addEventListener("click", () => {
        if(numA !== "" && numB !== "" && currentOperator !== "") {
            numA = operate(isOperator(currentOperator), +numA, +numB);
            numB = "";
            display.textContent = "=" + numA + button.textContent;
        }
        currentOperator = button.textContent;
        console.log(currentOperator);
    });
});

equal.addEventListener("click", () => {
    if(numA !== "" && numB !== "" && currentOperator !== "") {
        numA = operate(isOperator(currentOperator), +numA, +numB);
        numB = "";
        currentOperator = "";
        display.textContent = "=" + numA;
    }
});

function isOperator(char) {
    if(char == "+") {
        return add;
    } else if (char == "-") {
        return subtract;
    } else if (char == "*") {
        return multiply;
    } else if (char == "/") {
        return divide;
    } 
}

