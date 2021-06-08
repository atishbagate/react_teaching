import style from './Childcss.css'
function Info(props) {
    
    return(
        <>
        <div className="secondary">
            <span >{props.data.name}</span>
            <span >{props.data.addr}</span>
            <span >{props.data.contact}</span>        
        </div>
        </>
    )
}
export default Info;