const stringCalculator = require('../src/index');

test('empty input should return 0', () => {
    let result = stringCalculator.add("");
    expect(result).toBe(0);
});