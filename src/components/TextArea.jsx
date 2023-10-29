import "../styles/root.css";
import "../styles/utility.css";
import "../styles/TextArea.css";

export default function TextArea({ label, textLimit, id }) {
    return (
        <div className="textAreaWrapper">
            <div className="textAreaHeader flex">
                <label htmlFor={id} className="textAreaLabel">
                    {label}
                </label>
                <h6 className="textAreaLimit">{textLimit}</h6>
            </div>
            <textarea
                id={id}
                autoComplete="off"
                className="textAreaInput"
            ></textarea>
        </div>
    );
}
