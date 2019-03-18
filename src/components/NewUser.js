import React, { Component } from "react";
import "../css/newUser.css";
import SignUp from "./auth/SignUp";

class NewUser extends Component {
  render() {
    return (
      <div id="modal1" className="modal">
        <div className="modal-content">
          <a href="#!" className="modal-close">
            X
          </a>
          <SignUp />
        </div>
      </div>
    );
  }
}
export default NewUser;
