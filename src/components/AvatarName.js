import React, { Fragment } from "react";
import "../css/taskRow.css";
import avatar from "../assets/avatar.svg";
import USER from "../Data/user";

const AvatarName = props => {
  const { name, id } = props.user;

  return (
    <div className="tasksvertical">
      <img style={{ width: 80 }} src={avatar} alt="avatar" />
      <div>{name}</div>
    </div>
  );
};

const AvatarNames = () => (
  <div>
    {USER.map(u => (
      <AvatarName key={u.id} user={u} />
    ))}
  </div>
);
export default AvatarNames;
