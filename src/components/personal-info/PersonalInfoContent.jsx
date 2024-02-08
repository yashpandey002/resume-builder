import "../../styles/root.css";
import "../../styles/utility.css";
import "./PersonalInfo.css";

export default function PersonalInfoContent({ info }) {
    const personalInfo = info.personalInfo;

    return (
        <div className="personalInfoContentWrapper">
            <div className="personalInfoContentNameBox">
                <h1 className="personalInfoContentName">
                    {personalInfo.fullName}
                </h1>
            </div>
            <div className="personalInfoContentImpLinksBox">
                <ul className="personalInfoContentImpLinksContainer flex">
                    <li>
                        <a
                            href={`mailto:${personalInfo.email}`}
                            className="personalInfoContentImpLink"
                            target="_blanck"
                        >
                            {personalInfo.email}
                        </a>
                    </li>
                    <li>
                        <a
                            href={`https://www.github.com/${personalInfo.github}`}
                            className="personalInfoContentImpLink"
                            target="_blanck"
                        >
                            github.com/{personalInfo.github}
                        </a>
                    </li>
                    <li>
                        <a
                            href={`https://www.linkedin.com/${personalInfo.linkedinCountryCode}/${personalInfo.linkedin}`}
                            className="personalInfoContentImpLink"
                            target="_blanck"
                        >
                            linkedin.com/{personalInfo.linkedinCountryCode}/
                            {personalInfo.linkedin}
                        </a>
                    </li>
                    <li>
                        <a
                            href={`https://www.twitter.com/${personalInfo.twitter}`}
                            className="personalInfoContentImpLink"
                            target="_blanck"
                        >
                            twitter.com/{personalInfo.twitter}
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}
