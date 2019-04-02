import React, { Fragment } from "react";
import Duty from "./Duty";
import ProgressBar from "./ProgressBar";
import UserScore from "./UserScore";

import "../css/taskRow.css";
import { withGames } from "./hoc/withGames";

function Scoreboard(props) {
  const { games } = props;
  if (games.length === 0) {
    return null;
  } //get first active game
  const game = games.filter(game => {
    return game.active;
  })[0];

  const duties = Object.values(game.users).map(userDuty => {
    return userDuty.duty_score;
  });

  // const bla = duties.map(x => {
  //   x.total = Object.values(x);
  //   return x.total;
  // });

  console.log("duties", duties);

  // if time's up show game results
  return game.daysToEnd === 0 ? (
    <div className="container_scoreboard">
      <h1>The winner is:</h1>
      <h1> {game.users[1].name} :D </h1>
    </div>
  ) : (
    <div>
      <div className="container_scoreboard">
        <h5>Add what you've done!</h5>
      </div>
      <ProgressBar game={game} />
      <div className="container_scoreboard">
        {Object.keys(game.users).map(userId => (
          <UserScore
            game={game}
            key={userId}
            // vill ha en ny lista av users i games där propertyn Uid också är inkluderad:
            user={{
              id: userId,
              ...game.users[userId]
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default withGames(Scoreboard);
