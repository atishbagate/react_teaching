
import React from 'react'

export default class Student extends React.Component{

    render()
        {
            // console.log(this.props);
            return(
                <>
                <div>Student name is {this.props.name} and email is {this.props.email}</div>
                </>
            )
        }
}