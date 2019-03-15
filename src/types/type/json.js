// is given value a pure JSON object?
const isJson = function (value) {
  if (this.string(value)) {
    try {
      let obj = JSON.parse(value);
      if (obj && this.object(obj)) {
        return true;
      } else {
        return false;
      }
    } catch (e) {
      return false;
    }
  } else {
    try {
      let string = JSON.stringify(value);
      let obj = JSON.parse(string);
      if (obj && this.object(obj)) {
        return true;
      } else {
        return false;
      }
    } catch (e) {
      return false;
    }
  }
};

export default isJson;
