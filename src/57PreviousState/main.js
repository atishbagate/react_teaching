//send the previous state of data/value 
import React,{useState} from 'react'

function PreState() {
   const [num,setNum]=useState(1)
    function incrCount() {
        // note:- setNum eake callback return karata hain. jisaki value previous state hoti hain. 
        // fir hum use use ker ke compare karate hain.
        //  setNum((val)=>{
        //      console.log(val);
        //      if (val>3) {
        //         alert("no entery")
        //      }
        //      return num+1
        //  })
        for (let i = 0; i < 4; i++) {
           setNum((val)=>{
               return val+2
           })
            
        }
    }
    return(
        <>
        <h4>this is example of Previous State of component</h4>
        <h6>this is used for compare the State of Component and we can do some conditions based on comparing the changes.</h6>
        <h2>{num}</h2>
        <button onClick={incrCount}>count</button>
        </>
    )
}
export default PreState;