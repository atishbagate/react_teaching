
import React,{useState} from 'react';

function From() {

    const [state,setState]=useState(null)
    const [print,setPrint]=useState(null)

    function getStates(val)
    {
        console.log(val.target.value);
        setState(val.target.value)
    }
    return(
        <>
    <div className="App">
        {print ? <h1>{state}</h1>:null}
    </div>
        <input type="text" onChange={getStates}/>
        <button onClick={()=>{setPrint(true)}}>Print the data</button>
        </>
    )
}
export default From;