import React, { Component } from "react";
import "./containers/Form/Form";
import "./App.css";
import { Route } from "react-router-dom";
import Auth from "./containers/auth/Auth";
import LoginCallback from "./containers/auth/LoginCallback";
import Pages from "./pages";
import { connect } from "react-redux";

const App = (props) => {

  //localStorage.clear(); //Uncomment this line, wait for app to reload, then comment this line again to go to auth component

  console.log("[app.js]");

  function IsLoggedIn() {
    const isLoggedIn = props.isLoggedIn;
    return isLoggedIn ? <Pages /> : <Auth />;
  }

  return (
    <div>
      <Route path="/oauth-callback/" exact component={LoginCallback} />
      <IsLoggedIn />
    </div>
  );
};

const mapStatetoProps = (state) => {
  return {
    isLoggedIn: state.auth.isLoggedIn,
  };
};

export default connect(mapStatetoProps)(App);
