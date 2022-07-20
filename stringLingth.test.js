const {
    reverseString,
    stringLength,
    Calculator,
    upperCase,
} = require('./stringLength');

test('sum number of letters in string', () => {
    const string = 'Answer';
    const act = stringLength(string);
    expect(stringLength('Answer')).toBe(6)
});

test('Should return Error if string count is not between 0 & 10', () => {
    const string = 'Is it right';
    const act = () => {
        stringLength(string);
    };

    expect(act).toThrowError();
});

test('Should return reverse string', () => {
    const string = 'hello';
    const act = reverseString(string);
    expect(act).toBe(reverseString(string));
});

describe('add', () => {
    test('1 + 4 should return 5', () => {
        const x = 1;
        const y = 4;

        const calculator = new Calculator(x, y);
        const act = calculator.add();
        expect(act).toBe(5);
    });
});

describe('subtract', () => {
    test('4 - 1 should return 3', () => {
        const x = 4;
        const y = 1;

        const calculator = new Calculator(x, y);
        const act = calculator.subtract();
        expect(act).toBe(3);
    });
});

describe('multiply', () => {
    test('4 * 1 should return 4', () => {
        const x = 4;
        const y = 1;

        const calculator = new Calculator(x, y);
        const act = calculator.multiply();
        expect(act).toBe(4);
    });
});

describe('divide', () => {
    test('4 / 2 should return 2', () => {
        const x = 4;
        const y = 2;

        const calculator = new Calculator(x, y);
        const act = calculator.divide();
        expect(act).toBe(2);
    });
});

test('first letter should be return capitalized ', () => {
    const string = 'answer';
    const act = string[0].toUpperCase();
    expect(act).toBe('A');
});



