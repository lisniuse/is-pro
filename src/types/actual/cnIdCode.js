
const area = {
  '11': '北京',
  '12': '天津',
  '13': '河北',
  '14': '山西',
  '15': '内蒙古',
  '21': '辽宁',
  '22': '吉林',
  '23': '黑龙江',
  '31': '上海',
  '32': '江苏',
  '33': '浙江',
  '34': '安徽',
  '35': '福建',
  '36': '江西',
  '37': '山东',
  '41': '河南',
  '42': '湖北',
  '43': '湖南',
  '44': '广东',
  '45': '广西',
  '46': '海南',
  '50': '重庆',
  '51': '四川',
  '52': '贵州',
  '53': '云南',
  '54': '西藏',
  '61': '陕西',
  '62': '甘肃',
  '63': '青海',
  '64': '宁夏',
  '65': '新疆',
  '71': '台湾',
  '81': '香港',
  '82': '澳门',
  '91': '国外'
}

const result = [
  {
    state: true,
    msg: '验证通过!'
  }, {
    state: false,
    msg: '身份证号码位数不对!'
  }, {
    state: false,
    msg: '身份证号码出生日期超出范围或含有非法字符!'
  }, {
    state: false,
    msg: '身份证号码校验错误'
  }, {
    state: false,
    msg: '身份证地区非法!'
  }
];

const checkCnIdCode = function (idcode) {
  if (this.not.string(idcode)) {
    return result[3];
  }
  idcode = idcode ? (idcode + '') : '';
  let ereg = "";
  let Y, JYM, S, M;
  let idcodeArray = new Array();
  idcodeArray = idcode.split('');
  //地区检验   
  if (area[parseInt(idcode.substr(0, 2))] == null) return result[4];
  //身份号码位数及格式检验   
  switch (idcode.length) {
    //15位身份号码检测  
    case 15:
      if ((parseInt(idcode.substr(6, 2)) + 1900) % 4 == 0 || ((parseInt(idcode.substr(6, 2)) + 1900) % 100 == 0 && (parseInt(idcode.substr(6, 2)) + 1900) % 4 == 0)) {
        ereg = /^[1-9][0-9]{5}[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))[0-9]{3}$/;//测试出生日期的合法性   
      } else {
        ereg = /^[1-9][0-9]{5}[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|1[0-9]|2[0-8]))[0-9]{3}$/;//测试出生日期的合法性   
      }
      if (ereg.test(idcode)) {
        return result[0];
      } else {
        return result[2];
      }
      break;
    //18位身份号码检测  
    case 18:
      if (parseInt(idcode.substr(6, 4)) % 4 == 0 || (parseInt(idcode.substr(6, 4)) % 100 == 0 && parseInt(idcode.substr(6, 4)) % 4 == 0)) {
        ereg = /^[1-9][0-9]{5}19[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))[0-9]{3}[0-9Xx]$/;//闰年出生日期的合法性正则表达式   
      } else {
        ereg = /^[1-9][0-9]{5}19[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|1[0-9]|2[0-8]))[0-9]{3}[0-9Xx]$/;//平年出生日期的合法性正则表达式   
      }
      if (ereg.test(idcode)) {//测试出生日期的合法性   
        //计算校验位
        S = (parseInt(idcodeArray[0]) + parseInt(idcodeArray[10])) * 7
          + (parseInt(idcodeArray[1]) + parseInt(idcodeArray[11])) * 9
          + (parseInt(idcodeArray[2]) + parseInt(idcodeArray[12])) * 10
          + (parseInt(idcodeArray[3]) + parseInt(idcodeArray[13])) * 5
          + (parseInt(idcodeArray[4]) + parseInt(idcodeArray[14])) * 8
          + (parseInt(idcodeArray[5]) + parseInt(idcodeArray[15])) * 4
          + (parseInt(idcodeArray[6]) + parseInt(idcodeArray[16])) * 2
          + parseInt(idcodeArray[7]) * 1
          + parseInt(idcodeArray[8]) * 6
          + parseInt(idcodeArray[9]) * 3;
        Y = S % 11;
        M = 'F';
        JYM = '10X98765432';
        M = JYM.substr(Y, 1);//判断校验位   
        if (M == idcodeArray[17]) {
          return result[0];//检测ID的校验位   
        } else {
          return result[3];
        }
      } else {
        return result[2];
      }
      break;
    default:
      return result[1];
      break;
  }
}

const isCnIdCode = function(value, details) {
  let result = checkCnIdCode.call(this, value);
  if ( details === true ) {
    return result;
  } else {
    return result.state;
  }
}

export default isCnIdCode;
