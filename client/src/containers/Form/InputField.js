import React, { Component } from "react";
import "./Form.css"
class InputField extends Component {
  render() {
    return (
      <div>
        
        <div className="input-div">
        <label className="input-label">{this.props.name}</label>
          <input className="input-field" type={this.props.type}>

          </input>
        </div>
      </div>
    );
  }
}
export default InputField;
