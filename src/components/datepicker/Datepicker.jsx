import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./DatePicker.scss";

const DatePicker = ({ selectedDate, onChange }) => {
  return (
    <div className="balance_calendar">
      <Calendar onChange={onChange} value={selectedDate} />
    </div>
  );
};

export default DatePicker;
