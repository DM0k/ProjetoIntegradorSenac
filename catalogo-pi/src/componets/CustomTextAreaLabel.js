export default function CustomTextArea(props) {
    return (
        <div classname={`col-${props.col} mb-3`}>
                <label className="form-label" htmlFor={props.id}>{props.texto}</label>
                <textarea className="form-control" id={props.id} rows="3" onChange={props.onChange}></textarea>

        </div>

    )
}