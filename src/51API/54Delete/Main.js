import React from 'react'
import {Table} from 'react-bootstrap'
import {useEffect,useState} from 'react'
function API() {
    const [data,setData] = useState([])
   useEffect(()=>{
    getApi()
   },[])
   console.log(data);
   function getApi(){
    fetch("http://localhost:3000/posts").then((result)=>{result.json().then((res)=>{
        setData(res)
    })
})
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
                </tr>
                )
            }
            </tbody>
        </Table>
        </>
    )
}
export default API;