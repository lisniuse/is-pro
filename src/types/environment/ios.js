import isIos from './ios';
import isIpad from './ipad';
import isIpod from './ipod';

// is current device ios?
const isIos = function () {
  return isIphone() || isIpad() || isIpod();
};

export default isIos;
