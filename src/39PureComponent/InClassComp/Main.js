//in this section we will se th pure component.where pure component stops the re rendering of component.
//situation where data is not changed but still re-rendering is done. 
//this will cause performance.
import React,{PureComponent} from 'react'
import Child from './Child'

class Main extends PureComponent{
    constructor(){
        super();
        this.state={
            count : 1
        }
    }
    render(){
        console.log('rendering');
        return(
            <>
        {/* <Child /> */}
        
        <Child count = {this.state.count}/>
        <button onClick={()=>this.setState({count:this.state.count})}
        >Update Counter</button>
        </>
        )
    }
}
export default Main