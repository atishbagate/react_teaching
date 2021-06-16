import React from 'react'
import {Fname,Lname} from './Main'

function Child2() {
    return(
        <>
        <Fname.Consumer>
            {(Fname)=>{
                   return(
                    <Lname.Consumer>
                            {(Lname)=>{
                                return <h3>haii... i am {Fname} {Lname}</h3>
                            }}
                    </Lname.Consumer>
                   )
            }}
        </Fname.Consumer>
            
        </>
    )
}
export default Child2;
