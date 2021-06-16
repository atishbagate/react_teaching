import React from  'react'
import {CommonContext} from './Child1'

class Footer extends React.Component{
    render(){
        return(
            <CommonContext.Consumer> 
            {
                ({color}) =>(
                    <h1 style={{backgroundColor:color}}>this Footer   </h1>
                )
            }
            </CommonContext.Consumer>

        )
    }
}
export default Footer