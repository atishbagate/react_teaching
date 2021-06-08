import React,{useState} from 'react'

function From() {

    const [user,setUser] = useState("")
    const [pass,setPass] = useState("")

    const [userErr,setUserErr] = useState(false)
    const [passErr,setPassErr] = useState(false)

    function login(f) {
        console.log('you are trying to login');
        if (user.length<3 && pass.length<3) {
            alert('your are not enter 3 characters')
        }
        else{
            alert('your are now login')
        }

        f.preventDefault()
    }
    function userHandle(e) {
        console.log("user Trigger");
        let values = e.target.value
        if(values.length<3){
            setUserErr(true)
        }
        else{
            setUserErr(false)
        }
        setUser(values);
    }
    function passHandle(e) {
        console.log("pass Trigger");
        let values = e.target.value;
        if (values.length <3) {
            setPassErr(true)
        }
        else {
            setPassErr(false)
        }
        setPass(values);
    }
    return(
        <>
        <h3>this is Form Validation.</h3>
        <form onSubmit={login}>
        <input type="text" placeholder="enter id" onChange={userHandle}/>
        {userErr?<h5>enter valid user ID</h5>:""}
        <br /><br />
        <input type="text" placeholder="enter password" onChange={passHandle}/>
        {passErr?<h5>enter valid Password</h5>:""}
        <br /><br />
        <button type='submit'>Login</button>
        </form>
        </>
    )
}
export default From;