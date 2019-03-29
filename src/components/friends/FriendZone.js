import React, { Component } from "react";
import { withUsers } from "../hoc/withAuthUser";
import firebase from "firebase";
import { firestore } from "../Firebase";
import Friends from "../friends/Friends";
import CreateFriend from "../friends/CreateFriend";

class FriendZone extends Component {
  state = {};

  deleteFriend = email => {
    const userId = firebase.auth().currentUser.uid;

    console.log("email", email);

    firestore
      .collection("users")
      .doc(userId)
      .update({
        friends: firebase.firestore.FieldValue.arrayRemove(email)
      });
  };

  render() {
    const { users } = this.props;
    const userId = firebase.auth().currentUser.uid;
    if (!userId || users.length === 0) {
      return null;
    }
    const friends = users.filter(user => user.id === userId)[0].friends;
    if (!userId || friends.length === 0) {
      return null;
    }
    return (
      <div>
        <CreateFriend field="friends" />
        <Friends friends={friends} deleteFriend={this.deleteFriend} />
      </div>
    );
  }
}
export default withUsers(FriendZone);
