import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { doCreateUserWithEmailAndPassword, withFirestore } from "./Firebase";
import firebase from "firebase";

import PropTypes from "prop-types";

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
    const { email, passwordOne } = this.state;
    const { firestore } = this.props;

    doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        if (authUser.user) {
          authUser.user
            .updateProfile({
              displayName: this.state.username
            })
            .then(s => {
              const userId = firebase.auth().currentUser.uid;
              const userEmail = firebase.auth().currentUser.email;
              console.log(userEmail, userId);
              firestore
                .collection("users")
                .doc(userId)
                .set({
                  friends: [],
                  duties: [],
                  id: userId,
                  email: userEmail,
                  displayName: this.state.username
                });
              this.setState({ ...INITIAL_STATE });
              this.props.history.push("/");
            });
        }
      })
      .catch(error => {
        this.setState({ error });
      });
    e.preventDefault();
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  };

  render() {
    const { username, email, passwordOne, passwordTwo, error } = this.state;
    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === "" ||
      email === "" ||
      username === "";
    const { match, location, history } = this.props;

    const headerColor =
      location.pathname === "/newgame"
        ? { color: "black" }
        : { color: "white" };

    return (
      <div>
        <form onSubmit={this.handleSubmit} className="dark">
          <div className="input-field">
            <label htmlFor="first_name">Username</label>
            <input
              style={headerColor}
              name="username"
              value={username}
              onChange={this.onChange}
              type="text"
            />
          </div>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input
              style={headerColor}
              name="email"
              value={email}
              onChange={this.onChange}
              type="email"
            />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input
              style={headerColor}
              name="passwordOne"
              value={passwordOne}
              onChange={this.onChange}
              type="password"
            />
          </div>
          <div className="input-field">
            <label htmlFor="password">Confirm Password</label>
            <input
              style={headerColor}
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

export default withRouter(withFirestore(CreateUser));
