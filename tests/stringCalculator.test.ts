import { IllegalNegativeNumberError } from '../src/illegalNegativeNumberError';

const stringCalculator = require('../src/index');

test('empty input should return 0', () => {
    let input = "";
    let result = stringCalculator.add(input);
    expect(result).toBe(0);
});

test('null input should return 0', () => {
    let input = null;
    let result = stringCalculator.add(input);
    expect(result).toBe(0);
})

test('single input should return itself', () => {
    let input = "5";
    let result = stringCalculator.add(input);
    expect(result).toBe(5);
});

test('comma-separated numbers input should return the sum', () => {
    let input = "1,2,3,4";
    let result = stringCalculator.add(input);
    expect(result).toBe(10);
});

test('calculator should be able to handle unknown amount of numbers', () => {
    let numberOfInputs = Math.floor(Math.random() * 10);
    let arr = [];
    while(numberOfInputs > 0) {
        let element = Math.floor(Math.random() * 10).toString();
        arr.push(element);
        numberOfInputs--;
    }
    let inputStr = arr.reduce((x,y) => x + "," + y, "");

    let result = stringCalculator.add(inputStr);

    expect(typeof(result)).toBe('number');
});

test('NaN should be discared', () => {
    let input = "#,&,@,%,1,2,3,,";
    let result = stringCalculator.add(input);
    expect(result).toBe(6);
});

test('newline should be handled as a valid delimiter', () => {
    let input = "1\n2";
    let result = stringCalculator.add(input);
    expect(result).toBe(3);
});

test('mixed newline and comma should be handled as valid delimiters', () => {
    let input = "1\n2,3";
    let result = stringCalculator.add(input);
    expect(result).toBe(6);
});

test('adjacent newline and comma should be handled as valid delimiters', () => {
    let input = "1\n,2,3,\n4";
    let result = stringCalculator.add(input);
    expect(result).toBe(10);
});

test('negative numbers should not be allowed', () => {
    let input = "-1,2,3";
    const sut = () => stringCalculator.add(input);
    expect(sut).toThrow(IllegalNegativeNumberError)
});

test('negative numbers list should be in the error message', () => {
    let input = "-1,2,3,-4"
    const sut = () => stringCalculator.add(input);

    expect(sut).toThrow(IllegalNegativeNumberError);
    expect(sut).toThrow("Negative numbers are not allowed: -1,-4");
});