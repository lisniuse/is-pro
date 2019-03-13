// is a given date indicate tomorrow?
const isTomorrow = function (date) {
  let now = new Date();
  let tomorrowString = new Date(now.setDate(now.getDate() + 1)).toDateString();
  return this.date(date) && date.toDateString() === tomorrowString;
};

export default isTomorrow;
