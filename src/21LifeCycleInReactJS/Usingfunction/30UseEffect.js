//this is example of use Effect In data.
import React,{useState,useEffect} from 'react'
function UseEffect() {
    const [data,setData] = useState("atish");
    const [count,setCount] = useState(1);
    useEffect(()=>{
        console.log("use Effect Called using data");
    },[data])
    useEffect(()=>{
        console.log("use Effect Called using count ");
    },[count])
    return(
        <>
        <h1>{data}</h1>
        <h1>{count}</h1>
        <button onClick={()=>setData("sumit")}>click to data</button>
        <button onClick={()=>setCount(count+1)}>click to count</button>
        </>
    )
}
export  default UseEffect;