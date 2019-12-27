import React, { Component } from "react";
import Phonebook from "./Phonebook/Phonebook";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" }
    ],
    filter: ""
  };

  deleteContact = id => {
    this.setState(prev => {
      return {
        contacts: prev.contacts.filter(contact => contact.id !== id)
      };
    });
  };

  getContact = contact => {
    console.log(...this.state.contacts);
    this.setState(prev => {
      return {
        contacts: [...prev.contacts, contact]
      };
    });
    console.log(this.state);
  };

  dataSeacrh = e => {
    const value = e.target.value.toLowerCase();
    this.setState(() => {
      return {
        filter: value
      };
    });
  };

  render() {
    return (
      <>
        <Phonebook
          getContact={this.getContact}
          data={this.state.contacts}
          filter={this.state.filter}
          search={this.dataSeacrh}
          delete={this.deleteContact}
        />
      </>
    );
  }
}

export default App;
