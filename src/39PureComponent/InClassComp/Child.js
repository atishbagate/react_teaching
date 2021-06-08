
import React,{PureComponent} from 'react'
class Child extends PureComponent{
    render(){
        console.log("child component");
        return(
            <>
            <h2>User Component</h2>
            <h3>{this.props.count}</h3>
            </>
        )
    }
}
export default Child;