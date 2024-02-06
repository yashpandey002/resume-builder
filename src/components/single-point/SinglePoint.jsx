import "../../styles/root.css";
import "../../styles/utility.css";
import "./SinglePoint.css";

export default function SinglePoint({ text }) {
    return <li className="singlePoint">{text}</li>;
}
