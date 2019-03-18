import React, { Component } from "react";
import firebase from "../components/firestore";
import { Link, withRouter } from "react-router-dom";
import { withFirebase } from "./Firebase/index";

const INITIAL_STATE = {
  username: "",
  email: "",
  passwordOne: "",
  passwordTwo: "",
  error: null
};

class CreateUser extends Component {
  state = { ...INITIAL_STATE };

  handleSubmit = e => {
    const { username, email, passwordOne } = this.state;
    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push("/signin");
      })
      .catch(error => {
        this.setState({ error });
      });

    e.preventDefault();

    // e.preventDefault();
    // firebase.settings({});
    // const userRef = firebase.collection("users").add({
    //   first_name: this.state.first_name,
    //   last_name: this.state.last_name,
    //   email: this.state.email,
    //   password: this.state.password
    // });
    // this.setState({
    //   first_name: "",
    //   last_name: "",
    //   email: "",
    //   password: ""
    // });
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { username, email, passwordOne, passwordTwo, error } = this.state;
    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === "" ||
      email === "" ||
      username === "";
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="dark">
          <div className="input-field">
            <label htmlFor="first_name">Username</label>
            <input
              name="username"
              value={username}
              onChange={this.onChange}
              type="text"
            />
          </div>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input
              name="email"
              value={email}
              onChange={this.onChange}
              type="text"
            />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input
              name="passwordOne"
              value={passwordOne}
              onChange={this.onChange}
              type="password"
            />
          </div>
          <div className="input-field">
            <label htmlFor="password">Confirm Password</label>
            <input
              name="passwordTwo"
              value={passwordTwo}
              onChange={this.onChange}
              type="password"
            />
          </div>

          <button
            type="submit"
            disabled={isInvalid}
            className="btn lighten-1 z-depth-0"
          >
            Sign up
          </button>
          {error && <p>{error.message}</p>}
        </form>
      </div>
    );
  }
}

export default withRouter(withFirebase(CreateUser));
