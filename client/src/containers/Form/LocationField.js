import React, { Component } from "react";
import "./Form.css"
class LocationField extends Component {
  render() {
    return (
      <div>
        
        <div className="input-div">
        <label className="input-label">{this.props.name}</label>
         <div className="input-group">
          <input className="input-field" type={this.props.type}/>
          <div className="input-group-append">
          <img className="nav-icon" src="https://ik.imagekit.io/m52sq26n4h/icons8-marker-24.png"/>

          </div>
          </div>

        </div>

      </div>
    );
  }
}
export default LocationField;
