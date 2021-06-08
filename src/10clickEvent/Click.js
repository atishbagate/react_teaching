import React from 'react';


function Click(){

    function call(){
        alert("this is alert using Click function declaration")
    }

    return(
        <>
            <div className="Click">
                <h1>this is click event</h1>
                <button onClick={call}>
                    Click here
                </button>
                <button onClick={()=>{alert("this is alert using Inline function function declaration")}}>
                    Inline Click here
                </button>
                <button onClick={()=>call()}>
                    Inline Click function calling
                </button>
            </div>
        </>
    )
}
export default Click;