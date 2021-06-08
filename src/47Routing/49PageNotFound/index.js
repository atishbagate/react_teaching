import React from "react";

import { BrowserRouter as Router, Route,Switch } from "react-router-dom";

import About from './About'
import Home from './Home'
import NotFound from './NotFound'
import Navigation from './Navigation'
function PageNotFound() {
  return (
    <>
      <h1>this is example of Page not Found Page</h1>
      <Router>
        <Navigation />
        {/* switch as a wrapper use karana hoga to toggle between pages  */}
        
        <Switch>   
        <Route path="/" exact={true}><Home /></Route>
        <Route path="/about"><About /></Route>
        <Route path="*"><NotFound /></Route>
        </Switch>
      </Router>
    </>
  );
}

export default PageNotFound;
