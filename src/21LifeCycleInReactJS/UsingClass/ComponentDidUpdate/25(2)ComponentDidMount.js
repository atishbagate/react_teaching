import React from 'react'

class ComponentDidUpdate2 extends React.Component{

    constructor(){
        super();
        this.state={
            count:0
        }
        console.log("constructor called");
    }
    
  
    componentDidUpdate(preProps,preState,snapshot){
        console.log("ComponentDidUpdate called");
       if(preState.count === this.state.count)
       {
           alert(`count Matched and state no is = ${this.state.count} and ${preState.count} and settting to count 0`)
           this.setState({count:0}) //setting state to 0 
       }
    }

    render(){
        console.log("render called");
        return(
            <>
            <h1>this is Count = {this.state.count}</h1>
            <button onClick={()=>{this.setState({count:this.state.count+1})}}>Click to update</button>
            <h2>----------------------------</h2>
            <h1>this is Count = {this.state.count}</h1>
            <button onClick={()=>{this.setState({count:1 })}}>Click to update</button>
       
            </>
        )
    }
}
export default ComponentDidUpdate2;