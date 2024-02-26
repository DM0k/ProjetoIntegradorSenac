export default function CustomCheckBox(props) {
    return (
        <div className={`col-${props.col} mb-3`}>
                <input className="form-check-input" id={props.id} type="checkbox"/>
                <label className="form-check-label ms-1" htmlFor={props.id}>{props.texto}</label>

        </div>
    )
}