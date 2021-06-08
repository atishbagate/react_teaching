import React from 'react'
class Construct extends React.Component{

    constructor(){
        super();
        this.state={
            data:"constructor state is called before component render"
        }
    }

    render(){
        return(
            <>
            <h1>this is Constructor=={this.state.data}</h1>
            </>
        )
    }
}
export default Construct;