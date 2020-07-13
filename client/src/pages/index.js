import React, { Fragment, useEffect } from 'react'
import { BrowserRouter, Route, withRouter, Switch } from 'react-router-dom'
import Home from './Home'
import Profile from './Profile'
import { useApolloClient } from '@apollo/react-hooks'

const Pages = props => {
    console.log("pages [index.js]")
    return (
        <Fragment>
            <BrowserRouter>
            <Switch>
            <Route path = "/profile" component = {Profile} ></Route>
                <Route path = "/" component = {Home} />
            </Switch>
            </BrowserRouter>
        </Fragment>
    )
}
export default withRouter(Pages)