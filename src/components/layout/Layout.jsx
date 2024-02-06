import "../../styles/root.css";
import "../../styles/utility.css";
import "./Layout.css";

export default function Layout({
    contentIconSrc,
    heading,
    currentState,
    handleDropdown,
    children,
}) {
    return (
        <div className="layout">
            <div className="header flex align-center flex-gap-sm">
                <div className="header__contentIconBox">
                    <img src={contentIconSrc} className="header__contentIcon" />
                </div>
                <div className="header__headingBox">
                    <h3 className="header__heading">{heading}</h3>
                </div>
                <div className="header__downIconBox">
                    <img
                        src="./down-icon.svg"
                        className="header__downIcon"
                        onClick={() => handleDropdown(!currentState)}
                    />
                </div>
            </div>
            {children}
        </div>
    );
}
