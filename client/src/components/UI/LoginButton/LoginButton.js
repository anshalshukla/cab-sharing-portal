import React from "react";
import styles from "./LoginButton.module.css";

import GoogleLogo from "../../../assets/icons8-google-48 1.png";

const LoginButton = (props) => (
  <div className={styles.LoginWrapper} onClick={props.click}>
    <img src={GoogleLogo} className={styles.LoginImage}></img>
    <div className={styles.LoginText}>Continue With BITS Mail</div>
  </div>
);
export default LoginButton;
