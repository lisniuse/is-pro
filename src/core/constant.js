
export const freeGlobal = isWindowObject(typeof global == 'object' && global) && global;
import isWindowObject from '../types/object/windowObject';

export const freeSelf = isWindowObject(typeof self == 'object' && self) && self;
export const root = freeGlobal || freeSelf || Function('return this')();

export const document = freeSelf && freeSelf.document;
export const previousIs = root.is;

// store navigator properties to use later
export const navigator = freeSelf && freeSelf.navigator;
export const platform = (navigator && navigator.platform || '').toLowerCase();
export const userAgent = (navigator && navigator.userAgent || '').toLowerCase();
export const vendor = (navigator && navigator.vendor || '').toLowerCase();

export const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
export const months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];

//other
export const MAX_SAFE_INTEGER = 9007199254740991;
