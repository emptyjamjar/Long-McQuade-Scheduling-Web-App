import Button from "react-bootstrap/esm/Button";
import { ReactNode, useState } from "react";
import { Modal } from "react-bootstrap";

interface ModalProps {
  children: ReactNode;
  show: boolean;
  onSubmit: () => void;
  onClose: () => void;
}

/* Modal for form submissions. Children, show, onClose, and onSubmit are props
that must be defined upon use */
function ConfirmSubmitModal({ children, show, onClose, onSubmit }: ModalProps) {
  const [modalShow, setModalShow] = useState(show);

  const handleModalClose = () => {
    setModalShow(false);
    onClose();
  };

  return (
    <>
      <Modal
        id="submitFormConfirmationModal"
        show={show}
        onHide={handleModalClose}
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>Confirm Lesson Cancellation</Modal.Title>
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onClose}>
            Back
          </Button>
          <Button variant="dark" onClick={onSubmit}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ConfirmSubmitModal;
