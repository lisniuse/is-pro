// build a 'comparator' object for various comparison checks
const comparator = {
  '<': function (a, b) { return a < b; },
  '<=': function (a, b) { return a <= b; },
  '>': function (a, b) { return a > b; },
  '>=': function (a, b) { return a >= b; }
};

export default comparator;
