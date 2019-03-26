import React from "react";
import { doSignOut } from "../Firebase";

const SignOut = () => (
  <a href="/signin" onClick={doSignOut}>
    Sign Out
  </a>
);
console.log("doSignOut", doSignOut);

export default SignOut;
