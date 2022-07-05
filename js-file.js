function add(...args) {
    let value = args.reduce((total, num) => {
        total += num;
        return total;
    });
    console.log(value);
}

function subtract(...args) {
    let value = args.reduce((total, num) => {
        total -= num;
        return total;
    });
    console.log(value);
}

function multiply(...args) {
    let value = args.reduce((total, num) => {
        total *= num;
        return total;
    });
    console.log(value);
}

function divide(...args) {
    let value = args.reduce((total, num) => {
        total /= num;
        return total;
    });
    console.log(value);
}
