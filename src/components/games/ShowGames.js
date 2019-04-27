import React, { Component } from "react";
import { withGames } from "../hoc/withGames";
import { withCurrentUser } from "../hoc/withCurrentUser";
import { Link } from "react-router-dom";
import { Route } from "react-router-dom";
import Scoreboard from "../Scoreboard";

class ShowGames extends Component {
  render() {
    const { games, authUser } = this.props;
    if (!authUser) {
      return null;
    }
    //get only auth users games
    const currentUserGames = [];

    games.forEach(game => {
      Object.keys(game.users).forEach(userId => {
        if (game.users[userId].name === authUser.email)
          return currentUserGames.push(game);
      });
    });

    console.log("show games", currentUserGames);

    const style = game => ({
      color: game.active === true ? "green" : "red"
    });

    return (
      <div style={{ margin: "20px" }}>
        <div>My games:</div>

        {currentUserGames.map(game => (
          <ul>
            <Link key={game.id} to={`/scoreboard/${game.id}`}>
              <li style={style(game)} id={game.id}>
                {game.title}
              </li>
            </Link>
          </ul>
        ))}
      </div>
    );
  }
}
export default withGames(withCurrentUser(ShowGames));
