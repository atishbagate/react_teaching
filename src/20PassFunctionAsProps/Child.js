import React from 'react'
function Childs(props) {
    return(
        <>
        <h1>this is calling of function inside child</h1>
        <h5>{props.func}</h5>
        </>
    )
}
export default Childs