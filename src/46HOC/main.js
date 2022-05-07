import React, { useState } from 'react'

function HOC() {
    return (
        <>
        <h1>this is the Example of HOC</h1>
        <div style={{display:'flex'}}>
        <HOCred cmp={Counter}/>  
        <HOCgreen cmp={Counter} />  
        </div>
        </>
    )
}
function HOCred(props) {
    return <h4 style={{backgroundColor:'red',width:100,textAlign:'center'}} >RED<props.cmp /></h4>
}
function HOCgreen(params) {
    return <h4 style={{backgroundColor:'green',width:100,textAlign:'center'}}>GREEN<params.cmp /></h4>
}

function Counter() {
    let [count,setCount] =useState(0)
    return(
        <>
        <h4>counter</h4><br />
        <h2>{count}</h2>
        <button onClick={()=>setCount(count+1)}>Click</button>
        </>
    )
}
export default HOC;