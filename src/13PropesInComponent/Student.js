import React from 'react';

import Student from './Props';

function Students() {
    return(
        <>
        <Student name={"ganu"}/> 
        {/* yaha se information props ke format main jayegi  */}
        <Student name={"ganu"} email="ganu@gmail.com"/>
        </>
    )
}

export default Students;