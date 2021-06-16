import React from  'react'
import {CommonContext} from './Child1'

class Main extends React.Component{
    render(){
        return(
            <CommonContext.Consumer> 
            {
                ({color}) =>(
                    <h1 style={{backgroundColor:color}}>this is main page   </h1>
                )
            }
            </CommonContext.Consumer>

        )
    }
}
export default Main