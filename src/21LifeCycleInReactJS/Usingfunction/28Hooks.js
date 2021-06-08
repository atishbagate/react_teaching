import React,{useState} from 'react'

function Hooks() {
    const [data,setData] = useState("atish");
    return(
        <>
        <h1>{data}</h1>
        <button onClick={()=>setData("sumit")}>click Hook</button>
        </>
    )
}
export  default Hooks;