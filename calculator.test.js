const Calculator = require('./calculator');

describe('Addition', () => {
  test('Add 10 to 0', () => {
    const sum = new Calculator(10, 0)
    expect(sum.add()).toEqual(10);
  });
  test('Add 20 to -10', () => {
    const sum = new Calculator(20, -10);
    expect(sum.add()).toEqual(10);
  });
  test('Add -20 to -10', () => {
    const sum = new Calculator(-20, -10);
    expect(sum.add()).toEqual(-30);
  });
});

describe('Subtraction', () => {
  test('Subtract 10 to 0', () => {
    const result = new Calculator(10, 0)
    expect(result.subtract()).toEqual(10);
  });
  test('Subtract 20 to -10', () => {
    const result = new Calculator(20, -10);
    expect(result.subtract()).toEqual(30);
  });
  test('Subtract -20 to -10', () => {
    const result = new Calculator(-20, -10);
    expect(result.subtract()).toEqual(-10);
  });
});

describe('divide', () => {
  test('Divide 10 by 0', () => {
    const result = new Calculator(10, 0)
    expect(result.divide()).toBe(Infinity);
  });
  test('Divide 20 by -10', () => {
    const result = new Calculator(20, -10);
    expect(result.divide()).toEqual(-2);
  });
  test('Divide -20 by -10', () => {
    const result = new Calculator(-20, -10);
    expect(result.divide()).toEqual(2);
  });
});

describe('Multiplication', () => {
  test('Multiply 10 by 0', () => {
    const result = new Calculator(10, 0)
    expect(result.multiply()).toBe(0);
  });
  test('Multiply 20 by -10', () => {
    const result = new Calculator(20, -10);
    expect(result.multiply()).toEqual(-200);
  });
  test('Multiply -20 by -10', () => {
    const result = new Calculator(-20, -10);
    expect(result.multiply()).toEqual(200);
  });
});