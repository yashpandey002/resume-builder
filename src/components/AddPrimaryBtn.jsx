import "../styles/root.css";
import "../styles/utility.css";
import "../styles/AddPrimaryBtn.css";

export default function AddPrimaryBtn({ text }) {
    return (
        <button className="addPrimaryBtn flex align-center justify-center">
            <img src=".././add-icon-white.svg" />
            <span>{text}</span>
        </button>
    );
}
