// is a given date future?
const isFuture = function (date) {
  let now = new Date();
  return this.date(date) && date.getTime() > now.getTime();
};

export default isFuture;
