import React, { Component } from "react";
import "./Field.module.css";
class LocationField extends Component {
  render() {
    return (
      <div>
        <div className={classes.input-div}>
          <label className={classes.input-label}>{this.props.name}</label>
          <div className={classes.input-group}>
            <input className={classes.input-field} type={this.props.type} />
            <div className={classes.input-group-append}>
              <img
                className={classes.nav-icon}
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
