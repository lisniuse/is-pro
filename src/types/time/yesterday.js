// is a given date indicate yesterday?
const isYesterday = function (date) {
  let now = new Date();
  let yesterdayString = new Date(now.setDate(now.getDate() - 1)).toDateString();
  return this.date(date) && date.toDateString() === yesterdayString;
};

export default isYesterday;
