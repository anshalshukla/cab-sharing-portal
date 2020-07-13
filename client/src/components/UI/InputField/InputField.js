import React, { Component } from "react";
import "./Field.module.css"
class InputField extends Component {
  render() {
    return (
      <div>
        
        <div className={classes.inputDiv}>
        <label className={classes.inputLabel}>{this.props.name}</label>
          <input className={classes.inputField} type={this.props.type}>

          </input>
        </div>
      </div>
    );
  }
}
export default InputField;
