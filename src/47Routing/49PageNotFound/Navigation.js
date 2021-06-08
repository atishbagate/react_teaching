import React from 'react'
import { Link } from "react-router-dom";

function Navigation() {
    return(
        <div>
        <h4>this is navigation pannel</h4>
       
        <Link to="/">Home</Link><br /><br />
        <Link to="/About">About</Link>

        </div>
    )
}
export default Navigation;