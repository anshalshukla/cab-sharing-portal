import React from 'react'
import * as config from "../config";
const Auth = props=> {
   //localStorage.clear()
   //localStorage.setItem("token", "ishan")
   console.log('[Auth.js]')
   const qParams = [
       `client_id=${config.CLIENT_ID}`,
       `redirect_uri=${config.REDIRECT_URI}`,
       `response_type=${config.RESPONSE_TYPE}`,
       `scope=${config.SCOPE}`,
       `state=${config.STATE}`,
       `prompt=${config.PROMPT}`
   ].join('&')

   const url = "https://accounts.google.com/o/oauth2/v2/auth?"+qParams
   const loginHandler = () => {
       window.location.assign(url);
   }
    return <button onClick = {loginHandler}>LOGIN</button>
}

export default Auth