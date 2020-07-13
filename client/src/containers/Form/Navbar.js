import React from 'react';
import {Component} from 'react';
import classes from "./Navbar.module.css";
class Navbar extends React.Component{
	render() {
		return (
			<React.Fragment>
				<div>
					<div className={classes.nav}>
						 <div className={classes.container-navbar}>
							 <span className={classes.left-icon}></span>
						 <span><a className={classes.app-title} href="#">Enter Your Preferences</a></span>
							 <span className={classes.right-icon}></span>
						 </div>
					</div>
				</div>
			 </React.Fragment>
		)
	}
}
export default Navbar;