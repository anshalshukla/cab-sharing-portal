import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {  BrowserRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import { InMemoryCache, HttpLink } from 'apollo-boost';
import { ApolloClient } from "apollo-client";
import { ApolloProvider } from "@apollo/react-hooks";

const cache = new InMemoryCache()
const link = new HttpLink({
  uri : "http://localhost:3000/"
})

const client = new ApolloClient({
  cache,
  link
})

const app = (
    <BrowserRouter>
       <React.StrictMode>
       <App />
       </React.StrictMode>
    </BrowserRouter>
)

ReactDOM.render(
  <ApolloProvider client = {client}>
    {app}
  </ApolloProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
