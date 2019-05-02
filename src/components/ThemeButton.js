import React, { Fragment } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function ThemeButton(props) {
  const styleButton = {
    background: "#3e3d4a",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    borderRadius: "19px",
    height: "45px",
    width: "200px",
    border: "none",
    color: "white",
    cursor: "pointer"
  };

  const { buttonText, linked, link } = props;

  return (
    <Fragment>
      {linked && (
        <Link to={props.link}>
          <button className="theme-button typography--medium">
            {props.buttonText}
          </button>
        </Link>
      )}
      {!linked && (
        <button className="theme-button typography--medium">
          {props.buttonText}
        </button>
      )}
    </Fragment>
  );
}
