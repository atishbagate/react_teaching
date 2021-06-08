import React from 'react'
import {BrowserRouter as Router,Route} from 'react-router-dom'

import Nav from './Nav'
import Home from './Home'
import About from './About'

function Routing() {
    return(
        <>
        <h2>this is Example of basic Routing</h2>
        <Router>
        <Nav />
        <Route path="/about" ><About /></Route>
        <Route path="/home"  exact={true}><Home /></Route>
        </Router>
        </>
    )
}


export default Routing