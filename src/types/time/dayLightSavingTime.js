// is a given date in daylight saving time?
const isDayLightSavingTime = function(date) {
  let january = new Date(date.getFullYear(), 0, 1);
  let july = new Date(date.getFullYear(), 6, 1);
  let stdTimezoneOffset = Math.max(january.getTimezoneOffset(), july.getTimezoneOffset());
  return date.getTimezoneOffset() < stdTimezoneOffset;
};

export default isDayLightSavingTime;
