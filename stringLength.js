const stringLength = (string) => {
    if(string.length > 0 && string.length < 10 ) {
        return string.length;
    } else {
        throw new Error('String length is not between 0 and 10');
    }
};

const reverseString = (string) => {
    return string.split('').reverse().join('');
};

class Calculator {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    add() {
        return this.x + this.y;
    }

    subtract() {
        return this.x - this.y;
    }

    multiply() {
        return this.x * this.y;
    }

    divide() {
        return this.x / this.y;
    }
}

const upperCase = (string) => {
    string.charAt(0).toUpperCase() + string.slice(1);
};

module.exports = { reverseString, stringLength, Calculator, upperCase};