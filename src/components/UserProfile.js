import React, { Component } from "react";
import { withCurrentUser } from "./hoc/withCurrentUser";

class UserProfile extends Component {
  render() {
    const { authUser } = this.props;
    return (
      <div>
        <h1>{authUser.displayName}</h1>
      </div>
    );
  }
}
export default withCurrentUser(UserProfile);
