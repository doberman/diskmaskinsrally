import React from "react";
import { NavLink } from "react-router-dom";
import SignOut from "../components/auth/SignOut";
import { withCurrentUser } from "./hoc/withCurrentUser";

const SignInLinks = ({ authUser }) => {
  if (!authUser.displayName) {
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
            :)
          </NavLink>
        </li>
      </ul>
    );
  }
  const name = authUser.displayName.charAt(0);
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
          {name}
        </NavLink>
      </li>
    </ul>
  );
};
export default withCurrentUser(SignInLinks);
