import React from "react";
import ThemeButton from "./ThemeButton";
import { withCurrentUser } from "./hoc/withCurrentUser";

const Start = ({ authUser }) => {
  return (
    <div className="typography--small">
      <h1 className="typography--xlarge">Welcome!</h1>
      <p>
        This is the game for equality at home. Challenges your partner to start
        taking more responsibility for household duties.
      </p>
      {authUser ? (
        <ThemeButton buttonText="Get started" linked link="/profile" />
      ) : (
        <ThemeButton buttonText="Get started" linked link="/signin" />
      )}
    </div>
  );
};
export default withCurrentUser(Start);
