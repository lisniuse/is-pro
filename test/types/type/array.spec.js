const is = require('../../../dist/umd/ispro.js');

describe('type/array', () => {

  test('should return true if passed parameter type is array', () => {
    let array = ['test'];
    expect(is.array(array)).toBe(true); 
  });

  test('should return false if passed parameter type is not array', () => {
    let notArray = 'test';
    expect(is.array(notArray)).toBe(false);
  });

});
