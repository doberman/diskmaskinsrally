import React, { Component } from "react";
import firebase from "firebase";
import { firestore } from "./Firebase";

class CreateDuty extends Component {
  state = {};

  handleSubmit = e => {
    e.preventDefault();
    const { field } = this.props;
    const userId = firebase.auth().currentUser.uid;
    firestore
      .collection("users")
      .doc(userId)
      .update({
        [field]: firebase.firestore.FieldValue.arrayUnion(this.state[field])
      });
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    // console.log("this.state.field:", this.state[field]);
  };

  render() {
    const { value } = this.state;
    const { field, onSubmit } = this.props;
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

export default CreateDuty;
