import React from 'react'
class ComponentDidMount extends React.Component{

    constructor(){
        super();
        this.state={
            data:"constructor state is called before component render"
        }
        console.log("constructor called");
    }
    componentDidMount(){
        console.log("component Did Mount Called");
    }

    render(){
        console.log("render called");
        return(
            <>
            <h1>this is Constructor== {this.state.data}</h1>
            </>
        )
    }
}
export default ComponentDidMount;