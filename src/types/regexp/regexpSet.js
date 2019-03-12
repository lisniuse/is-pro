// import regexp
import {
  isUrl,
  isEmail,
  isCreditCard,
  isAlphaNumeric,
  isTimeString,
  isUsZipCode,
  isCaPostalCode,
  isUkPostCode,
  isNanpPhone,
  isEppPhone,
  isSocialSecurityNumber,
  isAffirmative,
  isHexadecimal,
  isHexColor,
  isIpv4,
  isIpv6,
  isIp
} from './index';

// export regexp
export default {
  url: isUrl,
  email: isEmail,
  creditCard: isCreditCard,
  alphaNumeric: isAlphaNumeric,
  timeStringis: isTimeString,
  usZipCode: isUsZipCode,
  caPostalCode: isCaPostalCode,
  ukPostCode: isUkPostCode,
  nanpPhone: isNanpPhone,
  eppPhone: isEppPhone,
  socialSecurityNumber: isSocialSecurityNumber,
  affirmative: isAffirmative,
  hexadecimal: isHexadecimal,
  hexColor: isHexColor,
  ipv4: isIpv4,
  ipv6: isIpv6,
  ip: isIp
}
