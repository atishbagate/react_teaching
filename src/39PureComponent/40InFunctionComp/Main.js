//in this topic we will use UseMemo for avoiding unwanted calling of function.
//that is re-rendering of function 
//this is imp for performance optimization
import React,{useState,useMemo} from 'react'

function UseMemos() {
    
    const [count,setCount] = useState(0);
    const [num,setNum] = useState(10);

    const multiCount = useMemo(function MultiCounts() {
        console.log("multicount called ");
        return count *5
    },[count])

    return(
        <>
        <h1>this is UseMemo in React js</h1>
        <h2>Count :{count}</h2>
        <h2>number :{num}</h2>
        <h5>multiCount:{multiCount}</h5>
        <button onClick={()=>setCount(count+1)}>click to Count</button>
        <button onClick={()=>setNum(num+1)}>click to Number</button>
        </>
    )
}
export default  UseMemos;