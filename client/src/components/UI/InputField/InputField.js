import React, { Component } from "react";
import "./Field.module.css"
class InputField extends Component {
  render() {
    return (
      <div>
        
        <div className={classes.input-div}>
        <label className={classes.input-label}>{this.props.name}</label>
          <input className={classes.input-field} type={this.props.type}>

          </input>
        </div>
      </div>
    );
  }
}
export default InputField;
