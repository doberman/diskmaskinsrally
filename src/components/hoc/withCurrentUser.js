import React, { Component } from "react";
import firebase from "firebase";

export const withCurrentUser = ComponentToWrap => {
  return class withCurrentUser extends Component {
    constructor(props) {
      super(props);

      this.state = {
        authUser: []
      };
    }

    componentDidMount() {
      const authUser = firebase.auth().currentUser;

      this.setState({
        authUser
      });
      console.log("providerData: ", authUser);
    }

    render() {
      const { authUser } = this.state;

      return <ComponentToWrap {...this.props} authUser={authUser} />;
    }
  };
};
