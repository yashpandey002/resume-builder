import "../../styles/root.css";
import "../../styles/utility.css";
import "./Layout.css";

export default function Layout({ children }) {
    return <div className="layout">{children}</div>;
}
