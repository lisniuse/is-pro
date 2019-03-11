// fallback check is for IE
function isArguments(value) {
  return toString.call(value) === '[object Arguments]' ||
    (value != null && typeof value === 'object' && 'callee' in value);
}

export default isArguments; 
