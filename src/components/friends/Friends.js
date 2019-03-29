import React, { Component } from "react";
import FriendItem from "./FriendItem";

export default class Friends extends Component {
  render() {
    return this.props.friends.map(friend => (
      <FriendItem
        key={friend.email}
        friend={friend}
        deleteFriend={this.props.deleteFriend}
      />
    ));
  }
}
