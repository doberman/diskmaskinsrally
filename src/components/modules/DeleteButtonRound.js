import React, { Fragment } from "react";

export const DeleteButtonRound = ({ onclick }) => {
  return (
    <Fragment>
      <button onClick={onclick} className="delete-button__round">
        x
      </button>
    </Fragment>
  );
};
