import "../../styles/root.css";
import "../../styles/utility.css";
import "./Project.css";
import SinglePoint from "../single-point/SinglePoint";

export default function ProjectSingle({ name, descriptiveHeading, details }) {
    return (
        <div className="projectSingleWrapper">
            <div className="projectSingleHeader">
                <h3 className="projectSingleHeading">
                    {name} | {descriptiveHeading}
                </h3>
            </div>
            <div className="projectSingleMainContent">
                <ul className="projectSinglePointsContainer">
                    {details.map((singlePoint) => (
                        <SinglePoint text={singlePoint} />
                    ))}
                </ul>
            </div>
        </div>
    );
}
