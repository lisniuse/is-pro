// 微信账号校验规则
// This is the verification rule of WeChat account.

const isUsername = function (value) {
  if (!(/^[a-zA-Z]([-_a-zA-Z0-9]{5,19})+$/.test(value))) {
    return false;
  } else {
    return true;
  }
}

export default isUsername;
