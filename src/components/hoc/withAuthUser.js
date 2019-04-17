import React from "react";
import { firestore } from "../Firebase";

export const withUsers = Component => {
  return class WithUsers extends Component {
    constructor(props) {
      super(props);

      this.state = {
        users: []
      };
    }

    componentDidMount() {
      firestore.collection("users").onSnapshot(querySnapshot => {
        const users = querySnapshot.docs.map(doc => doc.data());

        this.setState({
          users
        });

        console.log("Users: ", users);
      });
    }

    render() {
      const { users } = this.state;

      console.log("WITH USERS PROPS", users);

      return <Component {...this.props} users={users} />;
    }
  };
};
