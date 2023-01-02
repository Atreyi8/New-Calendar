import React from "react";
import "./createEventButton.css";
import PlusImg from "../../assets/plus.svg";
const CreateEventButton = () => {
  return (
    <div className="createEventBtn">
      <img src={PlusImg} alt="create event" className="createEventIcon" />
      <span>Create</span>
    </div>
  );
};

export default CreateEventButton;
