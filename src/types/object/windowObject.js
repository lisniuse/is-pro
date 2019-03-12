// is a given value window?
// setInterval method is only available for window object
const isWindowObject = function (value) {
  return value != null && typeof value === 'object' && 'setInterval' in value;
};

export default isWindowObject;
