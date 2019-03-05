import React, { Component } from "react";
import "../css/newUser.css";
import SignUp from "./auth/SignUp";

class NewUser extends Component {
  render() {
    return (
      <div id="modal1" class="modal">
        <div class="modal-content">
          <a href="#!" class="modal-close">
            X
          </a>
          <SignUp />
        </div>
      </div>
    );
  }
}
export default NewUser;
