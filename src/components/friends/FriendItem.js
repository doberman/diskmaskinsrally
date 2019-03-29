import React, { Component } from "react";

export default class FriendItem extends Component {
  render() {
    const email = this.props.friend;
    return (
      <div>
        <p>
          <li id={email}>
            {email}
            <button onClick={this.props.deleteFriend.bind(this, email)}>
              x
            </button>
          </li>
        </p>
      </div>
    );
  }
}
