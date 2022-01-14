import React from 'react';
import { Row, Form } from 'react-bootstrap';
import './InputFields.css';

export default function InputFields(props) {
  const { name, type, fact, image, userEntryName } = props.input;
  return (
    <div className="input-form">
      <Row>
        <Form>
          <Form.Label>Object Name</Form.Label>
          <Form.Control
            id="name"
            value={name}
            placeholder="Add Name"
            onChange={props.handleTextInput}
          />
          <br />

          <Form.Label>Type</Form.Label>
          <Form.Control
            id="type"
            value={type}
            placeholder="Comet, Asteroid, Dwarf Planet, etc.."
            onChange={props.handleTextInput}
          />
          <br />

          <Form.Label>Fact</Form.Label>
          <Form.Control
            id="fact"
            value={fact}
            placeholder="Add a fact about your entry"
            onChange={props.handleTextInput}
          />
          <br />

          <Form.Label>Image</Form.Label>
          <Form.Control
            id="image"
            value={image}
            placeholder="Add URL to an image (if applicable)"
            onChange={props.handleTextInput}
          />
          <br />

          <Form.Label>Your Name</Form.Label>
          <Form.Control
            id="userEntryName"
            value={userEntryName}
            placeholder="Enter Your Name"
            onChange={props.handleTextInput}
          />
          <br />

          <button className="btn btn-dark" onClick={props.handleSubmit}>
            Submit
          </button>
        </Form>
      </Row>
    </div>
  );
}
