//in this Tutorial we see how to reuse component and how to send DATA/props in Loop and how Componet acts/works inside <Loops .

import React from 'react';
import Info from './Child';

function ComponentReuse() {
    
    const teachers = [
            {name:'swami sir',addr:'akola',contact:9860},
            {name:'naik sir',addr:'kolkatta',contact:9564},
            {name:'harry sir',addr:'latur',contact:9262}
    ]
    return(
        <>
        <h1>this is Example of Component Reuse inside Loop.</h1>
        <h4>This is Information</h4><br />
        {
            teachers.map((val,i)=>
        <Info data ={val} />
        )
        }
        </>

    )
}
export default ComponentReuse;