const isCnTelNum = function (value) {
  if (!(/^0\d{2,3}-?\d{7,8}$/.test(value))) {
    return false;
  } else {
    return true;
  }
}

export default isCnTelNum;
