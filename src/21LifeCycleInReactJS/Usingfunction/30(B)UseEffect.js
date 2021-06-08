//this is example of use Effect using props
import React,{useState} from 'react'
import Useprops from './30(c)useEffect'
function UseEffectProps() {
    const [data,setData] = useState("atish");
    const [count,setCount] = useState(1);
    return(
        <>
        < Useprops data = {data} count = {count}/>
        <button onClick={()=>setData("sumit")}>click to data</button>
        <button onClick={()=>setCount(count+1)}>click to count</button>
        </>
    )
}
export  default UseEffectProps;