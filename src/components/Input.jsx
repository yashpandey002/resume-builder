import "../styles/root.css";
import "../styles/utility.css";
import "../styles/Input.css";

export default function Input({ label, type, id }) {
    return (
        <div className="inputWrapper">
            <label htmlFor={id} className="inputLabel">
                {label}
            </label>
            <input
                type={type}
                id={id}
                className="inputInput"
                autoComplete="off"
            />
        </div>
    );
}
