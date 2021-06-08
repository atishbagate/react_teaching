// refs DOM ko jabardasti manipulate kerta hain. 
//react main aisa bahout kaam karana chahiye.. 
import { createRef } from "react";
import React from 'react'
class Ref extends React.Component{
    constructor(){
        super(); 
        this.inputRef = createRef(); //assigning Refs into variable
    }
    getVal(){
        console.log(this.inputRef.current.value);
        this.inputRef.current.style.color = 'red'   //changing values using Refs
    }
    render(){
        return(
            <>
            <h1>Refs in class Component</h1>
            <input type="text" ref={this.inputRef} />
            <button onClick={()=> this.getVal()}>check Ref</button>  
            {/* this.getVal = >  value change hoti hain  */}
            </>
        )
    }
}
export default Ref;