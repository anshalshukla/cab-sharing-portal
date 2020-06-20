import React, { useEffect } from 'react'
//import Axios from 'axios';
import gql from "graphql-tag";
import { useMutation, useApolloClient } from '@apollo/react-hooks';
import { toggleAuthState } from '../store/actions/actionCreators/auth';
import { connect } from 'react-redux';
const LOGIN_QUERY = gql`
                mutation oAuth2Google($access_token: String!) {
                    oAuth2Google(access_token: $access_token) {
                        token
                    }
                }
        `



const LoginCallback = props => {
    console.log("[loginCallback.js]")
    const client = useApolloClient()
    //localStorage.setItem("token", null);
    const hash = props.location.hash;
    let access_token = null
    const queries = hash.split('&')
    queries.map(query => {
        const arr = query.split("=")
        if(arr[0]==="access_token")
            access_token = arr[1]
    })
   //console.log(access_token)
        const [login, {data, loading, error}] = useMutation(LOGIN_QUERY, {
            onCompleted(login){
                console.log("completed")
                localStorage.setItem("token", login.oAuth2Google.token)
                //client.writeData({data : {isLoggedIn : true}})
                props.changeLoginState(true)
                props.history.push('/')
                //this.props.history.replace('/home')
            },
            onError() {
                console.log("error")
            },
        })
        useEffect(() => {
            async function Login() {
                console.log("login")
                login({variables : {access_token : access_token}})
            }
            Login()
        }, [])
        if(loading) return <p>Loading</p>
        if(error) return <p>Error</p>

        
        return (
            <div>Logged IN</div>
        )
}

const mapDispatchtoProps = dispatch => {
    return {
        changeLoginState : (value) => dispatch(toggleAuthState(value))
    }
}

export default connect(null, mapDispatchtoProps)(LoginCallback)