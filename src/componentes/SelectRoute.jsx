import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const SelectRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        window.localStorage.getItem('token')
            ? <Redirect to={{ pathname: '/home', state: { from: props.location } }}/>
            : <Component {...props} />
    )} />
)
export default SelectRoute;
