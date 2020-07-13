import React, { Component } from "react";
import "./Field.module.css";
class LocationField extends Component {
  render() {
    return (
      <div>
        <div className={classes.inputDiv}>
          <label className={classes.inputLabel}>{this.props.name}</label>
          <div className={classes.inputGroup}>
            <input className={classes.inputField} type={this.props.type} />
            <div className={classes.inputGroupAppend}>
              <img
                className={classes.navIcon}
                src="https://ik.imagekit.io/m52sq26n4h/icons8-marker-24.png"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default LocationField;
