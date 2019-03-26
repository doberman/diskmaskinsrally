import React, { Component } from "react";
import Duty from "./Duty";
import Button from "./Button";
import "../css/taskRow.css";
import avatar from "../assets/avatar.svg";
import UserAvatar from "./UserAvatar";

class UserScore extends Component {
  render() {
    const { user, game } = this.props;
    console.log("game:", game);
    console.log("user:", user);
    return (
      <div>
        <div className="container_scoreboard">
          {Object.keys(user.duty_score).map(function(duty) {
            const dutyScore = user.duty_score[duty];

            return (
              <Button
                dutyName={duty}
                dutyScore={dutyScore}
                game={game}
                user={user}
              />
            );
          })}
        </div>
        <div className="tasksvertical">
          <UserAvatar name={user.name} />

          <div className="">
            {Object.keys(user.duty_score).map(function(duty) {
              const dutyScore = user.duty_score[duty];
              return <Duty name={duty} score={dutyScore} />;
            })}
          </div>

          <div />
        </div>
      </div>
    );
  }
}
export default UserScore;
