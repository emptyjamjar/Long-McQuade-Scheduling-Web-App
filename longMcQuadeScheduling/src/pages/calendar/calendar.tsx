import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import "react-big-calendar/lib/css/react-big-calendar.css";
import React, { useState } from "react";
import Header from "../../components/Header";
import DateTimePicker from "react-datetime-picker";
import "react-datetime-picker/dist/DateTimePicker.css";
import "react-clock/dist/Clock.css";

// TODO: NEED TO UPDATE DATE-TIME-PICKER TO ONLY APPEAR WHEN SCHEDULE CHANGE IS REQUESTED
// TODO: NEED TO FIGURE OUT Z-INDEX ON CALENDER DATE BUTTONS
// TODO: CLEAN UP CODE
// TODO: MAKE REQUEST CHANGE DATEPICKER BE A POP UP WHEN LESSON IS CLICKED ON CALENDAR

const locales = {
  "en-US": "date-fns/locale/en-US",
};

let today = new Date();

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const lessonEvents = [
  {
    title: "Violin with Jana",
    start: new Date(2023, 9, 25, 15, 30),
    end: new Date(2023, 9, 25, 16),
  },
  {
    title: "Violin with Jana",
    start: new Date(2023, 10, 1, 15, 30),
    end: new Date(2023, 10, 1, 16),
  },
];

function CalendarPage() {
  const [newEvent, setNewEvent] = useState({
    title: "",
    start: new Date(today),
    end: new Date(today),
  });

  const [allEvents, setAllEvents] = useState(lessonEvents);

  const handleLessonChange = () => {
    setAllEvents([...allEvents, newEvent]);
  };

  return (
    <div id="calendar">
      <Header message="Calendar" name=""></Header>
      <h2>Request Lesson Change</h2>
      <div>
        <input
          type="text"
          placeholder="Add Title"
          style={{
            width: "20%",
            marginRight: "10px",
          }}
          value={newEvent.title}
          onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
        />
        <DateTimePicker
          minDate={new Date(today)}
          // onChange={(start) => setNewEvent({ ...newEvent, start })}
          yearPlaceholder="yyyy"
          monthPlaceholder="mm"
          dayPlaceholder="dd"
        />
      </div>
      <Calendar
        localizer={localizer}
        events={allEvents}
        startAccessor="start"
        endAccessor="end"
        min={
          new Date(today.getFullYear(), today.getMonth(), today.getDate(), 13)
        }
        max={
          new Date(today.getFullYear(), today.getMonth(), today.getDate(), 21)
        }
        style={{
          height: 500,
          width: 950,
          fontFamily: "Raleway",
        }}
      />
    </div>
  );
}

export default CalendarPage;
