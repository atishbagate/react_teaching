//yaha hum lifting state up kahate hain. jaha 
// jaha child se parent ko data transfer kiya jata hain.
import React from 'react'
import Child from './Child'

function Main() {
    function alerted(data) {
        alert(`data is ${data.name}`)
    }
    //yaha function parent se send ker ke child se info gather ker se return parent ko data send ker diya hain.
    //just to try
   function calling(params) {
       console.log(`this is parameter send from child ${params.addr}`);
   }
    return(
        <>
         <h2>This is example of sending Data from Child to Parent</h2>
        <Child alert={alerted} call={calling}/>
        
        </>
    )
}
export default Main;