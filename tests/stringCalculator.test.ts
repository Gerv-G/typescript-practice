const stringCalculator = require('../src/index');

test('empty input should return 0', () => {
    let input = "";
    let result = stringCalculator.add(input);
    expect(result).toBe(0);
});

test('single input should return itself', () => {
    let input = "5";
    let result = stringCalculator.add(input);
    expect(result).toBe(5);
});