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
    return value;
}

// const operators = document.querySelectorAll(".operator");
// const numbers = document.querySelectorAll(".num");
const buttons = document.querySelectorAll("button");
const display = document.querySelector("#display");
let text = "";
let numA = "";
let numB = "";
let operation = "";
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        if(button.id != "equals") {
            text += button.textContent;
            display.textContent = text;
        }

        if(button.id == "equals") {
            for(let i = 0; i < text.length; i++) {
                if(isOp(text.charAt(i)) != null) {
                    operation = isOp(text.charAt(i))
                } else if(operation == "") {
                    numA += text.charAt(i);
                } else if(numA != "") {
                    numB += text.charAt(i);
                }
            }
            text = operate(operation, +numA, +numB);
            display.textContent = text;
            console.log("numA: " + numA);
            console.log("numB: " + numB);
            console.log("ope: " + operation);
        }

        if(button.id == "clear") {
            text = "";
            numA = "";
            numB = "";
            operation = "";
            display.textContent = text;
        }
    });
});

function isOp(text) {
    if(text == "+") {
        return add;
    } else if(text == "-") {
        return subtract;
    } else if(text == "*") {
        return multiply;
    } else if(text == ".") {
        return divide;
    } else {
        return null;
    }
}