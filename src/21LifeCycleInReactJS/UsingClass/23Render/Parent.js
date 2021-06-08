import React,{useState} from 'react'

import Child from './Child'

// to see render inside a same component 
import RenderUsingState from './RenderUsingStates'
function Parent() {
    const [name,setName] = useState("Atish")
    return(
        <>
        <div className="parent">
        <Child name={name}/>
        <button onClick={()=>{setName("sumit")}}>Click To Update</button>
        </div>
        <div>
            <h2>-------------------------------------------------------------------</h2>
            <RenderUsingState />
        </div>
        </>

    )
}
export default Parent;