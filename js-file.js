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
const decimal = document.querySelector("#decimal");
let numA = "";
let numB = "";
let currentOperator = "";

// Extra features
// - Decimal: Done.
// - Backspace
//      - Change operation functionality
// - Exponents
// - Keyboard Compatibility
// - Negation

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        if(!button.classList.contains("func")) {
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
            if(!numA.includes(".")) {
                numA += button.textContent;
            } else if(numA.includes(".")) {
                numA += button.textContent;
                decimal.disabled = true;
            }
            console.log("numA: " + numA);
        } else if(currentOperator != "") {
            decimal.disabled = false;
            if(!numB.includes(".")) {
                numB += button.textContent;
            } else if(numB.includes(".")) {
                numB += button.textContent;
                decimal.disabled = true;
            }
            console.log("numB: " + numB);
        }
    });
});
operators.forEach((button) => {
    button.addEventListener("click", () => {
        if(numA !== "" && numB !== "" && currentOperator !== "") {
            numA = operate(isOperator(currentOperator), +numA, +numB);
            numB = "";
            decimal.disabled = false;
            display.textContent = "=" + numA + button.textContent;
        }
        currentOperator = button.textContent;
        console.log("operator: " + currentOperator);
    });
});
equal.addEventListener("click", () => {
    if(numA !== "" && numB !== "" && currentOperator !== "") {
        numA = operate(isOperator(currentOperator), +numA, +numB);
        numB = "";
        decimal.disabled = false;
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

