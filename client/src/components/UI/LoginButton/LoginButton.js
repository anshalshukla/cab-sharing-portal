import React from 'react'
import styles from './LoginButton.module.css'
import { isRequiredArgument } from 'graphql'


const LoginButton = props => (
    <div className={styles.LoginWrapper} onClick={props.click}>
        <div className={styles.LoginImage}>
            <img src= {require("../../../assets/icons8-google-48 1.png")}></img>
        </div>
        <div className={styles.LoginText}>Continue With BITS Mail</div>
    </div>
)
export default LoginButton