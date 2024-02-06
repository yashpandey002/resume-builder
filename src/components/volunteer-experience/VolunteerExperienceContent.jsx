import "../../styles/root.css";
import "../../styles/utility.css";
import ContentLayout from "../layout/ContentLayout";
import SinglePoint from "../single-point/SinglePoint";

export default function VolunteerExperienceContent({ volunteerExperience }) {
    return (
        <div className="volunteerExperienceContentWrapper">
            <ContentLayout heading={"Volunteer Experience"}>
                {volunteerExperience.map((singleVolunteerExperience) => (
                    <SinglePoint text={singleVolunteerExperience} />
                ))}
            </ContentLayout>
        </div>
    );
}
