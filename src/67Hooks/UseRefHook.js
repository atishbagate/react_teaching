import React,{useEffect, useRef} from 'react'

function UseRefHook() {
    const countRef = useRef(0);
    const domRef = useRef();
    const countHandle = ()=>{
        countRef.current++;
        console.log("clicked countHandle times. ",+countRef.current);
    }
    useEffect(()=>{
        const divElement = domRef.current;
        console.log(divElement);
    },[])
    console.log("component rendered.");
  return (
    <div>
        <p>UseRefHook</p> 
        <div ref={domRef}>I am element</div> 
        <button onClick={countHandle}>Counter</button>
    </div>
  )
}

export default UseRefHook