import PropTypes from 'prop-types';
const InGroupText = (props) => {
    const handleInputChange = (ev) => {
        props.onChange(ev.target.value)
    }
    return (
        <div className="input-group-text">
            <label className="label-text" htmlFor={props.htmlFor}>
                {props.labelText}
            </label>
            <input
                className="input-text"
                type={props.type}
                name={props.name}
                id={props.id}
                placeholder={props.placeholder}
                value={props.value}
                onChange={handleInputChange}
            />
        </div>
    )
};
InGroupText.propTypes = {
    htmlFor: PropTypes.string.isRequired,
    labelText: PropTypes.string,
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
}
export default InGroupText