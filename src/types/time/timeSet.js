//import time
import {
  isDate,
  isToday,
  isYesterday,
  isTomorrow,
  isPast,
  isFuture,
  isDay,
  isMonth,
  isYear,
  isLeapYear,
  isWeekday,
  isWeekend,
  isInDateRange,
  isInLastWeek,
  isInLastMonth,
  isInLastYear,
  isInNextWeek,
  isInNextMonth,
  isInNextYear,
  isQuarterOfYear,
  isDayLightSavingTime
} from './index';

// export time
export default {
  date: isDate,
  today: isToday,
  yesterday: isYesterday,
  tomorrow: isTomorrow,
  past: isPast,
  future: isFuture,
  day: isDay,
  month: isMonth,
  year: isYear,
  leapYear: isLeapYear,
  weekday: isWeekday,
  weekend: isWeekend,
  inDateRange: isInDateRange,
  inLastWeek: isInLastWeek,
  inLastMonth: isInLastMonth,
  inLastYear: isInLastYear,
  inNextWeek: isInNextWeek,
  inNextMonth: isInNextMonth,
  inInNextYear: isInNextYear,
  quarterOfYear: isQuarterOfYear,
  dayLightSavingTime: isDayLightSavingTime
}
