// is a given date past?
const isPast = function (date) {
  let now = new Date();
  return this.date(date) && date.getTime() < now.getTime();
};

export default isPast;
