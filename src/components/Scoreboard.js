import React from "react";
import Button from "./Button";

import ProgressBar from "./ProgressBar";
import UserScore from "./UserScore";
import { getDutyTotalForGame } from "../utils/getDutyTotalsForGame";
import { withCurrentUser } from "./hoc/withCurrentUser";

import "../css/taskRow.css";
import { withGames } from "./hoc/withGames";

function Scoreboard(props) {
  const pathname = window.location.pathname.replace("/scoreboard/", "");
  console.log("pathname", pathname);

  const { games, authUser } = props;
  if (!authUser) {
    return null;
  }
  if (games.length === 0) {
    return null;
  }

  //get right game
  const game = games.filter(game => {
    return game.id === pathname;
  })[0];

  const dutyTotals = getDutyTotalForGame(game);

  return (
    <div>
      <div className="scoreboard-container">
        <h1>{game.title}</h1>
        {game.daysToEnd === 1 && "LAST DAY!!!!"}
        {game.active === false && "Old game"}
      </div>
      <ProgressBar game={game} />

      <div
        className="container_scoreboard"
        style={{ display: "flex", flexDirection: "row" }}
      >
        <div className="buttons-container">
          {Object.keys(game.users).map(userId => {
            return Object.keys(game.users[userId].duty_score).map(duty => {
              const dutyScore = game.users[userId].duty_score[duty];
              const userWithId = {
                id: userId,
                ...game.users[userId]
              };
              return game.users[userId].name === authUser.email ? (
                <Button
                  dutyName={duty}
                  dutyScore={dutyScore}
                  game={game}
                  user={userWithId}
                />
              ) : null;
            });
          })}
        </div>
        {Object.keys(game.users).map(userId => (
          <UserScore
            game={game}
            key={userId}
            dutyTotals={dutyTotals}
            // add id as prop in users.
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

export default withCurrentUser(withGames(Scoreboard));
