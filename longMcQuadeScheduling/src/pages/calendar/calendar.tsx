import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import LessonChangeModal from "../../components/LessonChangeModal";
import "react-big-calendar/lib/css/react-big-calendar.css";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import { useState } from "react";
import Header from "../../components/Header";
import { Form, Modal } from "react-bootstrap";
import Button from "react-bootstrap/esm/Button";
import "./calendar.css";
import { addDays } from "date-fns";

// TODO: CLEAN UP CODE
// TODO: MAKE REQUEST CHANGE DATEPICKER BE A POP UP WHEN LESSON IS CLICKED ON CALENDAR

// Variables for calendar information
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
    start: new Date(2023, 10, 1, 15, 30),
    end: new Date(2023, 10, 1, 16),
  },
  {
    title: "Violin with Jana",
    start: new Date(2023, 10, 29, 15, 30),
    end: new Date(2023, 10, 29, 16),
  },
];

// Filter for lessons to retrieve only lessons in future
const futureLessons = lessonEvents.filter((event) => event.start >= new Date());

//Teacher availability
// TODO: get from backend when connected, will need to filter in modal by
// user chosen date range
const teacherAvailability = [
  {
    title: "Jana",
    start: new Date(2023, 10, 16, 15),
    end: new Date(2023, 10, 30, 15, 30),
  },
  {
    title: "Jana",
    start: new Date(2023, 10, 23, 15),
    end: new Date(2023, 10, 30, 15, 30),
  },
  {
    title: "Jana",
    start: new Date(2023, 10, 30, 15),
    end: new Date(2023, 10, 30, 15, 30),
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

  // TODO: test properly once frontend and backend are connected
  const handleLessonChange = () => {
    setAllEvents([...allEvents, newEvent]);
  };

  return (
    <div id="calendar" className="private-route-body">
      <div id="calendarHead">
        <Header message="Calendar" name=""></Header>
        <LessonChangeModal></LessonChangeModal>
      </div>

      {/* The actual calendar which displays a calendar for month, week, day, or agenda views */}
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
