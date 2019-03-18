import React, { Component } from "react";
import firebase from "./firestore";
import "../css/button.css";

class Button extends Component {
  state = {
    [this.props.name]: this.props.score
  };

  handleCount = e => {
    e.preventDefault();

    this.setState(prevState => ({
      [this.props.name]: prevState + 1
    }));

    firebase.settings({});
    const userRef = firebase.collection("games").update({
      "duty_scores.handla": [this.state.score]
    });
  };

  render() {
    const { name, score } = this.props;
    return (
      <div className="container_scoreboard">
        <div style={{ padding: "50px" }}>
          <span style={{ display: "block" }}>{name}</span>
          <a onClick={this.handleCount} id={name} className="gobutton" href="#">
            +
          </a>
          <div>{this.state.name}</div>
        </div>
      </div>
    );
  }
}

export default Button;
