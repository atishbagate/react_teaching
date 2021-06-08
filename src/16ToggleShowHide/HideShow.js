
import React,{useState} from 'react';

function  HideShow() {

    const [show,setShow] = useState(false)

    const [hover,setHover] = useState(false)

    return(
        <>
        <div className="Show">
        {
            show ?  <h1>ganu</h1> : null
        }
        <button onClick={()=>setShow(true)}>Show</button>
        <button onClick={()=>setShow(false)}>Hide</button>
        {
            hover ? <h2>mouse is hovered</h2> : null
        }
        <button onMouseEnter={()=>setHover(true) } onMouseLeave={()=>setHover(false) }>hover to see</button>
       
        </div>
        </>
    )
}
export default HideShow;