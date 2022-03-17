//go to website react Bootstrap and copy link and install it inside project.

import React from 'react';
import {Table} from 'react-bootstrap';

function  ListInArray() {

    const teachers = [
        {name:'swami sir',addr:[
            {street:23,nagar:"jeejamata nagar",pin:412421},
            {street:23,nagar:"jeejamata nagar",pin:412421},
            {street:23,nagar:"jeejamata nagar",pin:412421},
            {street:23,nagar:"jeejamata nagar",pin:412421},
            {street:23,nagar:"jeejamata nagar",pin:412421}
        ],contact:9860},
        {name:'naik sir',addr:[
            {street:23,nagar:"jeejamata nagar",pin:412421},
            {street:23,nagar:"jeejamata nagar",pin:412421},
            {street:23,nagar:"jeejamata nagar",pin:412421},
            {street:23,nagar:"jeejamata nagar",pin:412421},
            {street:23,nagar:"jeejamata nagar",pin:412421}
        ],contact:9564},
        {name:'harry sir',addr:[
            {street:23,nagar:"jeejamata nagar",pin:412421},
            {street:23,nagar:"jeejamata nagar",pin:412421},
            {street:23,nagar:"jeejamata nagar",pin:412421},
            {street:23,nagar:"jeejamata nagar",pin:412421},
            {street:23,nagar:"jeejamata nagar",pin:412421}
        ],contact:9262}
    ];
    return(
        <>
        <h2>this is example of using List Array in React using Map function.</h2>
        <h2>And Tackeling Key Problems in React error.</h2>
           <Table striped hover bordered variant="dark">
           <tbody>
                <tr>
                    <td>SR.</td>
                    <td>name</td>
                    <td>contact</td>
                    <td>addr</td>
                </tr>
                {
                   teachers.map((val,index)=>
                   <tr key={index}>
                   <td>{index+1}</td>
                    <td>{val.name}</td>
                    <td>{val.contact}</td>
                    <td>
                        <Table striped bordered variant="dark">
                        <tbody>
                            {
                                val.addr.map((data,j)=>
                                <>
                                    <tr key={j}>
                                        <td>{j+1}</td>
                                        <td>{data.street}</td>
                                        <td>{data.nagar}</td>
                                        <td>{data.pin}</td>
                                    </tr>
                                   </> 
                                )
                            }
                        </tbody>
                        </Table>
                    </td>
                   </tr>
                    )
                    }
            </tbody>
                            
           </Table>
        
      
        </>
    )
}
export default ListInArray;