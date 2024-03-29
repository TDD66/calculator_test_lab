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

  test('can multiply with zero', () => {
    expected = 0;
    actual = multiply(10, 0);
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

  test('can divide one negative number with a positive number', () => {
    expected = -5;
    actual = divide(10, -2);
    expect(actual).toBe(expected);
  });

  test('can divide zero by a number', () => {
    expected = 0;
    actual = divide(0, 2);
    expect(actual).toBe(expected);
  });

  test('can divide a number by zero', () => {
    expected = Infinity;
    actual = divide(10, 0);
    expect(actual).toBe(expected);
  });

});

describe('modulus', () => {

  test('can get the modulus from two small positive integers', () => {
    expected = 1;
    actual = modulus(3, 2);
    expect(actual).toBe(expected);
  });

  test('can get the modulus from two large positive integers', () => {
    expected = 1;
    actual = modulus(99999999999, 99999999998);
    expect(actual).toBe(expected);
  });

  test('can get the modulus from two negative integers', () => {
    expected = -1;
    actual = modulus(-5, -2);
    expect(actual).toBe(expected);
  });

  test('can get the modulus of zero', () => {
    expected = 0;
    actual = modulus(0, 4);
    expect(actual).toBe(expected);
  });
});



describe('even', () => {

  test('small even number', () => {
    expected = true;
    actual = even(8);
    expect(actual).toBe(expected);
  });

  test('small odd number', () => {
    expected = false;
    actual = even(7);
    expect(actual).toBe(expected);
  });

  test('large even number', () => {
    expected = true;
    actual = even(81232732);
    expect(actual).toBe(expected);
  });

  test('large odd number', () => {
    expected = false;
    actual = even(8123819331);
    expect(actual).toBe(expected);
  });

  test('negative even number', () => {
    expected = true;
    actual = even(-6);
    expect(actual).toBe(expected);
  });

  test('negative odd number', () => {
    expected = false;
    actual = even(-7);
    expect(actual).toBe(expected);
  });

  test('zero', () => {
    expected = true;
    actual = even(0);
    expect(actual).toBe(expected);
  });

});

describe('odd', () => {

  test('small even number', () => {
    expected = false;
    actual = odd(8);
    expect(actual).toBe(expected);
  });

  test('small odd number', () => {
    expected = true;
    actual = odd(7);
    expect(actual).toBe(expected);
  });

  test('large even number', () => {
    expected = false;
    actual = odd(81232732);
    expect(actual).toBe(expected);
  });

  test('large odd number', () => {
    expected = true;
    actual = odd(8123819331);
    expect(actual).toBe(expected);
  });

  test('negative even number', () => {
    expected = false;
    actual = odd(-6);
    expect(actual).toBe(expected);
  });

  test('negative odd number', () => {
    expected = true;
    actual = odd(-7);
    expect(actual).toBe(expected);
  });

  test('zero', () => {
    expected = false;
    actual = odd(0);
    expect(actual).toBe(expected);
  });
});
