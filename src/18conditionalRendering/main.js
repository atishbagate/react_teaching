import {useState} from 'react';
function Condition() {
    const [ha,setHa] = useState(false)

    const [number,setNumber] = useState(1)
    return(
        <>
        <div>
        <h1>this is conditional Loops</h1>
        {/* using ternary operator  */}
       { ha?<h1>ha login hain</h1>:<h3>login nahi hain</h3>} 
       <button onClick={()=>setHa(!ha)}>yaha se login karo</button>
       <h1>isase niche ternary operator use hua hain.</h1>
         {/* using ternary operator  */}
         { number===1?<h1>number is 1</h1>
         :number===2?<h3>number is 2</h3>
         :number===3?<h3>number is 3</h3>
         :<h4>number is not given</h4>} 
       <button onClick={()=>setNumber(number+1)}>yaha se login karo</button>
        </div>
        </>

    )
}
export default Condition;