const is = require('../../../dist/umd/ispro.js');

describe('type/arguments', () => {

  test('should return true if passed parameter type is arguments', () => {
    let getArguments = () => {
      return arguments;
    };
    let args = getArguments('test');
    expect(is.arguments(args)).toBe(true);
  });

  test('should return false if passed parameter type is not arguments', () => {
    let notArgs = ['test'];
    expect(is.arguments(notArgs)).toBe(false);
  });

});
