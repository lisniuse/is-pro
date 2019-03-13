import types from './types/types';
import mixinTypeof from './core/mixinTypeof';
import setInterfaces from './core/setInterfaces';
import { 
  toString,
  slice,
  hasOwnProperty,
  freeGlobal,
  freeSelf,
  root,
  document,
  previousIs,
  navigator,
  platform,
  userAgent,
  vendor
} from './core/properties';

// define interfaces
let interfaces = {
  not: {},
  all: {},
  any: {}
};

//common prototype methods
let coreProperties = {
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
  _vendor: vendor
}

// define 'is' object and current version
let is = Object.assign(
  coreProperties,
  types,
  interfaces, 
  {
    VERSION: '0.1.0'
  }
);

setInterfaces(is);
mixinTypeof(is);

export default is;
