import React from "react";
import Button from "./Button";

import ProgressBar from "./ProgressBar";
import UserScore from "./UserScore";
import { getDutyTotalForGame } from "../utils/getDutyTotalsForGame";
import { withCurrentUser } from "./hoc/withCurrentUser";
import { withUsers } from "./hoc/withAuthUser";

import "../css/taskRow.css";
import { withGames } from "./hoc/withGames";

function Scoreboard(props) {
  const pathname = window.location.pathname.replace("/scoreboard/", "");

  const { games, authUser, users } = props;
  if (!authUser) {
    return null;
  }
  if (!users) {
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

  const usersDisplayName = Object.values(game.users).map(user => {
    return users.filter(username => username.email === user.name)[0];
  });

  const gameUsers = Object.values(game.users).map(user => user);

  // add display name (username) to game array
  usersDisplayName.map(c => {
    if (c) {
      Object.keys(gameUsers).forEach(userId => {
        if (gameUsers[userId].name === c.email) {
          return (gameUsers[userId].displayName = c.displayName);
        }
      });
    }
  });

  return (
    <div className="scoreboard-container">
      <span className="typography--xlarge">{game.title}</span>
      <p className="typography--small red-font">
        {game.daysToEnd === 1 && "LAST DAY!!!!"}
        {game.active === false && "(Old game)"}
      </p>

      <ProgressBar game={game} />

      <div className="container_scoreboard">
        <div className="Buttons-container">
          {Object.keys(game.users).map(userId => {
            return Object.keys(game.users[userId].duty_score).map(duty => {
              const dutyScore = game.users[userId].duty_score[duty];

              return game.users[userId].name === authUser.email ? (
                <Button
                  key={duty}
                  dutyName={duty}
                  dutyScore={dutyScore}
                  game={game}
                  // add id as prop in game.users.
                  user={{ id: userId, ...game.users[userId] }}
                />
              ) : null;
            });
          })}
        </div>
        <div className="UserScore-container">
          {Object.keys(game.users).map(userId => {
            return (
              <UserScore
                game={game}
                key={userId}
                dutyTotals={dutyTotals}
                user={{
                  id: userId,
                  ...game.users[userId]
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default withUsers(withCurrentUser(withGames(Scoreboard)));
