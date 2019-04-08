import React, { Component } from "react";

export default class DutyItem extends Component {
  render() {
    const dutyName = this.props.duty;
    return (
      <div>
        <p>
          <li id={dutyName}>
            {dutyName}
            <button onClick={this.props.deleteDuty.bind(this, dutyName)}>
              x
            </button>
          </li>
        </p>
      </div>
    );
  }
}
