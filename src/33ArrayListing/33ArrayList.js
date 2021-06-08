//go to website react Bootstrap and copy link and install it inside project.

import React,{useState} from 'react';
import {Table} from 'react-bootstrap';

function  ArrayList() {
    const student = ['atish','sumit','vaibhav'];
    const teachers = [
        {name:'swami sir',addr:'akola',contact:9860},
        {name:'naik sir',addr:'kolkatta',contact:9564},
        {name:'harry sir',addr:'latur',contact:9262}
    ];
    return(
        <>
        <h2>this is example of using Array in React using Map function.</h2>
        {
            student.map((value)=>
            <h4>name is : {value}</h4>
        )
        }
        
        <Table striped bordered variant="dark" hover>
                    <tr>
                        <td>name</td>
                        <td>addr</td>
                        <td>contact</td>
                    </tr>
                    {
                        teachers.map((value) =>
                        <tr>
                        <td>{value.name}</td>
                        <td>{value.addr}</td>
                        <td>{value.contact}</td>
                        </tr>
                   

                        )
                    }
                    
                  
                    
                </Table>  
        </>
    )
}
export default ArrayList;