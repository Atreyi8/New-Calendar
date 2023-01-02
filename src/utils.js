import { getMonth, getYear, startOfMonth, sub } from "date-fns";

export const getMonthData = (date = new Date()) => {
  const month = getMonth(date);
  const year = getYear(date);
  const startDateOfMonth = startOfMonth(date);
  const firstDayOfMonth = startDateOfMonth.getDay();

  let previousMonthDays = 0 - firstDayOfMonth;

  const daysMatrix = new Array(5).fill([]).map(() => {
    return new Array(7).fill(null).map(() => {
      previousMonthDays++;
      if (previousMonthDays <= 0) {
        return sub(new Date(year, month, 1), {
          days: Math.abs(previousMonthDays - 1)
        });
      } else {
        return new Date(year, month, previousMonthDays);
      }
    });
  });

  return daysMatrix;
};
