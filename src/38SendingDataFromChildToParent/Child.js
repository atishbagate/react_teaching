
function Child(props) {
    
    const data = {name:"data from Child"}

    const info = {addr:"latur"}
    return(
        <>
        <h3>This is the Child Component sending information to Parent.</h3>
        <button onClick={()=>{props.alert(data)}}>Click Here</button>
        <h2>this is another try example</h2>
        <button onClick={()=>{props.call(info)}}>click</button>
        </>
    )
}
export default Child;