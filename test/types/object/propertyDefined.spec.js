const is = require('../../../dist/umd/ispro.js');

describe('object/propertyDefined', () => {

  test('should return true if given property is in objects', () => {
    let obj = {
      test: 'test',
      is: 'is',
      good: 'good'
    };
    expect(is.propertyDefined(obj, 'good')).toBe(true);
  });
  
  test('should return false if given property is not in objects', () => {
    let obj = {
      test: 'test',
      is: 'is'
    };
    expect(is.propertyDefined(obj, 'good')).toBe(false);
  });

});
