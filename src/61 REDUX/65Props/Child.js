import React from 'react';
const Child = (props) =>{
    const {data} = props
    return(
        <div>
            <h1>Props in redux</h1>
            <h3>data send to Child = {data.name}</h3>
        </div>
    )
}
export default Child;