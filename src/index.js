import type from './lib/type/index';

let is = {};

for (const key in type) {
  if (type.hasOwnProperty(key)) {
    const element = type[key];
    is[key] = element;
  }
}

export default is;
