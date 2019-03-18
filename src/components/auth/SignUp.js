import React, { Component } from "react";
import firebase from "../firestore";
import CreateUser from "../CreateUser";
import { FirebaseContext } from "../Firebase/index";
import { withFirebase } from "../Firebase/index";

const SignUp = () => {
  return (
    <div className="container">
      <h2 className="">Sign Up</h2>
      <CreateUser />
    </div>
  );
};
export default SignUp;
