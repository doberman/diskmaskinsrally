import React, { Fragment } from "react";
import Duty from "./Duty";
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

      <div className="container_scoreboard">
        {game.users.map(user => (
          <UserScore key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}

export default withGames(Scoreboard);
