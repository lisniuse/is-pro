const is = require('../dist/umd/ispro.js');

describe('api/typeof', () => {

  test('is.typeof([1,2,3]) => [ \'array\', \'object\', \'json\', \'existy\', \'arrayLike\', \'objectLike\' ]', () => {
    expect(is.typeof([1,2,3])).toEqual([ 'array', 'object', 'json', 'existy', 'arrayLike', 'objectLike' ]);
  });

});
