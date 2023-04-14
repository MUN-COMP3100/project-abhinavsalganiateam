import React from "react";
import { Modal, Button, Form } from "react-bootstrap";

const AddReviewModal = ({ isOpen, handleClose, handleSubmit }) => {
  const [username, setUsername] = React.useState("");
  const [review, setReview] = React.useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleSubmit({ username, review });
    setUsername("");
    setReview("");
  };

  return (
    <Modal show={isOpen} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add Review</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleFormSubmit}>
          <Form.Group className="mb-3" controlId="formUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formReview">
            <Form.Label>Review</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Write your review"
              value={review}
              onChange={(e) => setReview(e.target.value)}
              required
            />
          </Form.Group>
          <div className="d-flex justify-content-end">
            <Button variant="secondary" className="me-2" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default AddReviewModal;
