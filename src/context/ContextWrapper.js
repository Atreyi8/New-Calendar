import React, { useState } from "react";
import GlobalContext from "./GlobalContext";
const ContextWrapper = (props) => {
  const [monthIndex, setMonthIndex] = useState(new Date());
  return (
    <GlobalContext.Provider value={{ monthIndex, setMonthIndex }}>
      {props.children}
    </GlobalContext.Provider>
  );
};

export default ContextWrapper;
