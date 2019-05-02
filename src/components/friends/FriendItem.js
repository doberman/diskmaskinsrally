import React, { Component } from "react";
import { DeleteButtonRound } from "../modules/DeleteButtonRound";

export default class FriendItem extends Component {
  render() {
    const email = this.props.friend;
    return (
      <div>
        <p>
          <li id={email}>
            {email}
            <DeleteButtonRound
              onclick={this.props.deleteFriend.bind(this, email)}
            />
          </li>
        </p>
      </div>
    );
  }
}
