import React, { Component, Fragment } from "react";
import "./ProgressBar.scss";
import CircularProgressbar from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

class ProgressBar extends Component {
  render() {
    const days_passed = stopDate => {
      const current = new Date().getTime();
      return Math.ceil((stopDate - current) / 86400000);
    };
    const { user, game } = this.props;

    // Get total days of game
    const endDate = game.day_end.seconds;
    const startDate = game.day_start.seconds;
    const totalDaysOfGame = Math.ceil((endDate - startDate) / 86400);

    const daysToEnd = days_passed(endDate * 1000);
    const daysDone = totalDaysOfGame - daysToEnd;
    const percentage = (daysDone / totalDaysOfGame) * 100;

    const inBar = daysDone + "/" + totalDaysOfGame;

    return (
      <Fragment>
        <div className="progress-bar flex">
          <div className="progress-bar__circle flex">
            <div className="progress-bar__circle-text">
              <div>day</div>
              {inBar}
            </div>
          </div>

          <CircularProgressbar
            className="progress-bar__circle-progress"
            percentage={percentage}
            background={false}
            strokeWidth={4}
            initialAnimation={true}
            styles={{
              text: {
                fill: "#fff",
                fontSize: "16px"
              },
              path: {
                stroke: "#fff"
              },
              trail: {
                strokeWidth: "0"
              }
            }}
          />
        </div>
      </Fragment>
    );
  }
}
export default ProgressBar;
