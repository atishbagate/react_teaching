import React, { useState } from 'react'

function ControlComp() {
    const [val,setVal] = useState("hai")

    const [menu,setMenu] = useState("idli")
    
    return(
        <>
        <h1>this is example of Control Component From React.js</h1>
        <input type="text" onChange= {(e)=>setVal(e.target.value)} />
        <h3>value is {val}</h3>
        <h2>------------------------</h2>
        <input type="text" onChange={(e)=>setMenu(e.target.value)}/>
        <h3>your menu is: {menu}</h3>
        </>
    )
}

export default ControlComp;