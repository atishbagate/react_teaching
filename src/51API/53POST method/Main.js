import React from 'react'
import {useEffect,useState} from 'react'

function PostApi(){
    const [text,setText] = useState('')
    const [name,setName] = useState('')
    function SendData() {
        console.log({text,name});
        let info ={text,name};

        fetch("http://localhost:3000/comments",{
            method:"POST",
            headers:{
                'Accept':'application/json',
                'Content-type':'application/json'
            },
            body:JSON.stringify(info)
        })
    }
    return(
        <>
        <h4>this is the example of Post Api</h4>
        <form action="send" method="post">
            <textarea value={text} onChange={(e)=>{setText(e.target.value)}} name="text" id="text" cols="50" rows="8" minLength="12" maxLength="30">enter your comments</textarea><br /> <br />
            <input  onChange={(e)=>{setName(e.target.name)}} name="name" type="name"/><br />
            <button onClick={SendData} type="button">post</button>
        </form>
        </>
    )
}
export default PostApi;