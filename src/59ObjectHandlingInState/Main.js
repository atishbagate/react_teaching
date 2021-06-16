//yaha per eake problem hota tha 
//jabh bhi value change kermi hoti thi.. using setVal toh waha per pura object clear hota tha.
//aisa na ho isi liye spread operator use kerte hain.. jisaki help se.. hum Object data ka wahi part change kerte hain
// joh hame change karana hain.. baki sabh same rahenge. yah hain woh code -> onChange={(e)=>{setVal({...val,name:e.target.value})}}
import React, {useState} from 'react'
function ObjInState() {
    const [val,setVal] = useState({name:'sumit',age:23})
    return(
        <>
        <h4>This is the example of Object handling in State</h4>
        <h2>{val.name}</h2>
        <h2>{val.age}</h2>
        <input type="text" value={val.name} placeholder="enter name" onChange={(e)=>{setVal({...val,name:e.target.value})}}/>
        <input type="text" value={val.age} placeholder="enter age" onChange={(e)=>setVal({...val,age:e.target.value})} />
        </>
    )
}
export default ObjInState