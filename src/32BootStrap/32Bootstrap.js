//go to website react Bootstrap and copy link and install it inside project.

import React,{useState} from 'react';
import { Button} from 'react-bootstrap';
import { Card  } from 'react-bootstrap';




function  Bootstarp() {

    const [show,setShow] = useState(false)

 

    return(
        <>
        <div className="Show">
        {
            show ?  <Card.Title className="mb-2 text-muted">ganu</Card.Title> : null
        }
        <Button  className="mb-2" onClick={()=>setShow(true)}>Show</Button>
        <Button variant="success" onClick={()=>setShow(false)}>Hide</Button> 
        </div>
        </>
    )
}
export default Bootstarp;