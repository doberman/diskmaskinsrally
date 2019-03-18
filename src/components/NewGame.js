import React, { Component } from "react";
import Button from "../components/Button";
import "../css/form-element.css";
import NewUser from "./NewUser";
import { withUsers } from "./hoc/withUsers";
console.log(withUsers);
class NewGame extends Component {
  state = {};

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
    const { ENPROPPAJAKEL, users } = this.props;

    console.log("NEW GAME PROPS", this.props);

    return (
      <div className="container">
        <ul>
          {users.map((user, index) => (
            <li key={index}>
              {user.first_name} {user.last_name} {user.email}
            </li>
          ))}
        </ul>
        <h2>{ENPROPPAJAKEL}</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="input-field">
            <input
              type="text"
              name="title"
              id="title"
              onChange={this.handleChange}
            />
            <label htmlFor="title">Game title</label>
          </div>
          <div className="input-field">
            <div>
              <p className="field-title">CHOOSE DUTY/IES</p>

              <label htmlFor="diskmaskin">
                <input
                  id="diskmaskin"
                  type="checkbox"
                  onChange={this.handleChange}
                />
                <span>Diskmaskinen</span>
              </label>
            </div>
          </div>
          <div className="input-field">
            <div>
              <label htmlFor="tvattmaskin">
                <input
                  id="tvattmaskin"
                  type="checkbox"
                  onChange={this.handleChange}
                />
                <span>Tvättmaskinen</span>
              </label>
            </div>
          </div>
          <div className="input-field">
            <div>
              <label htmlFor="handla">
                <input
                  id="handla"
                  type="checkbox"
                  onChange={this.handleChange}
                />
                <span>Handla</span>
              </label>
            </div>
          </div>
          <div className="input-field">
            <div>
              <span>
                <a href="">+ add new duty</a>
              </span>
            </div>
          </div>
          <div className="input-field">
            <label htmlFor="prize">Prize</label>

            <input
              id="prize"
              type="text"
              name="prize"
              onChange={this.handleChange}
            />
          </div>

          <div className="button-user-field input-field">
            <div className="button-user">
              <div>
                <p className="field-title">BUTTON 1 HAS USER</p>
                <label htmlFor="button_1_user1">
                  <input
                    id="button_1_user1"
                    name="group1"
                    type="radio"
                    onChange={this.handleChange}
                  />
                  <span>User 1</span>
                </label>
              </div>
              <div>
                <label htmlFor="button_1_user2">
                  <input
                    id="button_1_user2"
                    name="group1"
                    type="radio"
                    onChange={this.handleChange}
                  />
                  <span>User 2</span>
                </label>
              </div>
              <div>
                <span>
                  <a href="#" data-toggle="#modal1" data-target="#modal1">
                    + add new user
                  </a>
                  <NewUser />
                </span>
              </div>{" "}
            </div>
            <div className="button-user">
              <div>
                <p className="field-title">BUTTON 2 HAS USER</p>

                <label htmlFor="button_2_user1">
                  <input
                    id="button_2_user1"
                    name="group2"
                    type="radio"
                    onChange={this.handleChange}
                  />
                  <span>User 1</span>
                </label>
              </div>
              <div>
                <label htmlFor="button_2_user2">
                  <input
                    id="button_2_user2"
                    name="group2"
                    type="radio"
                    onChange={this.handleChange}
                  />
                  <span>User 2</span>
                </label>
              </div>

              <div>
                <span>
                  <a href="#modal1">+ add new user</a>
                </span>
              </div>
            </div>
          </div>
          <div className="input-field">
            <label htmlFor="days">Days</label>

            <input
              id="days"
              type="number"
              name="days"
              onChange={this.handleChange}
            />
          </div>

          <button className="btn" type="submit">
            Ok
          </button>
        </form>
      </div>
    );
  }
}
export default withUsers(NewGame);
