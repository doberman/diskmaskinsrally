import React from "react";
import { NavLink } from "react-router-dom";
import SignOut from "../components/auth/SignOut";
import { withCurrentUser } from "./hoc/withCurrentUser";

const SignInLinks = ({ authUser }) => {
  return (
    <ul className="right">
      <li>
        <NavLink to="/newgame">New game</NavLink>
      </li>
      <li>
        <SignOut />
      </li>
      <li>
        <NavLink to="/profile" className="btn btn-floating pink lighten-1">
          {!authUser.displayName && ":)"}
          {authUser.displayName && authUser.displayName.charAt(0)}
        </NavLink>
      </li>
    </ul>
  );
};
export default withCurrentUser(SignInLinks);
