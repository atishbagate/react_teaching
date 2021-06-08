import React, { useRef } from 'react'
import Child from './Child'
function ForwordRef() {
    
    let inRef = useRef(null);
    function updateInput() {
        inRef.current.value ="Atish"
        inRef.current.style.color = "green"
        inRef.current.focus()
    
    }
    return(
        <>
        <h1>this is Example Of Forword Ref</h1>
        {/* yaha per inRef send kiya hain child ko as a parameter.  */}
        <Child ref={inRef}/>
        <button onClick={updateInput}>Click to change Using FrowordRef</button>
        </>
    )
}
export default ForwordRef;