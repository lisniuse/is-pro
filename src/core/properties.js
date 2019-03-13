import isWindowObject from '../types/object/windowObject';

// cache some methods to call later on
export const toString = Object.prototype.toString;
export const slice = Array.prototype.slice;
export const hasOwnProperty = Object.prototype.hasOwnProperty;

export const freeGlobal = isWindowObject(typeof global == 'object' && global) && global;
export const freeSelf = isWindowObject(typeof self == 'object' && self) && self;
export const root = freeGlobal || freeSelf || Function('return this')();

export const document = freeSelf && freeSelf.document;
export const previousIs = root.is;

// store navigator properties to use later
export const navigator = freeSelf && freeSelf.navigator;
export const platform = (navigator && navigator.platform || '').toLowerCase();
export const userAgent = (navigator && navigator.userAgent || '').toLowerCase();
export const vendor = (navigator && navigator.vendor || '').toLowerCase();
