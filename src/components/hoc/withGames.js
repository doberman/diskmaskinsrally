import React, { Component } from "react";
import { firestore } from "../Firebase";

export const withGames = ComponentToWrap => {
  return class withGames extends Component {
    constructor(props) {
      super(props);

      this.state = {
        games: []
      };
    }

    componentDidMount() {
      console.log("WITH GAMES DID MOUNT");

      firestore.collection("games").onSnapshot(querySnapshot => {
        const games = querySnapshot.docs.map(doc => doc.data());
        // game.map()

        this.setState({
          games
        });

        console.log("Games: ", games);
      });
    }

    render() {
      const { games } = this.state;

      console.log("WITH GAMES PROPS", games);

      return <ComponentToWrap {...this.props} games={games} />;
    }
  };
};
