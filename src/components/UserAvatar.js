import React, { Component } from "react";
import Duty from "./Duty";
import "../css/taskRow.css";
import avatar from "../assets/avatar.svg";

const UserAvatar = props => {
  const { name } = props;
  // const gameUser = games.map(game => game.users);
  // console.log("gameUser", gameUser);
  // const gameUserName = gameUser.map(g => g.map(gh => <div>{gh.name}</div>));

  return (
    <div className="tasksvertical">
      <img style={{ width: 80 }} src={avatar} alt="avatar" />
      <div>{name}</div>
    </div>
  );
};
export default UserAvatar;
