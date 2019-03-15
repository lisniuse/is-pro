const isCnZipCode = function (value) {
  if (!(/^[1-9][0-9]{5}$/.test(value))) {
    return false;
  } else {
    return true;
  }
}

export default isCnZipCode;
