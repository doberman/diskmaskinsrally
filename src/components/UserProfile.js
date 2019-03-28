import React, { Component } from "react";
import { withCurrentUser } from "./hoc/withCurrentUser";
import CreateDuty from "./CreateDuty";
import CreateFriend from "./CreateFriend";

class UserProfile extends Component {
  render() {
    const { authUser } = this.props;
    return (
      <div>
        <h1>{authUser.displayName}</h1>
        <p className="">Add duties:</p>
        <CreateDuty field="duties" />
        <p className="">Add friends:</p>
        <CreateFriend field="friends" />
      </div>
    );
  }
}
export default withCurrentUser(UserProfile);
