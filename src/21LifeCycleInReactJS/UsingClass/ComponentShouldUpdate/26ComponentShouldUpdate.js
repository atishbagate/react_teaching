import React from 'react'

class ComponentShouldUpdate extends React.Component{
    constructor(){
        super();
        this.state = {
            counter:0
        }
    }
  
    shouldComponentUpdate(){
        console.log(`ComponentShouldUpdate executed and count value is ${this.state.counter}`);
        if(this.state.counter >2 && this.state.counter <5)
        {
            return true;
        }
        else{
            return false;
        }
    }
    render(){
        return(
            <>
                <h3>this is Component Should Mount</h3><br />
                <h2>{this.state.counter}</h2>
                <button onClick={()=>this.setState({counter:this.state.counter+1})}>Click</button>
                
            </>
        )
    }
}
export default ComponentShouldUpdate;