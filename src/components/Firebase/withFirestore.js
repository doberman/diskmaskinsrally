import React from "react";
import { firestore } from "./firebase";

export const withFirestore = Component => {
  return class WithFirestore extends Component {
    render() {
      return <Component {...this.props} firestore={firestore} />;
    }
  };
};
