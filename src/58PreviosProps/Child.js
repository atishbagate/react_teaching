import React, { useRef,useEffect } from 'react'
function ChildOp(props) {
    const lastVal = useRef();
    useEffect(() => {
        lastVal.current = props.val;
    })
    const PreviosProps = lastVal.current;
    return(
        <>
        <h4>this is Child component</h4>
        <h3>current value is {props.val}</h3>
        <h3>Previos value is {PreviosProps}</h3>
        </>
    )
}
export default ChildOp