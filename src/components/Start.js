import React, { Component } from "react";
import ThemeButton from "./ThemeButton";

class Start extends Component {
  render() {
    return (
      <div>
        <h1>Welcome!</h1>
        <p>
          This is the game for equal homes. Challenges your partner to start
          taking more responsibility for household duties.
        </p>
        <ThemeButton buttonText="klicka" linked link="/profile" />
      </div>
    );
  }
}

export default Start;
