import React, { Component } from "react";

export class Checkbox extends Component {
  render() {
    const { item, name, onChange, type } = this.props;
    return (
      <div className="input-field">
        <div>
          <label htmlFor={item}>
            <input id={item} name={name} type={type} onChange={onChange} />
            <span>{item}</span>
          </label>
        </div>
      </div>
    );
  }
}
export default Checkbox;
