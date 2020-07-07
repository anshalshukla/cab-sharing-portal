import React, { Fragment } from 'react'
import styles from "./Auth.module.css"
import * as config from "../../config";
import {ReactComponent as Background} from '../../assets/LoginBackground.svg'
import LoginButton from '../../components/UI/LoginButton/LoginButton';
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
    return (
        <Fragment>
            <div className={styles.Heading}>
                BPPC CABSHARING PORTAL
            </div>
            <div className={styles.Background}>
               <Background></Background>
            </div>
            <LoginButton click = {loginHandler} />
        </Fragment>
    )
}

export default Auth