const isCnName = function (value) {
  if (!(/^[\u4E00-\u9FA5]{2,4}$/.test(value))) {
    return false;
  } else {
    return true;
  }
}

export default isCnName;
