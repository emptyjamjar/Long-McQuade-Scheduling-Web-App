import { useState } from "react";
import Calendar from "react-calendar";
import Header from "../../components/Header";
import "react-calendar/dist/Calendar.css";
import "./calendar.css";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const CalendarApp = () => {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <>
      <div id="calendar">
        <Header message="Calendar" name=""></Header>
        <Calendar onChange={onChange} value={value} />
      </div>
    </>
  );
};

export default CalendarApp;
