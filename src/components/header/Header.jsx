import "../../styles/root.css";
import "../../styles/utility.css";
import "./Header.css";

export default function Header({ contentIconSrc, heading, downIconSrc }) {
    return (
        <div className="header flex align-center flex-gap-sm">
            <div className="header__contentIconBox">
                <img src={contentIconSrc} className="header__contentIcon" />
            </div>
            <div className="header__headingBox">
                <h3 className="header__heading">{heading}</h3>
            </div>
            <div className="header__downIconBox">
                <img src={downIconSrc} className="header__downIcon" />
            </div>
        </div>
    );
}
