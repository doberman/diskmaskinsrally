import React, { Component } from "react";
import firebase from "firebase";
import { firestore } from "../Firebase";
import { withUsers } from "../hoc/withAuthUser";

class CreateFriend extends Component {
  state = {
    error: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    const { field } = this.props;
    const userId = firebase.auth().currentUser.uid;
    const currentUserEmail = firebase.auth().currentUser.email;
    const { users } = this.props;
    const userEmail = users.filter(user => user.email === this.state[field]);

    if (userEmail.length !== 0 && this.state[field] !== currentUserEmail) {
      firestore
        .collection("users")
        .doc(userId)
        .update({
          [field]: firebase.firestore.FieldValue.arrayUnion(this.state[field])
        });
    } else {
      console.log("No user with email:", this.state[field]);
      this.setState({ error: "No user with email: " + this.state[field] });
    }
  };

  onChange = e => {
    this.setState({ error: "" });
    this.setState({ [e.target.name]: e.target.value });
    // console.log("this.state.field:", this.state[field]);
  };

  render() {
    const { value } = this.state;
    const { field } = this.props;
    return (
      <div>
        <p>Add friend:</p>
        <form onSubmit={this.handleSubmit}>
          <input
            className="input-text typography--mini left"
            name={field}
            value={value}
            onChange={this.onChange}
            type="text"
          />
        </form>
        <div className="typography--mini left red-font">{this.state.error}</div>
      </div>
    );
  }
}

export default withUsers(CreateFriend);
