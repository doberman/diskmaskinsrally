import React, { Fragment } from "react";
// import "../css/taskRow.css";
import avatar from "../assets/avatar.svg";

const UserAvatar = props => {
  const { email, authName, authUser, showName, displayName } = props;
  const pathname = window.location.pathname;
  console.log("pathname", pathname);
  return (
    <Fragment>
      <img style={{ width: 60 }} src={avatar} alt="avatar" />
      {showName && (
        <p className="typography--medium">
          {email === authUser.email &&
            pathname.startsWith("/scoreboard/") &&
            displayName + " (me)"}
          {email === authUser.email &&
            !pathname.startsWith("/scoreboard/") &&
            displayName}
          {email !== authUser.email && displayName}
        </p>
      )}
    </Fragment>
  );
};
export default UserAvatar;
