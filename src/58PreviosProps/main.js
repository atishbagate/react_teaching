// iss example main bataya gaya hain ki. state ka previos data kaise fetch kare.
//yaha important hain bcoz. isi ke chalte hum props ke uper condition laga sakate hain. 

//iss ex main child ko props send ker ke usake ander value changes per previous value aur current value calculate ki hain.

import React, { useState } from 'react'
import Val from './Child'
function PrevProps() {
    const [val,setVal] = useState(0)
    return(
        <>
        <h4>this is example of previos props</h4>
        < Val val={val} />    
        <button onClick={()=>setVal(Math.floor(Math.random()*10))}>Click</button>
        </>
    )
}
export default PrevProps