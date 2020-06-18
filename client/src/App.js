import React from 'react';
import logo from './logo.svg';
import axios from './axios-instance'
import * as headers from './headers'
import './App.css';
import { Route, Switch, withRouter } from 'react-router-dom';
import Auth from './Auth';
import LoginCallback from './LoginCallback';

const App = props =>  {
  //var myHeaders = new Headers(headers.headers)
  //console.log(myHeaders.get("Authorization"))
  //myHeaders.append("Authorization", "JWTeyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoyLCJ1c2VybmFtZSI6ImYyMDE5MDAzNCIsImV4cCI6MTU4NTQ2MzA2NCwiZW1haWwiOiJmMjAxOTAwMzRAcGlsYW5pLmJpdHMtcGlsYW5pLmFjLmluIn0.Bislf3DhZdD0RrWbHWOnCeOGhZNW7TfYSifDzv-OR34")
  //console.log(myHeaders)
  //console.log(headers)
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
 //localStorage.clear()
  let component = (!localStorage.getItem("token")) ? <Auth /> : (<h4>Home</h4>)

  return (
    <div>
      <Switch>
      <Route path = '/profile' render = {() => <h4>PROFILE</h4>} />
      <Route path = '/login' component = {Auth} />
      <Route path = "/oauth-callback" component = {LoginCallback} />
      <Route path = '/' render = {() => component} />
      </Switch>
    </div>
  )
}

export default withRouter(App);
