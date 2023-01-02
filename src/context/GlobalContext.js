import React from "react";

const GlobalContext = React.createContext({
  monthIndex: new Date("2022 04 01"),
  setMonthIndex: (index) => {}
});

export default GlobalContext;
