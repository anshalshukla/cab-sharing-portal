import React from 'react';
// import logo from './logo.svg';
// import axios from './axios-instance'
// import * as headers from './headers'
import './App.css';
import { Route} from 'react-router-dom';
import Auth from './Auth';
import LoginCallback from './LoginCallback';
// import { useApolloClient } from '@apollo/react-hooks';
// import gql from 'graphql-tag'
// import { useQuery } from "@apollo/react-hooks";
import Pages from './pages';
import { connect } from "react-redux";

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

//const client = useApolloClient()

  console.log("[app.js]")

function IsLoggedIn () {
    const isLoggedIn = props.isLoggedIn
    //console.log(data)
    return isLoggedIn ? <Pages />:<Auth />
}



  return (
    <div>
      <Route path = "/oauth-callback" exact component = {LoginCallback} />
      <IsLoggedIn />
    </div>
  )
}

const mapStatetoProps = state => {
  return {
    isLoggedIn : state.auth.isLoggedIn
  }
}

export default connect(mapStatetoProps)(App);
