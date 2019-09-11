/* eslint-disable no-undef */

const {
  capitalize, reverseString, analyse, Calculator, Cypher,
} = require('./methods_to_test.js');

describe('capitalize function', () => {
  it("should capitalize 'name'", () => {
    expect(capitalize('name')).toBe('Name');
  });
  it("should capitalize 'jason'", () => {
    expect(capitalize('jason')).toBe('Jason');
  });
  it("should capitalize 'mary'", () => {
    expect(capitalize('mary')).toBe('Mary');
  });
});

describe('reverse string function', () => {
  it("should reverse 'string'", () => {
    expect(reverseString('string')).toBe('gnirts');
  });
  it("should reverse '50lit'", () => {
    expect(reverseString('50lit')).toBe('til05');
  });
  it("should reverse 'thaht'", () => {
    expect(reverseString('thaht')).toMatch('thaht');
  });
});

describe('Testing calculator add function', () => {
  const calc = new Calculator();
  it("should add '[1,2,3]'", () => {
    expect(calc.add(1, 2, 3)).toBe(6);
  });
  it("should add '[2,1,4]'", () => {
    expect(calc.add(2, 1, 4)).toBe(7);
  });
  it("should add '[6,10,4]'", () => {
    expect(calc.add(6, 10, 4)).toBe(20);
  });
});

describe('Testing calculator subtract function', () => {
  const calc = new Calculator();
  it("should subtract '[1,2]'", () => {
    expect(calc.subtract(1, 2)).toBe(-1);
  });
  it("should subtract '[2,1]'", () => {
    expect(calc.subtract(2, 1)).toBe(1);
  });
  it("should subtract '[500, 200]'", () => {
    expect(calc.subtract(500, 200)).toBe(300);
  });
});

describe('Testing calculator multiply function', () => {
  const calc = new Calculator();
  it("should multiply '[1,2,3]'", () => {
    expect(calc.multiply(1, 2, 3)).toBe(6);
  });
  it("should multiply '[2,1,4]'", () => {
    expect(calc.multiply(2, 1, 4)).toBe(8);
  });
  it("should multiply '[6,10,4]'", () => {
    expect(calc.multiply(6, 10, 4)).toBe(240);
  });
});

describe('Testing calculator divide function', () => {
  const calc = new Calculator();
  it('should divide 1 by 2', () => {
    expect(calc.divide(1, 2)).toBe(0.5);
  });
  it('should divide -2 by 1', () => {
    expect(calc.divide(-2, 1)).toBe(-2);
  });
  it('should divide 1 by 3 it should return a solution with 3 decimal places', () => {
    expect(calc.divide(1, 3)).toBe(0.333);
  });
  it('should divide 2 by 0 is should return -i to indicate a division by zero error', () => {
    expect(calc.divide(2, 0)).toBe('-i');
  });
});

describe('Testing the cypher module', () => {
  const cypher = new Cypher(5);
  it("should encrypt 'Hello look who we got here' to 'mjqqt qttp bmt bj lty mjwj'", () => {
    expect(cypher.encypher('Hello look who we got here')).toBe('mjqqt qttp bmt bj lty mjwj');
  });
  it("should encrypt 'no poor code!' to 'st uttw htij!'", () => {
    expect(cypher.encypher('no poor code!')).toBe('st uttw htij!');
  });
  it("should encrypt '@the old bookshop' to '@ymj tqi gttpxmtu'", () => {
    expect(cypher.encypher('@the old bookshop')).toBe('@ymj tqi gttpxmtu');
  });
});

describe('Testing the analyse function', () => {
  const test1 = [1, 2, 3, 4, 5];
  const test2 = [2, 6, 0, 8];
  const test3 = [7, 10, 13, 200];
  it("should analyse '[1,2,3,4,5]'", () => {
    expect(analyse(test1)).toEqual({
      average: 3,
      min: 1,
      max: 5,
      length: 5,
    });
  });
  it("should analyse '[2,6,0,8]'", () => {
    expect(analyse(test2)).toEqual({
      average: 4,
      min: 0,
      max: 8,
      length: 4,
    });
  });
  it("should analyse '[2,6,0,8]'", () => {
    expect(analyse(test3)).toEqual({
      average: 57.500,
      min: 7,
      max: 200,
      length: 4,
    });
  });
});
