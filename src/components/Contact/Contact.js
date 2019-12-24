import React, { Component } from "react";

class Contact extends Component {
  render() {
    return (
      <ul>
        {this.props.data.map(elem => (
          <li key={elem.id} id={elem.id}>
            <span>
              {elem.name}: {elem.number}
            </span>
            <button onClick={this.props.delete}>Delete</button>
          </li>
        ))}
      </ul>
    );
  }
}

export default Contact;
