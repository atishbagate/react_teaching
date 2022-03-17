import React, { useRef } from 'react'
function UncontrolledComp() {
    let inputRef1 = useRef(null)
    let inputRef2 = useRef()

    function submitForm(e){
        e.preventDefault()
        console.log(`input value of name field is ${inputRef1.current.value}`);
        console.log(`input value of number field is ${inputRef2.current.value}`);

        let information = document.getElementById("info").value;
        console.log(`this is the value class and it is controlled by DOM ${information}`);
    }
    return(
        <>
        <h3>this is the example of uncontrolled Component</h3>
        <form onSubmit={submitForm}>
            <span>name : </span><input ref={inputRef1} type="text" /><br /><br />
            <span>number : </span><input ref={inputRef2} type="text" /><br /><br />
            <span>class : </span><input type="text" id="info"/><br /><br />
            <button>Submit</button>
        </form>
        </>
    )
}
export default  UncontrolledComp;