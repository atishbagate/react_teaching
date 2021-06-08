import React from 'react'

class Child extends React.Component{
   
    componentWillUnmount(){
        alert("componentWillUnmount")
    }
    componentDidMount(){
        alert ("component is mounting")
    }

    render(){
        return(
            <>
                <h3>this is child Component will unmount</h3><br />
                
                
            </>
        )
    }
}
export default Child;