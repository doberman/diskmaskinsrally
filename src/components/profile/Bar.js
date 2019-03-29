import React, { Component } from "react";
import { BarItem } from "./BarItem";

class Bar extends Component {
  state = {};
  render() {
    return (
      <div>
        <BarItem />

        <div className="">{this.state.displayFriends ? "friends" : "not"}</div>
      </div>
    );
  }
}

export default Bar;
