import React, { Fragment } from "react";
import "../css/taskRow.css";
import TASKS from "../Data/tasks";
import AvatarNames from "./AvatarName";
import { spawn } from "child_process";

const Task = props => {
  const { id, title, total_dones, user_done } = props.task;
  //   Hur ska man tänka när det inte finns någon riktig data?

  return (
    <div className="tasks">
      <div className="left title_space typo_text">{title}:</div>
      <div className="right typo_medium">
        <span>{user_done} </span>
        <span style={{ color: "#65646E" }}>/ {total_dones}</span>
      </div>
    </div>
  );
};

const Tasks = () => (
  <div>
    <p>14%</p>
    <div className="scoreboard">
      <AvatarNames />
      {TASKS.map(TASK => (
        <Task key={TASK.id} task={TASK} />
      ))}
    </div>
  </div>
);
export default Tasks;
