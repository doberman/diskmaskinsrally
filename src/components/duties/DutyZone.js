import React, { Component } from "react";
import { withUsers } from "../hoc/withAuthUser";
import firebase from "firebase";
import { firestore } from "../Firebase";
import Duties from "../duties/Duties";
import CreateDuty from "../duties/CreateDuty";

class DutyZone extends Component {
  state = {};

  deleteDuty = dutyName => {
    const userId = firebase.auth().currentUser.uid;

    console.log("email", dutyName);

    firestore
      .collection("users")
      .doc(userId)
      .update({
        duties: firebase.firestore.FieldValue.arrayRemove(dutyName)
      });
  };

  render() {
    const { users } = this.props;
    const userId = firebase.auth().currentUser.uid;
    if (!userId || users.length === 0) {
      return null;
    }
    const duties = users.filter(user => user.id === userId)[0].duties;
    if (!userId) {
      return null;
    }
    return (
      <div style={{ margin: "20px" }}>
        <CreateDuty field="duties" />
        <p>My duties:</p>
        <Duties duties={duties} deleteDuty={this.deleteDuty} />
      </div>
    );
  }
}
export default withUsers(DutyZone);
