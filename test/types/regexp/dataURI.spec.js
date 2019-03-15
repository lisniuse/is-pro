const is = require('../../../dist/umd/ispro.js');

describe('regexp/dataURI', () => {

  test('should return true if given value is dataURI', () => {
    expect(is.dataURI('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAABlBMVEUAAAD///+l2Z/dAAAAM0lEQVR4nGP4/5/h/1+G/58ZDrAz3D/McH8yw83NDDeNGe4Ug9C9zwz3gVLMDA/A6P9/AFGGFyjOXZtQAAAAAElFTkSuQmCC')).toBe(true);
  });

  test('should return true if given value is not dataURI', () => {
    expect(is.dataURI('123456')).toBe(false);
  });
  
});
