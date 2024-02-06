import "../../styles/root.css";
import "../../styles/utility.css";
import "./PersonalInfo.css";

export default function PersonalInfoContent({ info }) {
    return (
        <div className="personalInfoContentWrapper">
            <div className="personalInfoContentNameBox">
                <h1 className="personalInfoContentName">
                    {info.personalInfo.fullName}
                </h1>
            </div>
            <div className="personalInfoContentImpLinksBox">
                <ul className="personalInfoContentImpLinksContainer flex">
                    <li>
                        <a href="#" className="personalInfoContentImpLink">
                            {info.personalInfo.email}
                        </a>
                    </li>
                    <li>
                        <a href="#" className="personalInfoContentImpLink">
                            github.com/{info.personalInfo.github}
                        </a>
                    </li>
                    <li>
                        <a href="#" className="personalInfoContentImpLink">
                            linkedin.com/{info.personalInfo.linkedin}
                        </a>
                    </li>
                    <li>
                        <a href="#" className="personalInfoContentImpLink">
                            twitter.com/{info.personalInfo.twitter}
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}
