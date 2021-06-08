import React from 'react'
import {Link} from 'react-router-dom'
function Nav() {
    return(

        <div>
        <Link to="/about">About Page</Link><br />
        <Link to="/home">Home Page</Link><br />
        </div>

    )
}
export default Nav;