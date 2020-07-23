import React, { Component } from "react";
import "./Navbar";
import classes from "./Form.module.css";
import Navbar from "./Navbar";
import InputField from "../../components/UI/InputField/InputField";
import LocationField from "../../components/UI/InputField/LocationField";
class Form extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className = {classes.flexContainer}>
          <div>
            <img
              className={classes.banner}
              src="https://ik.imagekit.io/m52sq26n4h/taxi.jpg"
            />
          </div>
          <div className={classes.formFields}>
            <LocationField name="Source" type="country" />
            <LocationField name="Destination" type="name" />
            <InputField name="Date Of Journey" type="date" />
            <InputField name="Select Time Window" type="time" />
            <InputField name="Phone No." type="tel"  />
          </div>
        </div>
        
      </div>
    );
  }
}
export default Form;
