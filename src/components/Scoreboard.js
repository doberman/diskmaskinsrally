import React from "react";
import ProgressBar from "./ProgressBar";
import UserScore from "./UserScore";
import { getDutyTotalForGame } from "../utils/getDutyTotalsForGame";

import "../css/taskRow.css";
import { withGames } from "./hoc/withGames";

function Scoreboard(props) {
  const pathname = window.location.pathname.replace("/scoreboard/", "");
  console.log("pathname", pathname);

  const { games } = props;
  if (games.length === 0) {
    return null;
  } //get first active game

  const game = games.filter(game => {
    return game.id === pathname;
  })[0];

  const dutyTotals = getDutyTotalForGame(game);
  return (
    <div>
      <div className="container_scoreboard">
        <h1>{game.title}</h1>
        {game.daysToEnd === 1 && "LAST DAY!!!!"}
        {game.active === false && "Old game"}
        <h5>Add what you've done!</h5>
      </div>
      <ProgressBar game={game} />
      <div className="container_scoreboard">
        {Object.keys(game.users).map(userId => (
          <UserScore
            game={game}
            key={userId}
            dutyTotals={dutyTotals}
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
