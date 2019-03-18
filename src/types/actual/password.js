// 密码校验规则
// 密码同时包含数字和字母.
// This is the verification rule of password.

const isPassword = function (value) {
  if (!(/^(?!([a-zA-Z]+|\d+)$)[a-zA-Z\d]{7,18}$/.test(value))) {
    return false;
  } else {
    return true;
  }
}

export default isPassword;
