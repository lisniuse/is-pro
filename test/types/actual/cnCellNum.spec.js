const is = require('../../../dist/umd/ispro.js');

describe('actual/cnCellNum', () => {

  test('should return true if given a right cnCellNumber', () => {
    expect(is.cnCellNum('13984896107')).toBe(true);
  });

  test('should return false if given a wrong cnCellNumber', () => {
    expect(is.cnCellNum('123456')).toBe(false);
  });

});
