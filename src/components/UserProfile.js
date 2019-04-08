import React, { Component } from "react";
import { withCurrentUser } from "./hoc/withCurrentUser";
import CreateDuty from "./duties/CreateDuty";
import FriendZone from "./friends/FriendZone";
import DutyZone from "./duties/DutyZone";
import ShowGames from "./games/ShowGames";

class UserProfile extends Component {
  state = {};
  render() {
    const { authUser } = this.props;
    console.log("authUser", authUser);
    return (
      <div>
        <h1>{authUser.displayName}</h1>
        <div style={{ display: "flex" }}>
          <DutyZone />
          <FriendZone />
          <ShowGames />
        </div>
      </div>
    );
  }
}
export default withCurrentUser(UserProfile);
//Om ett game är slut så ska man få det som notis på Profilsidan.
// return (game.daysToEnd === 0 ? (
//   <div className="container_scoreboard">
//     <h1>The winner is:</h1>
//     <h1> {game.users[1].name} :D </h1>
//   </div>
// ) : 'hej'
