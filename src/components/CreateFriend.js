import React, { Component } from "react";
import firebase from "firebase";
import { firestore } from "./Firebase";
import { withUsers } from "./hoc/withAuthUser";

class CreateFriend extends Component {
  state = {};

  handleSubmit = e => {
    e.preventDefault();
    const { field } = this.props;
    const userId = firebase.auth().currentUser.uid;
    const { users } = this.props;
    const userEmail = users.filter(email => email.email === this.state[field]);
    console.log("userEmail", userEmail);
    if (userEmail.length !== 0) {
      firestore
        .collection("users")
        .doc(userId)
        .update({
          [field]: firebase.firestore.FieldValue.arrayUnion(this.state[field])
        });
    } else {
      console.log("No user with email:", this.state[field]);
    }
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    // console.log("this.state.field:", this.state[field]);
  };

  render() {
    const { value } = this.state;
    const { field } = this.props;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            name={field}
            value={value}
            onChange={this.onChange}
            type="text"
          />
        </form>
      </div>
    );
  }
}

export default withUsers(CreateFriend);
