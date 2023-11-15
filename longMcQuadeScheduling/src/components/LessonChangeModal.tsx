import format from "date-fns/format";
import Button from "react-bootstrap/esm/Button";
import { useState } from "react";
import { Form, Modal } from "react-bootstrap";
import { addDays } from "date-fns";

// Variables for calendar information
const locales = {
  "en-US": "date-fns/locale/en-US",
};

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
// TODO: get from backend when connected
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
function LessonChangeModal() {
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
            <Form.Group controlId="lessonChangeDateRange">
              <Form.Label>Select a Date Range</Form.Label>
              <div id="date-range" aria-describedby="dateRangeText">
                <Form.Group>
                  <Form.Control
                    type="date"
                    value={startDate.toISOString().slice(0, 10)}
                    onChange={(e) => setStartDate(new Date(e.target.value))}
                    min={new Date().toISOString().slice(0, 10)}
                    max={addDays(new Date(), 30).toISOString().slice(0, 10)}
                    name="start"
                    style={{ width: "175px" }}
                    placeholder="Start"
                    aria-describedby="dateRangeStart"
                  />
                  <Form.Text id="dateRangeStart" muted>
                    Start
                  </Form.Text>
                </Form.Group>
                <Form.Group
                  style={{
                    marginLeft: "10px",
                  }}
                >
                  <Form.Control
                    type="date"
                    aria-describedby="dateRangeEnd"
                    value={endDate.toISOString().slice(0, 10)}
                    onChange={(e) => setEndDate(new Date(e.target.value))}
                    min={startDate.toISOString().slice(0, 10)}
                    max={addDays(new Date(), 30).toISOString().slice(0, 10)}
                    name="end"
                    style={{ width: "175px" }}
                    placeholder="End"
                  />
                  <Form.Text
                    id="dateRangeEnd"
                    muted
                    style={{
                      width: "fit-content",
                      height: "fit-content",
                      padding: "0",
                      margin: "0",
                    }}
                  >
                    End
                  </Form.Text>
                </Form.Group>
              </div>
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
            <Form.Text id="dateRangeText" muted>
              Lessons can only be moved as far as a month in advance from
              today's date. Please contact the lesson centre if you need to move
              a lesson outside of this time frame.
            </Form.Text>
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

export default LessonChangeModal;
