import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {  BrowserRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import { InMemoryCache, HttpLink} from 'apollo-boost';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { ApolloClient } from "apollo-client";
import { ApolloProvider} from "@apollo/react-hooks";
import { typeDefs } from "./resolvers";
import auth from "./store/reducers/auth"
// import Auth from './Auth';
// import Home from './pages/Home';


const cache = new InMemoryCache()
const link = new HttpLink({
  uri : "http://localhost:3000/"
})

const client = new ApolloClient({
  cache,
  link,
  typeDefs
  
})

// const IS_LOGGED_IN = gql`
// query isUserLoggedIn {
//     isLoggedIn @client
// }

// `
// function IsLoggedIn () {
//     const {data} = useQuery(IS_LOGGED_IN)
//     //console.log(data)
//     console.log(data)
//     return data.isLoggedIn ? <App /> : <Auth />
// }
cache.writeData({
  data : {
    isLoggedIn : !!localStorage.getItem("token")
  }
})

const composeEnhancers = 
    typeof window==='object' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
            window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
                // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
            }) : compose

const enhancers = composeEnhancers()

const reducer = combineReducers({
  auth : auth
})

const store = createStore(reducer, enhancers)


const app = (
    <BrowserRouter>
       <React.StrictMode>
       <App />
       </React.StrictMode>
    </BrowserRouter>
)

ReactDOM.render(
  <ApolloProvider client = {client}>
    <Provider store = {store}>
    {app}
    </Provider>
  </ApolloProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
