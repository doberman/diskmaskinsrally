import React, { Component } from "react";

class SignUp extends Component {
  state = {
    email: "",
    password: "",
    first_name: "",
    last_name: ""
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
          <h2 className="">Sign Up</h2>
          <div className="input-field">
            <label htmlFor="first_name">First name</label>
            <input type="text" id="first_name" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="last_name">Last name</label>
            <input type="text" id="last_name" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={this.handleChange} />
          </div>

          <button className="btn lighten-1 z-depth-0">Sign up</button>
        </form>
      </div>
    );
  }
}
export default SignUp;
