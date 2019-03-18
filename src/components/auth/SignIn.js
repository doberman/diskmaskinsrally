import React, { Component } from "react";
import NewUser from "../NewUser";
import { Link } from "react-router-dom";

class SignIn extends Component {
  state = {
    email: "",
    password: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log("STATE:", this.state);
  };
  handleChange = e => {
    this.setState({
      //get right field
      [e.target.id]: e.target.value
    });
  };
  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="dark">
          <h2 className="">Sign In</h2>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={this.handleChange} />
          </div>

          <button className="btn lighten-1 z-depth-0">Login</button>
        </form>
        <Link to="/signup" className="">
          <p>Don't have an account?</p>
        </Link>
      </div>
    );
  }
}

export default SignIn;
