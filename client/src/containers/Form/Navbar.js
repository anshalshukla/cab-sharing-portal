import React from "react";
import { Component } from "react";

import classes from "./Navbar.module.css";
import LeftIcon from '../../assets/leftIcon.png';
import TickIcon from '../../assets/tickIcon.png';

class Navbar extends Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <div className={classes.nav}>
            <div className={classes.leftIconContainer}>
              <img src={LeftIcon} className={classes.leftIcon} />
            </div>
            <div>
              <div className={classes.appTitle}>Enter Your Preferences</div>
            </div>
            <div onClick = {this.props.onSubmit} className={classes.tickIconContainer}>
						<img src={TickIcon} className={classes.tickIcon} />
						</div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Navbar;
