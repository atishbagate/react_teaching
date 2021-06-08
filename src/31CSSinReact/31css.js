//this is code for using CSS in React
import React from 'react'
import './style.css';
import style from './custom.module.css'
function CSSinReact() {
    return(
        <>
        <h2 style={{color:'red',backgroundColor:'lightblue'}}>this is 1 Style</h2>
        <h2 className="secondary">this is 2 Style</h2>
        <h2 className={style.success}>this is 3 Style</h2>
        </>
    )
}
export default CSSinReact;