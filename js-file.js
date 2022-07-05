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

function operate(operator, numA, numB) {
    let value = operator(numA, numB);
    console.log(value);
}

const operators = document.querySelectorAll(".operator");
const numbers = document.querySelectorAll(".num");
const display = document.querySelector("#display");

console.log(numbers);

numbers.forEach((button) => {
    button.addEventListener("click", () => {
        display.textContent += button.textContent;
    });
});

operators.forEach((button) => {
    button.addEventListener("click", () => {
        display.textContent += button.textContent;
    });
});