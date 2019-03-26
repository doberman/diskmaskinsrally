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
  }
  const game = games.filter(game => {
    return game.active;
  })[0];

  return (
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
