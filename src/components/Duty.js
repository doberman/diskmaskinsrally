import React, { Fragment } from "react";

import "../css/taskRow.css";

const Duty = props => {
  const { name, score, game, dutyT } = props;
  console.log(dutyT);
  return (
    <div className="tasks">
      <div className="left title_space typo_text">{name}:</div>
      <div className="right typo_medium">
        <span>{score} </span>
        <span style={{ color: "#65646E" }}>/ {dutyT}</span>
      </div>
    </div>
  );
};

export default Duty;
