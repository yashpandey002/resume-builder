import "../../styles/root.css";
import "../../styles/utility.css";
import "./Button.css";

export default function AddSecondaryBtn({ text }) {
    return (
        <button className="btn btn--secondary flex align-center justify-center">
            <img src=".././add-icon-black.svg" />
            <span>{text}</span>
        </button>
    );
}
