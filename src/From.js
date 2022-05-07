import React,{useState} from 'react'

function From() {
   let [percent,setPercent] = useState(null)
//    let [loan,setLoan] = useState(null)
   let [fees,setFees] = useState(0)
   const calculate = (percent) => {
      let fact = 1;
    for (let i = 1; i <= percent; i++) {
            fact *= i;
            console.log(i);
    }
    
   }
  return (
    <div>From
        <from>
            <label>Percentage</label>
            <input onChange={(e)=>setPercent(e.target.value)} type='number'/>
            {/* <label>Loan</label> */}
            {/* <input onChange={(e)=>setLoan(e.target.value)} type='number'/> */}
            <label>percent</label>
            {percent}
            <br></br>
             {fees}
            <button onClick={()=>{setFees((percent)=>{
                let fact = 1;
                for (let i = 1; i < percent; i++) {
                    fact *=i;
                    console.log("fact run");
                    setFees(fact);
                }
            })}}>Calculate</button>
        </from>
    </div>
  )
}

export default From