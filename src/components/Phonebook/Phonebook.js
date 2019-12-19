import React, { Component } from "react";
const randomID = require("uuid/v1");

export default class Phonebook extends Component {
  state = {
    contacts: [],
    name: ""
  };

  addingNewContact = () => {};

  render() {
    return (
      <>
        <h2>Phonebook</h2>
        <input
          onChange={event => this.props.param(event.target.value)}
          type="text"
          placeholder="Enter name..."
        />
        <button>Add contact</button>
        <h2>Contacts</h2>
        <ul></ul>
      </>
    );
  }
}
