import React, { Component } from "react";
import { withCurrentUser } from "./hoc/withCurrentUser";
import CreateDuty from "./duties/CreateDuty";
import FriendZone from "./friends/FriendZone";
import DutyZone from "./duties/DutyZone";
import ShowGames from "./games/ShowGames";
import UserAvatar from "./UserAvatar";

import "./ProfileBar.scss";

export const ProfileBar = () => {
  return (
    <div>
      <div className="profile-bar">
        <div className="profile-bar__box-text">Friends</div>
        <div className="profile-bar__box-text">Duties</div>
        <div className="profile-bar__box-text">Games</div>
      </div>
    </div>
  );
};

class UserProfile extends Component {
  state = {};
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

        <ProfileBar />
        <div style={{ display: "flex" }}>
          <DutyZone />
          <FriendZone />
          <ShowGames />
        </div>
      </div>
    );
  }
}
export default withCurrentUser(UserProfile);
