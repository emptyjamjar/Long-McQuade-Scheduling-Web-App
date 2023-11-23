import format from "date-fns/format";
import Button from "react-bootstrap/esm/Button";
import { useState } from "react";
import { Form, Modal } from "react-bootstrap";
import { addDays } from "date-fns";
import FormConfirmation from "./FormConfirmationModal";

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
    end: new Date(2023, 10, 16, 15, 30),
  },
  {
    title: "Jana",
    start: new Date(2023, 10, 23, 15),
    end: new Date(2023, 10, 23, 15, 30),
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

  // Start and  end dates forrange specified by user
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const [confirmationShow, setConfirmationShow] = useState(false);
  const handleConfirmationClose = () => setConfirmationShow(false);
  const handleConfirmationSubmit = () => {
    setConfirmationShow(false);
    handleClose();
  };
  const handleConfirmationShow = () => setConfirmationShow(true);

  const [selectedUpcomingLessonIndex, setSelectedUpcomingLessonIndex] =
    useState<number | "">("");

  const [selectedNewLessonIndex, setSelectedNewLessonIndex] = useState<
    number | ""
  >("");

  const availableLessonsDateRange = teacherAvailability.filter(
    (event) =>
      (event.start >= startDate && event.start <= endDate) ||
      (event.end >= startDate && event.end <= addDays(endDate, 1)) ||
      (event.start == startDate && event.end <= endDate)
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
                <Form.Select
                  aria-label="Upcoming Lessons"
                  value={selectedUpcomingLessonIndex}
                  onChange={(e) => {
                    console.log("e.target.value", e.target.value);
                    setSelectedUpcomingLessonIndex(
                      parseInt(e.target.value, 10)
                    );
                  }}
                >
                  <option key={""} value={""} disabled>
                    Select an upcoming lesson
                  </option>
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
                    name="startDatepicker"
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
                    name="endDatepicker"
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

              {/* Conditional logic for disabled dropdown */}
              {availableLessonsDateRange.length > 0 ? (
                <Form.Select
                  aria-label="Available Dates"
                  value={selectedNewLessonIndex}
                  onChange={(e) => {
                    console.log("e.target.value", e.target.value);
                    setSelectedNewLessonIndex(parseInt(e.target.value, 10));
                  }}
                >
                  <option key={""} value={""} disabled>
                    Select a new lesson date
                  </option>
                  {availableLessonsDateRange.map((event, index) => (
                    <option key={index} value={index}>
                      {event.title} - {format(event.start, "MM/dd/yyyy h:mm a")}
                    </option>
                  ))}
                </Form.Select>
              ) : (
                <Form.Select aria-label="Available Dates" disabled>
                  <option value="-1">
                    No availability in selected date range
                  </option>
                </Form.Select>
              )}
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
          <Button variant="dark" onClick={handleConfirmationShow}>
            Submit Request
          </Button>
        </Modal.Footer>
      </Modal>

      <FormConfirmation
        show={confirmationShow}
        onClose={handleConfirmationClose}
        onSubmit={handleConfirmationSubmit}
      >
        {(() => {
          if (
            selectedUpcomingLessonIndex !== "" &&
            selectedNewLessonIndex !== ""
          ) {
            return (
              <>
                You are about to make a request to switch your lesson on{" "}
                {`${format(
                  futureLessons[selectedUpcomingLessonIndex].start,
                  "MMMM d, yyyy hh:mm a"
                )}`}{" "}
                to{" "}
                {`${format(
                  availableLessonsDateRange[selectedNewLessonIndex].start,
                  "MMMM d, yyyy hh:mm a"
                )}`}
                {"."}
              </>
            );
          } else if (selectedUpcomingLessonIndex == "") {
            return <>Please select an upcoming lesson to change</>;
          } else {
            return <>Please select a date to switch your lesson to</>;
          }
        })()}

        {/* {selectedUpcomingLessonIndex !== "" ? (
          <>
            You are about to make a request to switch your lesson on{" "}
            {`${format(
              futureLessons[selectedUpcomingLessonIndex].start,
              "MMMM d, yyyy hh:mm a"
            )}`}{" "}
            {selectedNewLessonIndex !== "" ? (
              <>
                to{" "}
                {`${format(
                  availableLessonsDateRange[selectedNewLessonIndex].start,
                  "MMMM d, yyyy hh:mm a"
                )}`}
                {"."}
              </>
            ) : (
              "No new lesson date selected"
            )}
          </>
        ) : (
          "No upcoming lesson selected"
        )} */}
      </FormConfirmation>
    </>
  );
}

export default LessonChangeModal;
