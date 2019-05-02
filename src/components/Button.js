import React, { Component, Fragment } from "react";
import firebase from "firebase";
import { withFirestore } from "./Firebase";

class Button extends Component {
  handleCount = e => {
    e.preventDefault();
    const {
      dutyName,
      dutyScore,
      game: { id: gameId },
      user: { id: userId },
      firestore
    } = this.props;

    firestore
      .collection("games")
      .doc(gameId)
      .update({
        [`users.${userId}.duty_score.${dutyName}`]: dutyScore + 1
      });
  };

  render() {
    const { dutyName } = this.props;

    return (
      <Fragment>
        <div style={{ padding: "50px" }}>
          <span className="typography--small" style={{ display: "block" }}>
            {dutyName}
          </span>
          <a
            onClick={this.handleCount}
            id={dutyName}
            className="gobutton"
            href="#"
          >
            +
          </a>
        </div>
      </Fragment>
    );
  }
}

export default withFirestore(Button);
