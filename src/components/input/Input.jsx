import "../../styles/root.css";
import "../../styles/utility.css";
import "./Input.css";

export default function Input({
    label,
    placeholder,
    type,
    id,
    value,
    handleInputChange,
}) {
    return (
        <div className="inputWrapper">
            <label htmlFor={id} className="inputLabel">
                {label}
            </label>
            <input
                type={type}
                placeholder={placeholder}
                id={id}
                className="inputInput"
                autoComplete="off"
                value={value}
                onChange={handleInputChange}
            />
        </div>
    );
}
