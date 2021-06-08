import React,{useState,useEffect} from 'react'

function UseEffect() {
    const [data,setData] = useState("atish");
    useEffect(()=>{
        console.log("use Effect Called s");
    })
    return(
        <>
        <h1>{data}</h1>
        <button onClick={()=>setData("sumit")}>click Hook</button>
        </>
    )
}
export  default UseEffect;