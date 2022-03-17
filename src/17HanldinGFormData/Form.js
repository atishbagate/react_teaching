import React from "react";
import {useState} from 'react';

function FormHandle() {

    const [name,setName] = useState("")
    const [tnc,setTnc] = useState(false)
    const [interest,setInterest] = useState("")

    function getFormData(e) {
        //isase hum reloading aur default action ko stop kerte hain.
        console.log(name,interest,tnc);
        alert(name,interest,tnc)
        e.preventDefault()
    }
    return(
        <div className="app">
            <form onSubmit={getFormData}>
            <input type="text" placeholder="enter Data" onChange={(e)=>setName(e.target.value)}/><br /><br />
            <select  onChange={(e)=>setInterest(e.target.value)}>
                <option value="student">student</option>
                <option value="teacher">teacher</option>
                <option value="principle">principle</option>
            </select><br /><br />
            <input type="checkbox"  onChange={(e)=>setTnc(e.target.checked)}/>
            <span>Accept T&C</span><br /><br />
            <button type="submit">submit info</button>
            </form>
        </div>

    )
}

export default FormHandle;