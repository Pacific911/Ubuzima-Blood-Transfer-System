import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Landing from '../components/landing';
import Login from '../components/login';
import Register from '../components/register';




const routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path ='/' component={Landing} />
                <Route exact path ='/login' component={Login} />
                <Route exact path ='/register' component={Register} />
    
                
                

            </Switch>
        </Router>
    )
}

export default routes;
