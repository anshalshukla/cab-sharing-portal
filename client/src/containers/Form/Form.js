import React, { Component } from "react";
import "./Navbar";
import "./Form.css";
import Navbar from "./Navbar";
import InputField from "./InputField";
import { Input } from "reactstrap";
import LocationField from "./LocationField";
class Form extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <img
          className="banner"
          src="https://ik.imagekit.io/m52sq26n4h/taxi.jpg"
        />
          <LocationField name="Source" type="country"/>
          <LocationField name="Destination" type="name" />
          <InputField name="Date Of Journey" type="date" />
          <InputField name="Select Time Window" type="time" />
      </div>
    );
  }
}
export default Form;
