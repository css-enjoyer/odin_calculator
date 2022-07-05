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

// const operators = document.querySelectorAll(".operator");
// const numbers = document.querySelectorAll(".num");
const buttons = document.querySelectorAll("button");
const display = document.querySelector("#display");

let numA = "";
let numB = "";
let operator = "";
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        if(button.classList.contains("num") && operator === "") {
            numA += button.textContent;
            console.log("numA: " + numA);
        } else if(button.classList.contains("num") && operator !== "") {
            numB += button.textContent;
            console.log("numB: " + numB);
        }
        if(button.classList.contains("operator")) {
            operator += button.id;
            console.log("operator: " + operator);
        }
        if(button.id === "equals") {
            if(operator == "add") {
                display.textContent = operate(add, +numA, +numB);
            }
            if(operator == "subtract") {
                display.textContent = operate(subtract, +numA, +numB);
            }
            if(operator == "multiply") {
                display.textContent = operate(multiply, +numA, +numB);
            }
            if(operator == "divide") {
                display.textContent = operate(divide, +numA, +numB);
            }
            numA = "";
            numB = "";
            operator = "";
        }
        if(button.id === "clear") {
            display.textContent = "";
            numA = "";
            numB = "";
            operator = "";
        }
        if(button.id !== "equals" && button.id !== "clear") {
            display.textContent += button.textContent;
        }
    });
});