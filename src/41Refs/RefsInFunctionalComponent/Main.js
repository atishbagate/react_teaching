import React, { useRef } from 'react'
function FunRef() {
    let inRef = useRef(null)
    function inputHandler() {
        console.log("input Handler function is called");
        inRef.current.style.color = "red"  
        inRef.current.focus();
    }
    return(
        <>
        <h1>Refs in function component</h1>
        <input type="text" ref={inRef}/>
        <button onClick={inputHandler}>Click for changes</button>
        </>
    )
}
export default FunRef;