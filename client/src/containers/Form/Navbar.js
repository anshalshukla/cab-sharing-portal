import React from 'react';
import {Component} from 'react';
import "./Navbar.css";
class Navbar extends React.Component{
	render() {
		return (
			<React.Fragment>
				<div>
					<div id="nav">
						 <div className="container-navbar">
							 <span className="left-hamburger"></span>
						 <span><a className="app-title" href="#">Enter Your Preferences</a></span>
							 <span className="right-hamburger"></span>
						 </div>
					</div>
				</div>
			 </React.Fragment>
		)
	}
}
export default Navbar;