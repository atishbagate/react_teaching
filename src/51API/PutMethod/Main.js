import React from 'react'
import {Table} from 'react-bootstrap'
import {useEffect,useState} from 'react'
function API() {
    const [data,setData] = useState([])

    //to set state
    const [first_name,setFirst_name] = useState("")
    const [last_name,setLast_name] = useState('')
    const [dob,setDob] = useState('')
    const [gender,setGender] = useState('')
    const [school_joining_date,setSchool_joining_date] = useState('')

    const [useId,setUserId] = useState(null)

   useEffect(()=>{
    getApi()
   },[])
  

   function getApi(){
    fetch("http://localhost:3000/posts").then((result)=>{result.json().then((res)=>{
        setData(res)
        //seting user data 
        setFirst_name(res[0].first_name)
        setLast_name(res[0].last_name)
        setDob(res[0].dob)
        setGender(res[0].gender)
        setSchool_joining_date(res[0].school_joining_date)
        setUserId(res[0].id)

    })
})
   }
   function UpdatedUser() {
    let value = {first_name,last_name,dob,gender,school_joining_date,useId}

    fetch(`http://localhost:3000/posts/${useId}`,{
        method:'PUT',
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        body:JSON.stringify(value)
    }).then((result)=>{result.json().then((resp)=>{console.log(resp);})})
    getApi()
}
function updateUser(id) {
    console.log(data[id]);
    let item = data[id-1];
    
    setFirst_name(item.first_name)
    setLast_name(item.last_name)
    setDob(item.dob)
    setGender(item.gender)
    setSchool_joining_date(item.school_joining_date)
    setUserId(item.id)
}



function deleteUser(id) {
    
    fetch(`http://localhost:3000/posts/${id}`,{
        method:'DELETE'
    }).then((result)=>{result.json().then((resp)=>{console.log(resp);})})
    getApi()
}
    return(
        <>
        <h4>this is example of API</h4>
        <Table  striped bordered hover variant="dark">
        <tbody>
            <tr>
                <td>Sr no</td>
                <td>first name</td>
                <td>last name</td>
                <td>date of birth</td>
                <td>gender</td>
                <td>school joining date</td>
                <td>Delete</td>
                <td>Update</td>
            </tr>
            {
                data.map((i,index)=>
                <tr key={index}>
                <td>{i.id}</td>
                <td>{i.first_name}</td>
                <td>{i.last_name}</td>
                <td>{i.dob}</td>
                <td>{i.gender}</td>
                <td>{i.school_joining_date}</td>
                <td><button onClick={()=>{deleteUser(i.id)}}>Delete</button></td>
                <td><button onClick={()=>updateUser(i.id)} >Update</button></td>
                </tr>
                )
            }
            </tbody>
        </Table><br />
            <div style={{alignItems:"center",textAlign:"center"}}>
                <input type="text" value={first_name} onChange={(e)=>setFirst_name(e.target.value)}/><br />
                <input type="text" value={last_name} onChange={(e)=>setLast_name(e.target.value)}/><br />
                <input type="text" value={dob} onChange={(e)=>setDob(e.target.value)}/><br />
                <input type="text" value={gender} onChange={(e)=>setGender(e.target.value)}/><br />
                <input type="text" value={school_joining_date} onChange={(e)=>setSchool_joining_date(e.target.value)} /><br />
                <button onClick={UpdatedUser}>Update</button>
            </div>

        </>
    )
}
export default API;