import "../../styles/root.css";
import "../../styles/utility.css";
import "./Education.css";
import SinglePoint from "../single-point/SinglePoint";

export default function EducationSingle({
    degree,
    school,
    city,
    year,
    cgpa,
    cgpaYear,
    details,
}) {
    return (
        <div className="educationSingleWrapper">
            <div className="educationSingleHeader flex">
                <h3 className="educationSingleHeading">
                    {degree} | {school}, {city}
                </h3>
                <div className="educationSingleYear">{year}</div>
            </div>
            <div className="educationSingleMainContent">
                <ul className="educationSinglePointsContainer">
                    <li className="educationCGPA">
                        CGPA: {cgpa} ({cgpaYear})
                    </li>
                    {details.map((point) => (
                        <SinglePoint text={point} />
                    ))}
                </ul>
            </div>
        </div>
    );
}
