import "../../styles/root.css";
import "../../styles/utility.css";
import "./WorkExperience.css";
import ContentLayout from "../layout/ContentLayout";
import SinglePoint from "../single-point/SinglePoint";

export default function WorkExperienceContent({ workExperience }) {
    return (
        <div className="workExperienceContentWrapper">
            <ContentLayout heading={"Work Experience"}>
                <ul className="workExperienceContentPointsContainer">
                    {workExperience.map((singleWorkExperience) => (
                        <SinglePoint text={singleWorkExperience} />
                    ))}
                </ul>
            </ContentLayout>
        </div>
    );
}
