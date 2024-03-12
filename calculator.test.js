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
  test('can subtract two small positive numbers', () => {
    expected = 1;
    actual = subtract(3, 2);
    expect(actual).toBe(expected);
  });

  test('can subtract two large positive numbers', () => { 
    expected = -90000000000;
    actual = subtract(9999999999, 99999999999);
    expect(actual).toBe(expected);
  });

  test('can subtract two negative numbers', () => {
    expected = -2;
    actual = subtract(-6, -4);
    expect(actual).toBe(expected);
  });

  test('can subtract zero', () => {
    expected = 5;
    actual = subtract(5, 0);
    expect(actual).toBe(expected);
  });

  test('can subtract negative number from positive number', () => {
    expected = 30;
    actual = subtract(20, -10);
    expect(actual).toBe(expected);
  });
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
