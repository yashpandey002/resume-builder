import "../../styles/root.css";
import "../../styles/utility.css";
import "./Button.css";

export default function AddPrimaryBtn({ text }) {
    return (
        <button className="btn btn--primary flex align-center justify-center">
            <img src=".././add-icon-white.svg" />
            <span>{text}</span>
        </button>
    );
}
