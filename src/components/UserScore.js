import React, { Component, Fragment } from "react";
import Duty from "./Duty";
import Button from "./Button";
import avatar from "../assets/avatar.svg";
import UserAvatar from "./UserAvatar";
import { withCurrentUser } from "./hoc/withCurrentUser";

class UserScore extends Component {
  render() {
    const { user, game, authUser, dutyTotals } = this.props;
    console.log(this.props);
    if (!authUser) {
      return null;
    }
    return (
      <Fragment>
        <div id={user.name} className="user-score-container">
          <div className="user-avatar-container">
            <UserAvatar name={user.name} authUser={authUser} />

            {Object.keys(user.duty_score).map(duty => {
              const dutyScore = user.duty_score[duty];
              const dutyT = dutyTotals[duty];
              return (
                <Duty dutyT={dutyT} game={game} name={duty} score={dutyScore} />
              );
            })}
          </div>
        </div>
      </Fragment>
    );
  }
}
export default withCurrentUser(UserScore);
