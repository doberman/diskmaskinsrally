import React, { Component } from "react";
import Duty from "./Duty";
import Button from "./Button";
import "../css/taskRow.css";
import avatar from "../assets/avatar.svg";
import UserAvatar from "./UserAvatar";

class UserScore extends Component {
  render() {
    const { user } = this.props;

    // const gameUserName = gameUser.map(g => g.map(gh => <div>{gh.name}</div>));
    // const gameUserScores = gameUser.map(g => g.map(gh => gh.duty_scores));

    return (
      <div>
        {" "}
        <div className="container_scoreboard">
          {Object.keys(user.duty_scores).map(function(duty) {
            const dutyScore = user.duty_scores[duty];

            return <Button name={duty} score={dutyScore} />;
          })}
        </div>
        <div className="tasksvertical">
          <UserAvatar name={user.name} />

          <div className="">
            {Object.keys(user.duty_scores).map(function(duty) {
              const dutyScore = user.duty_scores[duty];
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
