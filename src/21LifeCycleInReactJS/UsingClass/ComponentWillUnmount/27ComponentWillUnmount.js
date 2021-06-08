import React from 'react'

import Child from './Child'
class ComponentShouldUpdate extends React.Component{
    constructor(){
        super();
        this.state = {
            view:1
        }
    }

    render(){
        return(
            <>
                <h3>this is Component Should Mount</h3><br />
                <h2>{this.state.view}</h2>
                {
                    this.state.view ? <Child /> : <h5>{`component is removed ${this.state.view}`}</h5>
                }
                <button onClick={()=>this.setState({view: !this.state.view})}>Hide Child Component</button>
                
            </>
        )
    }
}
export default ComponentShouldUpdate;