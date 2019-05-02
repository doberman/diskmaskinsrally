import React, { Component } from "react";
import classNames from "classnames";
import { withCurrentUser } from "./hoc/withCurrentUser";
import CreateDuty from "./duties/CreateDuty";
import FriendZone from "./friends/FriendZone";
import DutyZone from "./duties/DutyZone";
import ShowGames from "./games/ShowGames";
import UserAvatar from "./UserAvatar";
import { DeleteButtonRound } from "./modules/DeleteButtonRound";

//classNames is a JavaScript utility for conditionally joining classNames together.

export const ProfileBar = ({ activeItem, toggleDisplay }) => {
  return (
    <div className="profile-bar">
      <div
        onClick={toggleDisplay}
        id="friends"
        className={classNames("profile-bar__box-text typography--medium", {
          "profile-bar__box-text--is-active": activeItem === "friends"
        })}
      >
        Friends
      </div>
      <div
        onClick={toggleDisplay}
        id="duties"
        className={classNames("profile-bar__box-text typography--medium", {
          "profile-bar__box-text--is-active": activeItem === "duties"
        })}
      >
        Duties
      </div>
      <div
        onClick={toggleDisplay}
        id="games"
        className={classNames("profile-bar__box-text typography--medium", {
          "profile-bar__box-text--is-active": activeItem === "games"
        })}
      >
        Games
      </div>
    </div>
  );
};
const INITIAL_STATE = {};

class UserProfile extends Component {
  state = {
    friends: false,
    duties: false,
    games: true
  };

  toggleDisplay = e => {
    // sets this to the state it doesnt have atm.
    Object.keys(this.state).forEach(component => {
      return component === e.target.id
        ? this.setState({ [component]: true })
        : this.setState({ [component]: false });
    });
  };

  render() {
    const { authUser } = this.props;
    const activeItem = Object.keys(this.state).filter(
      s => this.state[s] === true
    )[0];

    return (
      <div className="user-profile-container">
        <h1 className="typography--large">{authUser.displayName}</h1>
        <UserAvatar
          email={authUser.email}
          authUser={authUser}
          name={authUser.displayName}
        />
        <div style={{ display: "flex", flexDirection: "row" }}>
          <span style={{ marginRight: "10px" }} className="typography--mini">
            Change image
          </span>
          <DeleteButtonRound />
        </div>

        <ProfileBar
          activeItem={activeItem}
          toggleDisplay={this.toggleDisplay}
        />

        <div style={{ display: "flex" }}>
          {this.state.friends && <FriendZone />}
          {this.state.duties && <DutyZone />}
          {this.state.games && <ShowGames />}
        </div>
      </div>
    );
  }
}
export default withCurrentUser(UserProfile);
