
import React,{useState} from 'react';

function  Toggle() {

    const [show,setShow] = useState(false)

   
    return(
        <>
        <div className="Show">
        {
            show ?  <h1>ganu</h1> : null
        }
        <button onClick={()=>setShow(!show)}>toggle button</button>
           {/* Toggle kerne ke liye bas hame ! of any previous state karana hoga bass  */}
        </div>
        </>
    )
}
export default Toggle;