import React from 'react'
class Construct extends React.Component{

    constructor(){
        super();
        this.state={
            email:"Atish@gmail.com"
        }
    }

    render(){
        console.log(`component called ${this.state.email}`)
        return(
            <>
            <h1>this section show how render work inside same component using class component</h1>
            <h3>{this.state.email}</h3>
            <button onClick={()=>this.setState({email:"Sumit@gmail.com"})}>Click to change</button>
            </>
        )
    }
}
export default Construct;