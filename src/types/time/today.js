// is a given date indicate today?
const isToday = function (date) {
  let now = new Date();
  let todayString = now.toDateString();
  return this.date(date) && date.toDateString() === todayString;
};

export default isToday;
