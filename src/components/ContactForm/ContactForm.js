import React from "react";

const ContactForm = ({ name, number, onHandleGetValue, onHandleSubmit }) => (
  <form onSubmit={onHandleSubmit}>
    <input
      value={name}
      onChange={onHandleGetValue}
      type="text"
      placeholder="Enter name..."
      name="name"
    />
    <input
      value={number}
      onChange={onHandleGetValue}
      type="text"
      placeholder="Enter name..."
      name="number"
    />
    <button type="submit">Add contact</button>
  </form>
);

export default ContactForm;
