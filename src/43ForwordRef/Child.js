import React,{forwardRef} from 'react'
//forword ref Property import karani padati hain.
function Child(props,ref) {
    // ref yaha 2nd argument ata hain 
    return(
        <>
        <h1>this is inside Child</h1>
        <input type="text" ref={ref}/>
        </>
    )
}
export default  forwardRef(Child);