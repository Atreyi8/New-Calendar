import React from "react";
import "./Month.css";
import Day from "../Day/Day";
const Month = ({ month }) => {
  return (
    <div className="monthContainer">
      {month.map((row, i) => {
        return (
          <React.Fragment key={i}>
            {row.map((day, idx) => {
              return <Day day={day} key={idx} rowIdx={i} />;
            })}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Month;
