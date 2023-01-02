import React, { useContext, useEffect, useState } from "react";
import { getMonthData } from "../../utils";
import "./SmallCalendar.css";
import { format, add, sub } from "date-fns";
import GlobalContext from "../../context/GlobalContext";
const SmallCalendar = () => {
  const [smallmonthIndex, setSmallMonthIndex] = useState(new Date());
  const [currentMonth, setCurrentMonth] = useState(
    getMonthData(smallmonthIndex)
  );
  const { monthIndex } = useContext(GlobalContext);
  const handlePrevMonth = () => {
    let previousMonth = sub(smallmonthIndex, { months: 1 });
    setSmallMonthIndex(previousMonth);
  };

  const handleNextMonth = () => {
    let nextMonth = add(smallmonthIndex, { months: 1 });
    setSmallMonthIndex(nextMonth);
  };

  useEffect(() => {
    setSmallMonthIndex(monthIndex);
  }, [monthIndex]);
  useEffect(() => {
    setCurrentMonth(getMonthData(smallmonthIndex));
  }, [smallmonthIndex]);

  const getTodaysDayClass = (day) => {
    if (format(day, "dd MMM yyyy") === format(new Date(), "dd MMM yyyy")) {
      return "todaysDayClass";
    } else {
      return "";
    }
  };
  return (
    <div className="small-conatiner">
      <div className="small-header">
        {format(smallmonthIndex, "MMMM")} {format(smallmonthIndex, "YYY")}
        <div>
          <button className="smallmonthChangeButtons" onClick={handlePrevMonth}>
            <span>{"<"}</span>
          </button>
          <button className="smallmonthChangeButtons" onClick={handleNextMonth}>
            <span>{">"}</span>
          </button>
        </div>
      </div>
      <div className="datesContainer">
        {currentMonth[0].map((day, i) => (
          <span key={i} className="small-days">
            {format(day, "EEEEE")}
          </span>
        ))}
        {currentMonth.map((row, i) => (
          <React.Fragment key={i}>
            {row.map((date, idx) => (
              <button
                key={idx}
                className={`smalldateClass ${getTodaysDayClass(date)}`}
              >
                <span>{format(date, "d")}</span>
              </button>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default SmallCalendar;
