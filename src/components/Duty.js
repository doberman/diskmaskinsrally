import React, { Fragment } from "react";

import "../css/taskRow.css";

const Duty = props => {
  const { name, score, game } = props;

  return (
    <div className="tasks">
      <div className="left title_space typo_text">{name}:</div>
      <div className="right typo_medium">
        <span>{score} </span>
        <span style={{ color: "#65646E" }}>/ {"300"}</span>
      </div>
    </div>
  );
};

export default Duty;
