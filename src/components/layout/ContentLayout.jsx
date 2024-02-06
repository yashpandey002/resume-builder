import "../../styles/root.css";
import "../../styles/utility.css";
import "./Layout.css";

export default function ContentLayout({ heading, children }) {
    return (
        <div className="contentLayoutWrapper">
            <div className="contentLayoutHeader">
                <h2 className="contentLayoutHeading">{heading}</h2>
                <div className="contentLayoutDivider">&nbsp;</div>
            </div>
            {children}
        </div>
    );
}
