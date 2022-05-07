import React from 'react'
import {useState,useEffect} from 'react'
function UseEffectHook() {
    const [number,setNumber] = useState(4);
    const [number2,setNumber2] = useState(1)
    useEffect(()=>{
        console.log("function render.",number);
    },[number])
    useEffect(()=>{
        console.log("render only once while initial rendering ",number2);
    },[])
    useEffect(()=>{
        console.log("render on every rendering ");
    })
  return (
    <div>
        <p>UseEffectHook</p>
        <h4>{number}</h4>
        <button onClick={()=>{setNumber(number+1)}}>Click</button>
    </div>
  )
}

export default UseEffectHook