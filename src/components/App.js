import React, { Component } from "react";
import Feedback from "./Feedback/Feedback";
import Reader from "./Reader/Reader";
import publications from "./Reader/publications.json";
import Phonebook from "./Phonebook/Phonebook";

class App extends Component {
  state = {
    contacts: [],
    name: ""
  };

  getParap = param => {
    console.log("in App", param);
  };
  render() {
    return (
      <>
        <Feedback />
        <Phonebook param={this.getParap} />
        <Reader items={publications} />
      </>
    );
  }
}

export default App;
