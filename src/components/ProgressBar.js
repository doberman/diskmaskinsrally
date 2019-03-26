import React, { Component } from "react";
import "../css/progressBar.css";
import CircularProgressbar from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

class ProgressBar extends Component {
  render() {
    const days_passed = stopDate => {
      const futureDate = stopDate;
      const current = new Date().getTime();
      return Math.ceil((futureDate - current) / 86400000);
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
      <div className="container">
        <div className="flex">
          <div className="circle flex">
            <div className="progressBar-text">
              <div>days</div>
              {inBar}
            </div>
          </div>

          <CircularProgressbar
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
      </div>
    );
  }
}
export default ProgressBar;
