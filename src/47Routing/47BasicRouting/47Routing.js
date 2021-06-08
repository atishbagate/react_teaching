import React from 'react'
import {BrowserRouter as Router,Link,Route} from 'react-router-dom'
function Routing() {
    return(
        <>
        <h2>this is Example of basic Routing</h2>
        <Router>
        <Link to="./home">Home Page</Link><br />
        <Link to="./about">About Page</Link><br />
     

        <Route path="/home" ><Home /></Route>
        <Route path="/about" ><About /></Route>
  
        </Router>
        </>
    )
}
function Home() {
    return(
        <h2>This is Home Page</h2>
    )
}
function About() {
    return(
        <h2>This is About page</h2>
    )
}
export default Routing