import React from 'react'
function Sum(props) {
    
    return(
        <>
        <h2>this is example of sending Function as a props</h2>
        <h3>and there is a sum function send</h3>
       <h4>and the sum is{props.func(2,5)}</h4>

        </>
    )
}
export default Sum;