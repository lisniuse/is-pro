import types from './types/types';
import mixinTypeof from './core/mixinTypeof';
import setInterfaces from './core/setInterfaces';
import compareVersion from './helper/compareVersion';
import comparator from './helper/comparator';
import {
  toString,
  slice,
  hasOwnProperty
} from './core/properties';

import {
  MAX_SAFE_INTEGER,
  freeGlobal,
  freeSelf,
  root,
  document,
  previousIs,
  navigator,
  platform,
  userAgent,
  vendor,
  days,
  months
} from './core/constant';

// define interfaces
let interfaces = {
  not: {},
  all: {},
  any: {}
};

//common prototype methods
let coreProperties = {
  //other
  MAX_SAFE_INTEGER: MAX_SAFE_INTEGER,
  //some methods to call later on
  _toString: toString,
  _slice: slice,
  _hasOwnProperty: hasOwnProperty,
  //environment
  _freeGlobal: freeGlobal,
  _freeSelf: freeSelf,
  _root: root,
  _document: document,
  _previousIs: previousIs,
  _navigator: navigator,
  _platform: platform,
  _userAgent: userAgent,
  _vendor: vendor,
  _days: days,
  _months: months
}

// helpers
let helpers = {
  _compareVersion: compareVersion,
  _comparator: comparator
}

// define 'is' object and current version
let is = Object.assign(
  coreProperties,
  types,
  interfaces,
  helpers,
  {
    VERSION: '0.1.0'
  }
);

setInterfaces(is);
mixinTypeof(is);

export default is;
