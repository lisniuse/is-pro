const is = require('../../../dist/umd/ispro.js');

describe('object/domNode', () => {

  test('should return true if given object is a DOM node', () => {
    let obj = document && document.createElement('div');
    expect(is.domNode(obj)).toBe[!!document];
  });

  test('should return false if given object is not a DOM node', () => {
    expect(is.domNode({})).toBe(false);
  });

});
