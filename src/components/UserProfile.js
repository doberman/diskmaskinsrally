import React, { Component } from "react";
import { withCurrentUser } from "./hoc/withCurrentUser";
import CreateDuty from "./duties/CreateDuty";
import FriendZone from "./friends/FriendZone";
import DutyZone from "./duties/DutyZone";
import ShowGames from "./games/ShowGames";
import UserAvatar from "./UserAvatar";

import "./ProfileBar.scss";

export const ProfileBar = props => {
  return (
    <div className="profile-bar">
      <div
        onClick={props.toggleDisplay}
        id="friends"
        className="profile-bar__box-text"
      >
        Friends
      </div>
      <div
        onClick={props.toggleDisplay}
        id="duties"
        className="profile-bar__box-text"
      >
        Duties
      </div>
      <div
        onClick={props.toggleDisplay}
        id="games"
        className="profile-bar__box-text"
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
    //  this.setState({ [e.target.id]: !this.state[e.target.id] });
  };

  render() {
    const { authUser } = this.props;
    console.log("authUser", authUser);
    return (
      <div>
        <h1>{authUser.displayName}</h1>
        <UserAvatar
          email={authUser.email}
          authUser={authUser}
          name={authUser.displayName}
        />

        <ProfileBar toggleDisplay={this.toggleDisplay} />
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
