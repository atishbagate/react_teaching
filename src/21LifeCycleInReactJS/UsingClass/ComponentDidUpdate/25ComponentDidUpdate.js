import React from 'react'
import ComponentDidUpdate2 from './25(2)ComponentDidMount'
class ComponentDidUpdate extends React.Component{

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
    componentDidUpdate(){
        console.log("ComponentDidUpdate called");
    }

    render(){
        console.log("render called");
        return(
            <>
            <h1>this is Constructor=={this.state.data}</h1>
            <button onClick={()=>{this.setState({data:"did Update Called"})}}>Click to update</button>
            <div>
            <h2>-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/</h2>
                <h2>this is another Component to show the Component Did Mount using condition(if)</h2>
                < ComponentDidUpdate2/>
            </div>
            </>
        )
    }
}
export default ComponentDidUpdate;