import { useState } from 'react';
import api from '../services/apiConfig/userEntry';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Modal, Button } from 'react-bootstrap';

export default function DeleteButton(props) {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  // delete request
  const handleDelete = async () => {
    await api.delete(`${props.userEntry.id}`);

    toast.success('Deleting Record');
    navigate('/user-entries');
  };

  // showing or closing modal function
  const handleModal = () => {
    setShow((prevShow) => !prevShow);
  };

  return (
    <div>
      <Button
        variant="danger"
        onClick={() => {
          handleModal();
        }}
      >
        Delete
      </Button>
      <Modal
        show={show}
        onHide={() => {
          handleModal();
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Delete Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="alert alert-danger">
            Are you sure you want to permanently delete this record?
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="default"
            onClick={() => {
              handleModal();
            }}
          >
            Cancel
          </Button>
          <Button
            variant="danger"
            onClick={() => {
              handleDelete();
            }}
          >
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
