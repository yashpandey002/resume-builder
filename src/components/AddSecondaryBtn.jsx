import "../styles/root.css";
import "../styles/utility.css";
import "../styles/AddSeconadryBtn.css";

export default function AddSecondaryBtn({ text }) {
    return (
        <button className="addSecondaryBtn flex align-center justify-center">
            <img src=".././add-icon-black.svg" />
            <span>{text}</span>
        </button>
    );
}
