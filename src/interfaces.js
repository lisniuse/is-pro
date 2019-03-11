import types from './types/types';
import isSameType from './types/type/sameType';
import setInterfaces from './core/setInterfaces';

// define interfaces
let apiSet = {
  not: {},
  all: {},
  any: {}
};

// define 'is' object and current version
let is = Object.assign(types, apiSet);
is.VERSION = '0.1.0';
setInterfaces(is);

// are given values same type?
// prevent NaN, Number same type check
is.sameType = isSameType(is);
// sameType method does not support 'all' and 'any' interfaces
is.sameType.api = ['not'];

export default is;
