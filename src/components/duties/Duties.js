import React, { Component } from "react";
import DutyItem from "./DutyItem";

export default class Duties extends Component {
  render() {
    return this.props.duties.map(duty => (
      <DutyItem key={duty} duty={duty} deleteDuty={this.props.deleteDuty} />
    ));
  }
}
