import React, { Component } from "react";
import Button from "../components/Button";
import "../css/form-element.css";
import NewUser from "./NewUser";

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
    return (
      <div className="container">
        <h2>New game</h2>
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
            <p>
              <p className="field-title">CHOOSE DUTY/IES</p>

              <label htmlFor="diskmaskin">
                <input
                  id="diskmaskin"
                  type="checkbox"
                  onChange={this.handleChange}
                />
                <span>Diskmaskinen</span>
              </label>
            </p>
          </div>
          <div className="input-field">
            <p>
              <label htmlFor="tvattmaskin">
                <input
                  id="tvattmaskin"
                  type="checkbox"
                  onChange={this.handleChange}
                />
                <span>Tvättmaskinen</span>
              </label>
            </p>
          </div>
          <div className="input-field">
            <p>
              <label htmlFor="handla">
                <input
                  id="handla"
                  type="checkbox"
                  onChange={this.handleChange}
                />
                <span>Handla</span>
              </label>
            </p>
          </div>
          <div className="input-field">
            <p>
              <span>
                <a href="">+ add new duty</a>
              </span>
            </p>
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
              <p>
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
              </p>
              <p>
                <label htmlFor="button_1_user2">
                  <input
                    id="button_1_user2"
                    name="group1"
                    type="radio"
                    onChange={this.handleChange}
                  />
                  <span>User 2</span>
                </label>
              </p>
              <p>
                <span>
                  <a href="#modal1">+ add new user</a>
                  <NewUser />
                </span>
              </p>{" "}
            </div>
            <div className="button-user">
              <p>
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
              </p>
              <p>
                <label htmlFor="button_2_user2">
                  <input
                    id="button_2_user2"
                    name="group2"
                    type="radio"
                    onChange={this.handleChange}
                  />
                  <span>User 2</span>
                </label>
              </p>

              <p>
                <span>
                  <a href="#modal1">+ add new user</a>
                </span>
              </p>
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
export default NewGame;
