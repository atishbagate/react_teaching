import React from 'react'
import Childs from './Child'
import Sum from './SumChild'
function Main() {
    function send() {
        alert("this is function send from parent")
    }
    function sum(a,b){
        return <h3>{a}+{b} = {a+b}</h3>
    }
    return(
        <>
        <h2>this is example of sending Function as a props</h2>
        <Childs func = {send}/>
        <Sum func = {sum}/>

        </>
    )
}
export default Main;