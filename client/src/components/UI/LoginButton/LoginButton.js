import React from "react";
import styles from "./LoginButton.module.css";
// import { isRequiredArgument } from "graphql";

import GoogleLogo from '../../../assets/icons8-google-48 1.png';

const LoginButton = (props) => (
  <div className={styles.LoginWrapper} onClick={props.click}>
    <div className={styles.LoginImage}>
      <img src={GoogleLogo}></img>
    </div>
    <div className={styles.LoginText}>Continue With BITS Mail</div>
  </div>
);
export default LoginButton;
