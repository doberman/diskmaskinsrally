import React from "react";

import "../css/taskRow.css";

const Duty = props => {
  const { name, score, dutyT } = props;
  console.log(dutyT);
  return (
    <div className="tasks">
      <div className="typography--small left">{name}:</div>
      <div className="typography--small bold right">
        <span>{score} </span>
        <span className="grey-font">/ {dutyT}</span>
      </div>
    </div>
  );
};

export default Duty;
