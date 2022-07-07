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
const backspace = document.querySelector("#backspace");

let numA = "";
let numB = "";
let currentOperator = "";

// Project +Points.
// - Decimal: Done.
// - Backspace: Done.
//      - Automatic change of operation: Done.
// - Keyboard Compatibility
// Project Extra Extra Features
// - Exponents
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
        if(button.textContent == "⌫") {
            let temp = display.textContent;
            display.textContent = temp.slice(0, temp.length-1);
            if(numB != "") {
                numB = numB.slice(0, numB.length-1);
            } else if(currentOperator != "") {
                currentOperator = "";
            } else if(numA != "") {
                numA = numA.slice(0, numA.length-1);
            }  
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
        if(numA !== "" && numB === "" && currentOperator !== "") {
            let temp = display.textContent;
            display.textContent = temp.slice(0, temp.length-2) + button.textContent;
        }
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

