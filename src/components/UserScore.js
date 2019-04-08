import React, { Component, Fragment } from "react";
import Duty from "./Duty";
import Button from "./Button";
import "../css/taskRow.css";
import avatar from "../assets/avatar.svg";
import UserAvatar from "./UserAvatar";
import { withCurrentUser } from "./hoc/withCurrentUser";

class UserScore extends Component {
  render() {
    const { user, game, authUser, dutyTotals } = this.props;
    if (!authUser) {
      return null;
    }
    return (
      <Fragment>
        <div style={{ display: "flex" }}>
          {Object.keys(user.duty_score).map(function(duty) {
            const dutyScore = user.duty_score[duty];
            return user.name === authUser.email ? (
              <Button
                dutyName={duty}
                dutyScore={dutyScore}
                game={game}
                user={user}
              />
            ) : null;
          })}
        </div>

        <UserAvatar name={user.name} authUser={authUser} />

        <div className="container_duties">
          {Object.keys(user.duty_score).map(function(duty) {
            const dutyScore = user.duty_score[duty];
            const dutyT = dutyTotals[duty];
            return (
              <Duty dutyT={dutyT} game={game} name={duty} score={dutyScore} />
            );
          })}
        </div>

        <div />
      </Fragment>
    );
  }
}
export default withCurrentUser(UserScore);
