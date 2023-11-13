import { Calendar, dateFnsLocalizer } from "react-big-calendar";
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

/* Modal for lesson change requests. Will pop-up with a date-time picker */
function LessonRequestModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Start and  end dates for specified by user
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  // Available lessons within the users specified date range
  const availableLessonsDateRange = teacherAvailability.filter(
    (event) =>
      (event.start >= startDate && event.start <= endDate) ||
      (event.end >= startDate && event.end <= endDate) ||
      (event.start == startDate && event.end >= endDate)
  );

  return (
    <>
      <Button variant="dark" onClick={handleShow} id="requestLessonChange">
        Request Lesson Change
      </Button>

      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Request Lesson Change</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            {/* TODO: change values to user when backend connected*/}
            <Form.Group
              className="mb-3"
              controlId="lessonChangeDropdownTeacher"
            >
              <Form.Label>Teacher</Form.Label>
              <Form.Select aria-label="Upcoming Lessons">
                <option value="1">Jana</option>
              </Form.Select>
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="lessonChangeDropdownStudent"
            >
              <Form.Label>Student</Form.Label>
              <Form.Select aria-label="Upcoming Lessons">
                <option value="1">Ruth</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="lessonChangeDropdownLesson">
              <Form.Label>Your Upcoming Lessons</Form.Label>
              {/* Conditional logic for disabled dropdown */}
              {futureLessons.length > 0 ? (
                <Form.Select aria-label="Upcoming Lessons">
                  {futureLessons.map((event, index) => (
                    <option key={index} value={index}>
                      {event.title} - {format(event.start, "MM/dd/yyyy h:mm a")}
                    </option>
                  ))}
                </Form.Select>
              ) : (
                <Form.Select aria-label="Upcoming Lessons" disabled>
                  <option value="-1">No upcoming lessons scheduled</option>
                </Form.Select>
              )}
            </Form.Group>
            <Form.Group className="mb-3" controlId="lessonChangeDateRange">
              <Form.Label>Select a Date Range</Form.Label>
              <div id="date-range" aria-aria-describedby="dateRangeText">
                <Form.Control
                  type="date"
                  value={startDate.toISOString().slice(0, 10)}
                  onChange={(e) => setStartDate(new Date(e.target.value))}
                  min={new Date().toISOString().slice(0, 10)}
                  max={addDays(new Date(), 30).toISOString().slice(0, 10)}
                  name="start"
                  style={{ width: "175px" }}
                  placeholder="Start"
                />
                <Form.Control
                  type="date"
                  value={endDate.toISOString().slice(0, 10)}
                  onChange={(e) => setEndDate(new Date(e.target.value))}
                  min={startDate.toISOString().slice(0, 10)}
                  max={addDays(new Date(), 30).toISOString().slice(0, 10)}
                  name="end"
                  style={{ width: "175px" }}
                  placeholder="End"
                />
              </div>
              <Form.Text id="dateRangeText" muted>
                Lessons can only be moved a month in advance from today's date
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="dateTimePicker">
              <Form.Label>Available Dates</Form.Label>
              <Form.Select aria-label="Available Lessons">
                {availableLessonsDateRange.map((event, index) => (
                  <option key={index} value={index}>
                    {event.title} - {format(event.start, "MM/dd/yyyy h:mm a")}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="dark" onClick={handleClose}>
            Submit Request
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

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
        <LessonRequestModal></LessonRequestModal>
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
