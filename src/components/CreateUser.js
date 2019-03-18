import React, { Component } from "react";
import firebase from "../components/firestore";

class CreateUser extends Component {
  state = {};

  handleSubmit = e => {
    e.preventDefault();
    firebase.settings({});
    const userRef = firebase.collection("users").add({
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email: this.state.email,
      password: this.state.password
    });
    this.setState({
      first_name: "",
      last_name: "",
      email: "",
      password: ""
    });
  };

  handleChange = e => {
    this.setState({
      //get right field
      [e.target.id]: e.target.value
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="dark">
          <div className="input-field">
            <label htmlFor="first_name">First name</label>
            <input
              type="text"
              id="first_name"
              onChange={this.handleChange}
              value={this.state.first_name}
            />
          </div>
          <div className="input-field">
            <label htmlFor="last_name">Last name</label>
            <input
              type="text"
              id="last_name"
              onChange={this.handleChange}
              value={this.state.last_name}
            />
          </div>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              onChange={this.handleChange}
              value={this.state.email}
            />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              onChange={this.handleChange}
              value={this.state.password}
            />
          </div>

          <button type="submit" className="btn lighten-1 z-depth-0">
            Sign up
          </button>
        </form>
      </div>
    );
  }
}

export default CreateUser;
