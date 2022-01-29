import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

export default function PlanetDetailsModal(props) {
  const [show, setShow] = useState(false);

  // showing or closing modal function
  const handleModal = () => {
    setShow((prevShow) => !prevShow);
  };

  return (
    <div>
      <Button
        onClick={() => {
          handleModal();
        }}
      >
        Show Details
      </Button>
      <Modal
        show={show}
        onHide={() => {
          handleModal();
        }}
      >
        <Modal.Header closeButton>Random Facts</Modal.Header>
        <Modal.Body>{props.planetFacts}</Modal.Body>

        <Modal.Footer>
          <Button
            onClick={() => {
              handleModal();
            }}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
