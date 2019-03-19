import React from "react";
import { doSignOut } from "../Firebase";

const SignOut = e => <a onClick={e.doSignOut}>Sign Out</a>;
console.log(doSignOut);

export default SignOut;
