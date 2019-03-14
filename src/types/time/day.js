// is a given date indicate today?

const isDay = function (date, day) {
  return this.date(date) && day.toLowerCase() === this._days[date.getDay()];
};

isDay.api = ['not'];

export default isDay;
