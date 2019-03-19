import React, { Component } from "react";
import "../css/modal.css";
import CreateUser from "../components/CreateUser";
import Modal, { closeStyle } from "simple-react-modal";

class NewUser extends Component {
  constructor() {
    super();
    this.state = {};
  }

  show() {
    this.setState({ show: true });
  }

  close() {
    this.setState({ show: false });
  }

  render() {
    return (
      <div>
        <a style={{ cursor: "pointer" }} onClick={this.show.bind(this)}>
          + add new user
        </a>

        <Modal
          className="" //this will completely overwrite the default css completely
          style={{ color: "" }} //overwrites the default background
          containerStyle={{ background: "white" }} //changes styling on the inner content area
          containerClassName=""
          closeOnOuterClick={true}
          show={this.state.show}
          onClose={this.close.bind(this)}
        >
          <a style={closeStyle} onClick={this.close.bind(this)}>
            X
          </a>
          <div>
            <CreateUser />
          </div>
        </Modal>
      </div>
    );
  }
}

export default NewUser;
