import React from "react";
import firebase from "./firestore";
import Button from "../components/Button";

class User extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      name: ""
    };
  }

  addUser = e => {
    e.preventDefault();
    const db = firebase.firestore();
    db.settings({
      timestampsInSnapshots: true
    });
    const userRef = db.collection("user").add({
      name: this.state.name,
      email: this.state.email
    });
    this.setState({
      name: "",
      email: ""
    });
  };

  //   With firebase.firestore() we’re initialising Firestore through firebase and saving to a variable.

  //   timestampsinSnapshots: true without this, we get a warning in the console, which tells us the timestamps stored in Firestore will be read back as timestamp objects, as opposed to system date objects.

  //   db.collection(“users”) is simply pointing to our database; the collection we created called users.

  //   finally the .add() method is submitting our data object with the users full name and email taken from our updated state.

  updateInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <form onSubmit={this.addUser}>
        <input
          type="text"
          name="name"
          placeholder="Name "
          onChange={this.updateInput}
          value={this.state.name}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={this.updateInput}
          value={this.state.email}
        />
        <Button />
      </form>
    );
  }
}

// docRef
//   .get()
//   .then(function(doc) {
//     if (doc.exists) {
//       console.log("Document data:", doc.data());
//     } else {
//       // doc.data() will be undefined in this case
//       console.log("No such document!");
//     }
//   })
//   .catch(function(error) {
//     console.log("Error getting document:", error);
//   });

export default User;
