import format from "date-fns/format";
import Button from "react-bootstrap/esm/Button";
import Alert from "react-bootstrap/Alert";
import { useState } from "react";
import { Form, Modal } from "react-bootstrap";
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
    start: new Date(2023, 11, 1, 15, 30),
    end: new Date(2023, 11, 1, 16),
  },
  {
    title: "Violin with Jana",
    start: new Date(2023, 11, 29, 15, 30),
    end: new Date(2023, 11, 29, 16),
  },
];

const futureLessons = lessonEvents.filter((event) => event.start >= new Date());

/* Modal for lesson canellations. Will pop-up with a cancellation form */
function LessonCancelModal() {
  const [modalShow, setModalShow] = useState(false);
  const handleModalClose = () => setModalShow(false);
  const handleModalShow = () => setModalShow(true);

  const [, setAlertShow] = useState(false);
  const handleAlertClose = () => setAlertShow(false);

  const [confirmationShow, setConfirmationShow] = useState(false);
  const handleConfirmationClose = () => setConfirmationShow(false);
  const handleConfirmationSubmit = () => {
    setConfirmationShow(false);
    handleModalClose();
  };
  const handleConfirmationShow = () => setConfirmationShow(true);

  const [selectedLessonIndex, setSelectedLessonIndex] = useState<number | "">(
    ""
  );

  return (
    <>
      <Button variant="dark" onClick={handleModalShow} id="cancelLessonButton">
        Cancel a Lesson
      </Button>
      {!confirmationShow && (
        <Modal
          id="cancelLessonModal "
          show={modalShow}
          onHide={handleModalClose}
          size="lg"
        >
          <Modal.Header closeButton>
            <Modal.Title>Cancel a Lesson</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Alert
              variant="warning"
              onClose={() => handleAlertClose()}
              dismissible
            >
              Cancelling a lesson does not excuse payment to the teacher unless
              it complies with our lesson centre cancellation policy
            </Alert>

            <Form>
              {/* TODO: change values to user when backend connected*/}
              <Form.Group
                className="mb-3"
                controlId="lessonCancelDropdownTeacher"
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
              <Form.Group className="mb-3" controlId="lessonCancelDropdown">
                <Form.Label>Your Upcoming Lessons</Form.Label>
                {/* Conditional logic for disabled dropdown */}
                {futureLessons.length > 0 ? (
                  <Form.Select
                    aria-label="Upcoming Lessons"
                    value={selectedLessonIndex}
                    onChange={(e) => {
                      console.log("e.target.value", e.target.value);
                      setSelectedLessonIndex(parseInt(e.target.value, 10));
                    }}
                  >
                    <option key={""} value={""} disabled>
                      Select an upcoming lesson
                    </option>
                    {futureLessons.map((event, index) => (
                      <option key={index} value={index}>
                        {event.title} -{" "}
                        {format(event.start, "MM/dd/yyyy h:mm a")}
                      </option>
                    ))}
                  </Form.Select>
                ) : (
                  <Form.Select aria-label="Upcoming Lessons" disabled>
                    <option value="-1">No upcoming lessons scheduled</option>
                  </Form.Select>
                )}
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Reason For Cancellation</Form.Label>
                <Form.Control as="textarea" rows={1} />
              </Form.Group>
              <Form.Text id="weeklyBiweeklyCancelText" muted>
                If you require a change to a weekly or biweekly lesson time,
                please contact lesson centre staff.
              </Form.Text>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleModalClose}>
              Close
            </Button>
            <Button variant="dark" onClick={handleConfirmationShow}>
              Cancel Lesson
            </Button>
          </Modal.Footer>
        </Modal>
      )}

      <FormConfirmation
        show={confirmationShow}
        onClose={handleConfirmationClose}
        onSubmit={handleConfirmationSubmit}
      >
        {selectedLessonIndex !== "" ? (
          <>
            You are about to cancel{" "}
            {`${futureLessons[selectedLessonIndex].title} on ${format(
              futureLessons[selectedLessonIndex].start,
              "MMMM d, yyyy hh:mm a"
            )}`}
          </>
        ) : (
          "No lesson selected"
        )}
      </FormConfirmation>
    </>
  );
}

export default LessonCancelModal;
