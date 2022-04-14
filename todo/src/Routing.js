import React from 'react';
import Home from './Home';
import Customer from './Customer';
import Product from './Product';
import './index.css';
import { Route, Link, NavLink, BrowserRouter as Router, Switch } from 'react-router-dom'

const Routing = () => {
    return(
        <Router>
        <div>
        <NavLink activeClassName="active" to="/Home">
        Home
        </NavLink>&nbsp;
        <NavLink activeClassName="active" to="/Customer">
        Customer
        </NavLink>&nbsp;
        <NavLink activeClassName="active" to="/Product">
        Product
        </NavLink>
        <Route path="/Home" component={Home} />
        <Route path="/Customer" component={Customer} />
        <Route path="/Product" component={Product} />
        </div>
        </Router>
    )
    
}
export default Routing