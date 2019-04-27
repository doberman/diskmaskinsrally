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
import { NavLink } from "react-router-dom";

class NewGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      day_start: new Date(),
      day_end: new Date(),
      prize: "",
      title: "",
      users: {
        1: {
          duty_score: {},
          name: ""
        },
        2: {
          duty_score: {},
          name: ""
        }
      }
    };
    this.handleDateChange = this.handleDateChange.bind(this);
  }

  handleSubmit = e => {
    e.preventDefault();

    const { firestore } = this.props;

    firestore.collection("games").add({
      day_start: new Date(),
      day_end: this.state.day_end,
      prize: this.state.prize,
      title: this.state.title,
      users: {
        1: {
          duty_score: this.state.users[1].duty_score,
          name: this.state.users[1].name
        },
        2: {
          duty_score: this.state.users[2].duty_score,
          name: this.state.users[2].name
        }
      }
    });
    this.props.history.push("/profile");
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleDutyChange = e => {
    if (e.target.checked) {
      this.setState({
        users: {
          1: {
            ...this.state.users[1],
            duty_score: {
              ...this.state.users[1].duty_score,
              [e.target.id]: 0
            }
          },
          2: {
            ...this.state.users[2],
            duty_score: {
              ...this.state.users[2].duty_score,
              [e.target.id]: 0
            }
          }
        }
      });
    } else {
      const currentDutyScore = this.state.users[1].duty_score;
      console.log("currentDutyScore", currentDutyScore);
      delete currentDutyScore[e.target.id];
      this.setState(prevState => {
        return {
          users: {
            1: {
              ...prevState.users.duty_score,
              duty_score: currentDutyScore
            },
            2: {
              ...prevState.users.duty_score,
              duty_score: currentDutyScore
            }
          }
        };
      });
    }
  };

  handleFriendChange = e => {
    if (e.target.checked) {
      const currentUser = firebase.auth().currentUser;
      if (!currentUser) {
        return null;
      }

      const currentUserEmail = currentUser.email;
      this.setState({
        users: {
          1: {
            ...this.state.users[1],
            name: e.target.id
          },
          2: {
            ...this.state.users[2],
            name: currentUserEmail
          }
        }
      });
    } else {
      const currentFriend = this.state.users[1].name;
      delete currentFriend[e.target.id];
      this.setState(prevState => {
        return {
          users: {
            1: {
              ...prevState.users[1],
              name: currentFriend
            }
          }
        };
      });
    }
  };

  handleDateChange(date) {
    this.setState({
      day_end: date
    });
  }

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
    const theCurrentUsersFriends = theCurrentUser.map(
      currentUserFriend => currentUserFriend.friends
    )[0];

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
            <Checkbox
              onChange={this.handleDutyChange}
              item={duty}
              type="checkbox"
            />
          ))}

          <div className="input-field">
            <div>
              <NavLink to="/profile">+ add new duty</NavLink>
            </div>
          </div>
          <div className="button-user-field input-field">
            <div className="button-user">
              <p className="field-title">COMPETITOR</p>
              <div>
                {theCurrentUsersFriends.map(friend => (
                  <Checkbox
                    onChange={this.handleFriendChange}
                    name="Friends"
                    item={friend}
                    type="radio"
                  />
                ))}
                <NavLink to="/profile">+ add new user</NavLink>
              </div>
            </div>
          </div>
          <span className="field-title">End date:</span>
          <div className="input-field">
            <DatePicker
              selected={this.state.day_end}
              onChange={this.handleDateChange}
            />
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
