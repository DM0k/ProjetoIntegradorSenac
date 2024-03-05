export default function CustomImputLabel(props) {
    return(
        <div className={`col-${props.col} mb-3`}>
        <label className="form-label" htmlFor={props.id}>{props.texto}</label>
        <input className="form-control" id={props.id} type="text" onChange={props.onChange}/>
    </div>
    )
    
}