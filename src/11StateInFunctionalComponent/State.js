import {useState} from 'react';

function State() {
    const [data,updateData] = useState("atish")

    function setData(){
        updateData("sumit")
    }
    console.log("__________________");

    return (
        <>
        <h1>{data}</h1>
        <button onClick={setData}>click here</button>
        </>
    )
}
export default State;
