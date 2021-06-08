import React from 'react';

function Student(props)
{
    console.log(props);
    return(
        <>
        <h1>this is example of props</h1>
        <h2>name is {props.name}</h2>
        <h2>email is {props.email}</h2>
        </>
    )
}
export default Student;