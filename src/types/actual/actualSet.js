//import actual
import {
  isCnBankCard,
  isCnCellNum,
  isCnIdCode,
  isCnName,
  isCnTelNum,
  isCnZipCode,
  isQQ,
  isUsername,
  isPassword
} from './index';

// export actual
export default {
  cnBankCard: isCnBankCard,
  cnCellNum: isCnCellNum,
  cnIdCode: isCnIdCode,
  cnName: isCnName,
  cnTelNum: isCnTelNum,
  cnZipCode: isCnZipCode,
  QQ: isQQ,
  username: isUsername,
  password: isPassword
}
