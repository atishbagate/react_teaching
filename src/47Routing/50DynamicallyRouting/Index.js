import React from 'react'
import UserPage from './Component'
import {BrowserRouter as Router,Link,Route} from 'react-router-dom'
function DynamicallyRouting() {
    let users = [
        {id:1,name:"sumit"},
        {id:2,name:"sumi2"},
        {id:3,name:"sumi3"},
        {id:4,name:"sumi4"},
        {id:5,name:"sumi5"},
        {id:6,name:"sumi6"},
        {id:7,name:"sumi7"}
    ]
    return(
        <>
        <h4>this is example of Dynamically Routing</h4>
       <div style={{alignItems:"center",textAlign:"center"}}>
       <Router>
        {
            users.map((item)=>
        <div><Link to={"/users/"+item.id+"/"+item.name}>{item.name}</Link></div>
        )
        }
        <Route path='/users/:id/:name'><UserPage /></Route>
        </Router>
       </div>

        </>
    )
}
export default DynamicallyRouting;