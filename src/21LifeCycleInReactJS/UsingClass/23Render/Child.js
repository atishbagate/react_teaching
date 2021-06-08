import React from 'react'
class Child extends React.Component{

    render(){
        console.log(`component called ${this.props.name}`);
        return(
            <>
               <h2>this is Child Component from parent.</h2>         
             <h4>{this.props.name}</h4>
            </>
        )
    }
}
export default Child;