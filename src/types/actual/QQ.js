const isQQ = function (value) {
  if (!(/^[1-9]\d{4,8}$/.test(value))) {
    return false;
  } else {
    return true;
  }
}

export default isQQ;
