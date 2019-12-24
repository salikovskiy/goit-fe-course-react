import React, { Component } from "react";
import Contacts from "../Contact/Contact";
import Filter from "../Filter/Filter";
import ContactForm from "../ContactForm/ContactForm";

const randomID = require("uuid/v1");

const initialState = {
  name: "",
  number: ""
};

export default class Phonebook extends Component {
  state = {
    ...initialState
  };

  onHandleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    this.props.getContact(this.state);
    this.setState({
      ...initialState
    });
  };

  onHandleGetValue = e => {
    const info = e.target.value;
    const name = e.target.name;
    this.setState(() => {
      const x = {
        id: randomID(),
        [name]: info
      };
      console.log(x);
      return x;
    });
  };

  onHandleDelete = e => {
    const id = e.target.closest("li").id;
    this.props.delete(id);
  };

  render() {
    const { name, number } = this.state;
    return (
      <>
        <h2>Phonebook</h2>
        <ContactForm
          name={name}
          number={number}
          onHandleSubmit={this.onHandleSubmit}
          onHandleGetValue={this.onHandleGetValue}
        />
        <h2>Contacts</h2>
        <input
          onChange={this.props.search}
          type="text"
          placeholder="Search user by name..."
        />
        {this.props.filter !== "" ? (
          <Filter
            data={this.props.data}
            filter={this.props.filter}
            delete={this.onHandleDelete}
          />
        ) : (
          <Contacts data={this.props.data} delete={this.onHandleDelete} />
        )}
      </>
    );
  }
}
