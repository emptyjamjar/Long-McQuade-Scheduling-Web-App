import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import LessonChangeModal from "../../components/LessonChangeModal";
import CancelLessonModal from "../../components/CancelLessonModal";
import "react-big-calendar/lib/css/react-big-calendar.css";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import { useState } from "react";
import Header from "../../components/Header";
import "./calendar.css";

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

// Array of lesson events: will become autopopulated by database when frontend and backend
// are properly connected.
// TODO: connect to student lesson endpoint
const lessonEvents = [
  {
    title: "Violin with Jana",
    start: new Date(2023, 9, 25, 15, 30),
    end: new Date(2023, 9, 25, 16),
  },
  {
    title: "Violin with Jana",
    start: new Date(2023, 11, 1, 15, 30),
    end: new Date(2023, 11, 1, 16),
  },
  {
    title: "Violin with Jana",
    start: new Date(2023, 11, 29, 15, 30),
    end: new Date(2023, 11, 29, 16),
  },
];

/* Calendar page for admin, teachers, and students to check the scheduled lessons for that month, week,
or day */
function CalendarPage() {
  const [newEvent, setNewEvent] = useState({
    title: "",
    start: new Date(today),
    end: new Date(today),
  });

  const [allEvents, setAllEvents] = useState(lessonEvents);

  return (
    <div id="calendar" className="private-route-body">
      <div id="calendarHead">
        <Header message="Calendar" name=""></Header>
        <div id="calendarButtons">
          <LessonChangeModal></LessonChangeModal>
          <CancelLessonModal></CancelLessonModal>
        </div>
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
          height: 450,
          width: 950,
          fontFamily: "Raleway",
        }}
      />
    </div>
  );
}

export default CalendarPage;
