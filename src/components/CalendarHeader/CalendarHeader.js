import React, { useContext } from "react";
import "./CalendarHeader.css";
import logo from "../../assets/icons.png";
import GlobalContext from "../../context/GlobalContext";
import { add, format, sub } from "date-fns";
const CalendarHeader = () => {
  const { monthIndex, setMonthIndex } = useContext(GlobalContext);

  const handlePrevMonth = () => {
    let previousMonth = sub(monthIndex, { months: 1 });
    setMonthIndex(previousMonth);
  };

  const handleNextMonth = () => {
    let nextMonth = add(monthIndex, { months: 1 });
    setMonthIndex(nextMonth);
  };

  const handleReset = () => {
    setMonthIndex(new Date());
  };

  return (
    <div className="headerCalendar">
      <img src={logo} alt="calendar" className="logoClass" />
      <h1 className="calendarClass">Calendar</h1>
      <div className="todaybtn" onClick={handleReset}>
        Today
      </div>
      <button onClick={handlePrevMonth} className="monthChangeButtons">
        <span>{"<"}</span>
      </button>
      <button onClick={handleNextMonth} className="monthChangeButtons">
        <span>{">"}</span>
      </button>
      <h2 className="monthDisplay">
        {format(monthIndex, "MMMM")} {format(monthIndex, "YYY")}
      </h2>
    </div>
  );
};

export default CalendarHeader;
