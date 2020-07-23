import React, { Fragment } from "react";
import styles from "./Auth.module.css";
import * as config from "../../config";
// import { ReactComponent as Background } from "../../assets/LoginBackground.svg";
import LoginButton from "../../components/UI/LoginButton/LoginButton";
import LoginBackground from "../../assets/LoginBackground.svg";
const Auth = (props) => {
  console.log("[Auth.js]");
  const qParams = [
    `client_id=${config.CLIENT_ID}`,
    `redirect_uri=${config.REDIRECT_URI}`,
    `response_type=${config.RESPONSE_TYPE}`,
    `scope=${config.SCOPE}`,
    `state=${config.STATE}`,
    `prompt=${config.PROMPT}`,
  ].join("&");

  const url = "https://accounts.google.com/o/oauth2/v2/auth?" + qParams;
  const loginHandler = () => {
    window.location.assign(url);
  };
  return (
    <Fragment>
      <div className={styles.headingContainer}>
        <div className={styles.heading}>BPPC CABSHARING PORTAL</div>
      </div>
      <div className={styles.imgContainer}>
        <img
          src={LoginBackground}
          className={styles.img}
          style={{ height: "100%" }}
        />
      </div>
      <div className={styles.loginButtonContainer}>
        <LoginButton click={loginHandler} />
      </div>
    </Fragment>
  );
};

export default Auth;
