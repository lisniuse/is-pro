const is = require('../dist/umd/ispro.js');
let value1 = [
  1,
  '2',
  function() {
    return false
  },
  {
    a: 1,
    b: 2
  }
];
let value2 = [
  1,
  '2',
  function() {
    return true
  },
  {
    a: 1,
    b: 2
  }
]
console.log(is.equal(value1, value2));

// let res = is.all.plainObject({ a: 1, b: 2 }, undefined);
// console.log(res);
