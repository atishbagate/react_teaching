import React from  'react'
import {CommonContext} from './Child1'

class Header extends React.Component{
    render(){
        return(
            <CommonContext.Consumer> 
            {
                ({color}) =>(
                    <h1 style={{backgroundColor:color}}>this Header   </h1>
                )
            }
            </CommonContext.Consumer>

        )
    }
}
export default Header