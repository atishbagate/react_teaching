import React from 'react'
import {Table} from 'react-bootstrap'
import {useEffect,useState} from 'react'
function API() {
    const [data,setData] = useState([])
   useEffect(()=>{
    fetch("http://localhost:3000/posts").then((result)=>{result.json().then((res)=>{
               setData(res)
    })
})
   },[])
   console.log(data);
    return(
        <>
        <h4>this is example of API</h4>
        <Table  striped bordered hover variant="dark">
            <tr>
                <td>first name</td>
                <td>last name</td>
                <td>date of birth</td>
                <td>gender</td>
                <td>school joining date</td>
            </tr>
            {
                data.map((i,index)=>
                <tr key={index}>
                <td>{i.first_name}</td>
                <td>{i.last_name}</td>
                <td>{i.dob}</td>
                <td>{i.gender}</td>
                <td>{i.school_joining_date}</td>
                </tr>
                )
            }
        </Table>
        </>
    )
}
export default API;