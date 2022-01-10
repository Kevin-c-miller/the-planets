import React from 'react';

export default function Form(props) {
  const { name, type, fact, image, userEntryName } = props.input;
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <label>Object Name</label>
        <input
          id="name"
          value={name}
          placeholder="Add Name"
          onChange={props.handleTextInput}
        />
        <br />

        <label>Type</label>
        <input
          id="type"
          value={type}
          placeholder="Comet, Asteroid, Dwarf Planet, etc.."
          onChange={props.handleTextInput}
        />
        <br />

        <label>Fact</label>
        <input
          id="fact"
          value={fact}
          placeholder="Add a fact about your entry"
          onChange={props.handleTextInput}
        />
        <br />

        <label>Image</label>
        <input
          id="image"
          value={image}
          placeholder="Add URL to an image (if applicable)"
          onChange={props.handleTextInput}
        />
        <br />

        <label>Your Name</label>
        <input
          id="userEntryName"
          value={userEntryName}
          placeholder="Enter Your Name"
          onChange={props.handleTextInput}
        />
        <br />

        <button>Submit</button>
      </form>
    </div>
  );
}
