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

  test('can multiply two small positive numbers', () => {
    expected = 6;
    actual = multiply(3, 2);
    expect(actual).toBe(expected);
  });

  test('can multiply two larger positive numbers', () => {
    expected = 116424032100;
    actual = multiply(1030210, 113010);
    expect(actual).toBe(expected);
  });

  test('can multiply two negative numbers', () => {
    expected = 20;
    actual = multiply(-10, -2);
    expect(actual).toBe(expected);
  });

  test('can multiply one negative number with a positive number', () => {
    expected = -20;
    actual = multiply(10, -2);
    expect(actual).toBe(expected);
  });

});

describe('divide', () => {

  test('can divide with two small positive numbers', () => {
    expected = 3;
    actual = divide(6, 2);
    expect(actual).toBe(expected);
  });

  test('can divide with two larger positive numbers', () => {
    expected = 1030210;
    actual = divide(116424032100, 113010);
    expect(actual).toBe(expected);
  });

  test('can divide with two negative numbers', () => {
    expected = 5;
    actual = divide(-10, -2);
    expect(actual).toBe(expected);
  });

  test('can multiply one negative number with a positive number', () => {
    expected = -5;
    actual = divide(10, -2);
    expect(actual).toBe(expected);
  });
});

describe('modulus', () => {

});

describe('even', () => {

});

describe('odd', () => {

});
