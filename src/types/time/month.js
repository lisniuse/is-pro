// is a given dates month equal given month parameter?
const isMonth = function (date, month) {
  return this.date(date) && month.toLowerCase() === months[date.getMonth()];
};
// month method does not support 'all' and 'any' interfaces
isMonth.api = ['not'];

export default isMonth;
