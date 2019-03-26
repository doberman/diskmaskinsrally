import React, { Component } from "react";

export class Checkbox extends Component {
  render() {
    const { duty } = this.props;
    return (
      <div className="input-field">
        <div>
          <label htmlFor={duty}>
            <input
              id={duty}
              name="duties[]"
              type="checkbox"
              onChange={this.handleChange}
            />
            <span>{duty}</span>
          </label>
        </div>
      </div>
    );
  }
}
export default Checkbox;
