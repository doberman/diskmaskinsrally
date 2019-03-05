import React from "react";
import Tasks from "./TaskRow";
import "../css/taskRow.css";

function Scoreboard() {
  return (
    <div className="container_scoreboard">
      <Tasks />
      <Tasks />
    </div>
  );
}

export default Scoreboard;
