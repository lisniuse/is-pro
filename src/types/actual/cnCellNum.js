const isCnCellNum = function (value) {
  if (!(/^1(3|4|5|7|8)\d{9}$/.test(value))) {
    return false;
  } else {
    return true;
  }
}

export default isCnCellNum;
