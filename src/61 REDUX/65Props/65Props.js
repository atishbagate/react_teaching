import React from 'react';
import Child from './Child'
const User = () =>{
    return(
        <div>
            <h1>Props in redux</h1>
            <h4>child value is</h4>
            <Child data= {{name:"atish bagate"}} />
        </div>
    )
}
export default User;