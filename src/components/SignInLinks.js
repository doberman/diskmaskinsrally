import React from "react";
import { NavLink } from "react-router-dom";
import SignOut from "../components/auth/SignOut";

const SignInLinks = () => {
  return (
    <ul className="right">
      <li>
        <NavLink to="/newgame">New game</NavLink>
      </li>
      <li>
        <SignOut />
        {/* <NavLink to="/signout">Log Out</NavLink> */}
      </li>
      <li>
        <NavLink to="/" className="btn btn-floating pink lighten-1">
          LM
        </NavLink>
      </li>
    </ul>
  );
};
export default SignInLinks;
