import "./styles.css";
import React, { useState, useContext, useEffect } from "react";
import { getMonthData } from "./utils";
import CalendarHeader from "./components/CalendarHeader/CalendarHeader";
import Sidebar from "./components/Sidebar/Sidebar";
import Month from "./components/Month/Month";
import GlobalContext from "./context/GlobalContext";
export default function App() {
  const [currentMonth, setCurrentMonth] = useState(getMonthData());
  const { monthIndex } = useContext(GlobalContext);

  useEffect(() => {
    setCurrentMonth(getMonthData(monthIndex));
  }, [monthIndex]);

  return (
    <React.Fragment>
      <div className="container">
        <CalendarHeader />
        <div className="sidebarContainer">
          <Sidebar />
          <Month month={currentMonth} />
        </div>
      </div>
    </React.Fragment>
  );
}
