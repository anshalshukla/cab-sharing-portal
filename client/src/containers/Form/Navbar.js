import React from 'react';
import {Component} from 'react';
import classes from "./Navbar.module.css";
class Navbar extends React.Component{
	render() {
		return (
			<React.Fragment>
				<div>
					<div className={classes.nav}>
						 <div className={classes.containerNavbar}>
							 <span className={classes.leftIcon}></span>
						 <span><a className={classes.appTitle} href="#">Enter Your Preferences</a></span>
							 <span className={classes.rightIcon}></span>
						 </div>
					</div>
				</div>
			 </React.Fragment>
		)
	}
}
export default Navbar;