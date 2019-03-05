import React, { Component } from "react";
import firebase from "./firestore";
import "../css/button.css";

class Button extends Component {
  state = {
    type: ""
  };
  render() {
    return (
      <a className="floating-btn" type={this.state.type}>
        +
      </a>
    );
  }
}

export default Button;
