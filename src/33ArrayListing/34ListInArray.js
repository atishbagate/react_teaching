//go to website react Bootstrap and copy link and install it inside project.

import React from 'react';
import {Table} from 'react-bootstrap';

function  ListInArray() {

    const teachers = [
        {name:'swami sir',addr:'akola',contact:9860},
        {name:'naik sir',addr:'kolkatta',contact:9564},
        {name:'harry sir',addr:'latur',contact:9262}
    ];
    return(
        <>
        <h2>this is example of using List Array in React using Map function.</h2>
        <h2>And Tackeling Key Problems in React error.</h2>
           <Table striped hover bordered >
           <tbody>
                <tr>
                    <td>name</td>
                    <td>contact</td>
                    <td>addr</td>
                </tr>
                {
                   teachers.map((val,index)=>
                   <tr key={index}>
                    <td>{val.name}</td>
                    <td>{val.contact}</td>
                    <td>{val.addr}</td>
                   </tr>
                    )
                    }
            </tbody>
                            
           </Table>
        
      
        </>
    )
}
export default ListInArray;