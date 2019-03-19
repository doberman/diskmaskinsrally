import React, { Component } from "react";
import NewUser from "../NewUser";
import { Link, withRouter } from "react-router-dom";
import { doSignInWithEmailAndPassword } from "../Firebase";

const INITIAL_STATE = {
  email: "",
  password: "",
  error: null
};

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = e => {
    e.preventDefault();

    const { email, password } = this.state;

    doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });

        this.props.history.push("/");
      })
      .catch(error => {
        this.setState({ error });
      });
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { email, password, error } = this.state;
    const isInvalid = password === "" || email === "";

    return (
      <div className="container">
        <form onSubmit={this.onSubmit}>
          <h2 className="">Sign In</h2>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input
              name="email"
              value={email}
              onChange={this.onChange}
              type="text"
            />{" "}
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input
              name="password"
              value={password}
              onChange={this.onChange}
              type="password"
            />{" "}
          </div>
          <button
            disabled={isInvalid}
            type="submit"
            className="btn lighten-1 z-depth-0"
          >
            Sign In
          </button>
          <Link to="/signup" className="">
            <p>Don't have an account?</p>
          </Link>

          {error && <p>{error.message}</p>}
        </form>
      </div>
    );
  }
}

export default withRouter(SignIn);
