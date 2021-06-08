import React from 'react';

class State extends React.Component{
    constructor(){
        super();
        this.state={  
            data: "atish"
        }
    }
    apple(){
        this.setState({data:"sumit"})
    }
    render(){
        return (
            <div className="State">
                <h1>this is Class components</h1>
                <h2>{this.state.data}</h2>
                <button onClick={()=>this.apple()}>click here</button>
            </div>

        )
    }
}
export default State;