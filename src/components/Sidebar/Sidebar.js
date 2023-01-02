import React from "react";
import "./Sidebar.css";
import CreateEventButton from "../createEvent/createEventButton";
import SmallCalendar from "../SmallCalendar/SmallCalendar";
const Sidebar = () => {
  return (
    <div className="sidebarContainer1">
      <aside>
        <CreateEventButton />
        <SmallCalendar />
      </aside>{" "}
    </div>
  );
};

export default Sidebar;
