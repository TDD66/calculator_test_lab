const {
  sum,
  subtract,
  multiply,
  divide,
  modulus,
  even,
  odd,
} = require("./calculator");

describe('sum', () => { 
  
  test('can add two small positive numbers', () => {
    expected = 5;
    actual = sum(2, 3);
    expect(actual).toBe(expected);
  });

  test('can add two large positive numbers', () => { 
    expected = 123213135462553;
    actual = sum(12321312, 123213123141241);
    expect(actual).toBe(expected);
  });

  test('can add two negative numbers', () => {
    expected = -10;
    actual = sum(-6, -4);
    expect(actual).toBe(expected);
  });

  test('can add zero', () => {
    expected = 5;
    actual = sum(0, 5);
    expect(actual).toBe(expected);
  });

  test('can add positive number to negative number', () => {
    expected = 10;
    actual = sum(20, -10);
    expect(actual).toBe(expected);
  });

});

describe('subtract', () => {

});

describe('multiply', () => {

});

describe('divide', () => {

});

describe('modulus', () => {

});

describe('even', () => {

});

describe('odd', () => {

});
