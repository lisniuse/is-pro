const is = require('../../../dist/umd/ispro.js');
const obj = is._document ? is._document.createElement('div') : '';

describe('object/domNode', () => {

  test('should return true if given object is a DOM node', () => {
    let obj = document && document.createElement('div');
    expect(is.domNode(obj)).toBe[!!document];
  });

  test('should return false if given object is not a DOM node', () => {
    expect(is.domNode({})).toBe(false);
  });

  test('is.not.domNode({}) => true', () => {
    expect(is.not.domNode({})).toBe(true);
  });

  test('is.all.domNode(obj, obj) => true', () => {
    expect(is.all.domNode(obj, obj)).toBe(true);
  });
  
  test('is.any.domNode(obj, {nope: \'nope\'}) => true', () => {
    expect(is.any.domNode(obj, {nope: 'nope'})).toBe(true);
  });

  // 'all' and 'any' interfaces can also take array parameter
  test('is.all.domNode([obj, {nope: \'nope\'}]) => false', () => {
    expect(is.all.domNode([obj, {nope: 'nope'}])).toBe(false);
  });

});
