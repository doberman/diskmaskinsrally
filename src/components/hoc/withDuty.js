import React, { Component } from "react";
import firestore from "../firestore";

export const withDuty = Component => {
  return class withDuty extends Component {
    constructor(props) {
      super(props);

      this.state = {
        duties: []
      };
    }

    componentDidMount() {
      console.log("WITH DUTY DID MOUNT");

      firestore.collection("duties").onSnapshot(querySnapshot => {
        const duties = querySnapshot.docs.map(doc => doc.data());

        this.setState({
          duties
        });

        console.log("Duties: ", duties);
      });
    }

    render() {
      const { duties } = this.state;

      console.log("WITH DUTY PROPS", duties);

      return <Component {...this.props} duties={duties} />;
    }
  };
};
