// is a given value Date Object?
const isDate = function(value) {
  return this._toString.call(value) === '[object Date]';
};

export default isDate;
