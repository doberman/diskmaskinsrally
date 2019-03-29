import React, { Component } from "react";
import { withCurrentUser } from "./hoc/withCurrentUser";
import CreateDuty from "./CreateDuty";
import Bar from "./profile/Bar";
import FriendZone from "./friends/FriendZone";
class UserProfile extends Component {
  state = {};
  render() {
    const { authUser } = this.props;
    console.log("authUser", authUser);
    return (
      <div>
        <h1>{authUser.displayName}</h1>
        <Bar />
        <p className="">Add duties:</p>
        <CreateDuty field="duties" />
        <FriendZone />
      </div>
    );
  }
}
export default withCurrentUser(UserProfile);
