// this is example of using use Effect in props 

import React,{useEffect} from 'react'
function Useprops(props) {
    useEffect(()=>{
        console.log("data is "+props.data);
    },[props.data])
    useEffect(()=>{
        alert(`count is ${props.count}`)
    },[props.count])

    // useEffect(()=>{
    //     alert(`two conditions at a time.`)
    // },[props.count,props.data])
    
    return(
        <>
        <h1>{props.data}</h1>
        <h1>{props.count}</h1>
        </>
    )
}
export  default Useprops;