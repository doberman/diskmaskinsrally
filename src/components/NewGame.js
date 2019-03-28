import React, { Component } from "react";
import Button from "../components/Button";
import "../css/form-element.css";
import NewUser from "./NewUser";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import firebase from "firebase";
import { withFirestore } from "./Firebase";
import { withUsers } from "./hoc/withAuthUser";
import Checkbox from "./Checkbox";

class NewGame extends Component {
  state = {
    active: false,
    day_start: {},
    day_end: "",
    duties: [],
    prize: "",
    title: "",
    users: {
      duty_score: {},
      name: ""
    }
  };

  handleSubmit = e => {
    e.preventDefault();

    const { firestore } = this.props;

    firestore.collection("games").add({
      active: false,
      day_start: new Date(),
      day_end: "",
      duties: [],
      prize: this.state.prize,
      title: this.state.title,
      users: {
        duty_score: {},
        name: ""
      }
    });
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  render() {
    const { users } = this.props;

    const currentUser = firebase.auth().currentUser;
    // If "cant of undefined"
    if (!currentUser || users.length === 0) {
      return null;
    }

    const currentUserEmail = currentUser.email;
    const theCurrentUser = users.filter(
      user => user.email === currentUserEmail
    );

    const theCurrentUsersDuties = theCurrentUser.map(
      currentUserDuty => currentUserDuty.duties
    )[0];
    console.log("duties:", theCurrentUsersDuties);

    return (
      <div className="container">
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
          <p className="field-title">CHOOSE DUTY/IES</p>
          {theCurrentUsersDuties.map(duty => (
            <Checkbox duty={duty} />
          ))}

          <div className="input-field">
            <div>
              <span>
                <a href="">+ add new duty</a>
              </span>
            </div>
          </div>
          <div className="button-user-field input-field">
            <div className="button-user">
              <p className="field-title">COMPETITOR</p>
              <div>
                <span>
                  <NewUser />
                </span>
              </div>
            </div>
          </div>
          <div className="input-field">
            <label htmlFor="days">Days</label>

            <DatePicker selected={this.state.startDate} />
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

          <button className="btn" type="submit">
            Ok
          </button>
        </form>
      </div>
    );
  }
}
export default withFirestore(withUsers(NewGame));
