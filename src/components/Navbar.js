import React from "react";
import { Link } from "react-router-dom";
import SignInLinks from "./SignInLinks";
import SignOutLinks from "./SignOutLinks";

import "../css/navbar.css";

const Navbar = () => {
  return (
    <nav className="nav-wrapper background-color darken-3">
      <div className="container">
        <Link to="/" className="brand-logo">
          Diskrally
        </Link>

        <SignInLinks />
        <SignOutLinks />
      </div>
    </nav>
  );
};
export default Navbar;