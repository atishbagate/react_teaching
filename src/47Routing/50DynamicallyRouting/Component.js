import React from 'react'
import {withRouter} from 'react-router-dom'
function User(prop) {
  
    return(
        <>
        <h4>this is User page Routing</h4>
        <h5>id is {prop.match.params.id}</h5>
        <h5>name is {prop.match.params.name}</h5>
       
      

        </>
    )
}
export default withRouter(User);