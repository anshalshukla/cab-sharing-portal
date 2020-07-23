import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {  BrowserRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import { InMemoryCache, HttpLink} from 'apollo-boost';
import { Provider } from 'react-redux';
import { createStore, compose, combineReducers } from 'redux';
import { ApolloClient } from "apollo-client";
import { ApolloProvider} from "@apollo/react-hooks";
import auth from "./store/reducers/auth"
import { setContext } from 'apollo-link-context';


const cache = new InMemoryCache()
const link = new HttpLink({
  uri : "http://localhost:3000/"
})

const authLink = setContext((_, {headers}) => {
  const token = localStorage.getItem("token")
  return {
    headers : {
      ...headers,
      authorization : token ? `JWT ${token}` : "",
    }
  }
})

const client = new ApolloClient({
  cache,
  link : authLink.concat(link),
  
})

cache.writeData({
  data : {
    isLoggedIn : !!localStorage.getItem("token")
  }
})

const composeEnhancers = 
    typeof window==='object' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
            window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
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

serviceWorker.unregister();
