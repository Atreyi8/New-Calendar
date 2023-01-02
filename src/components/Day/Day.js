import React from "react";
import { format } from "date-fns";
import "./Day.css";
const Day = ({ day, rowIdx }) => {
  const getTodaysDayClass = () => {
    if (format(day, "dd MMM yyyy") === format(new Date(), "dd MMM yyyy")) {
      return "todaysDayClass";
    } else {
      return "";
    }
  };
  return (
    <div className="dayContainer">
      <header className="headerContainer">
        {rowIdx === 0 ? (
          <p className="dayBox">{format(day, "EEE").toUpperCase()}</p>
        ) : (
          <p className="dayBox"></p>
        )}
        <p className={`dateBox ${getTodaysDayClass()}`}>{format(day, "dd")}</p>
      </header>
    </div>
  );
};

export default Day;
