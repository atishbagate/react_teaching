import React,{createContext} from 'react'
import Child1 from './Child1'
const Fname = createContext();
const Lname = createContext();
function Main() {
    return(
        <>
        <Fname.Provider value={"Atish"}>
            <Lname.Provider value={"Bagate"}>
            <Child1 />
            </Lname.Provider>
        </Fname.Provider>
            
        </>
    )
}
export default Main;
export {Fname,Lname};