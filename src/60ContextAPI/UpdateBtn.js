import React from 'react'
import {CommonContext} from './Child1'
function UpdateBtn() {
    return(
        <CommonContext.Consumer>
           {
            ({updateColor})=>(
                <div>
                <button onClick={()=>updateColor("green")} >update</button>
                <button onClick={()=>updateColor("yellow")} >update</button>
                </div>
            )
           }
        </CommonContext.Consumer>
    )
}
export default UpdateBtn