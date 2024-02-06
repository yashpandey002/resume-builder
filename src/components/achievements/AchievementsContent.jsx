import "../../styles/root.css";
import "../../styles/utility.css";
import ContentLayout from "../layout/ContentLayout";
import SinglePoint from "../single-point/SinglePoint";

export default function AchievementsContent({ achievements }) {
    return (
        <div className="achievementsContentWrapper">
            <ContentLayout heading={"Achievements"}>
                {achievements.map((achievement) => (
                    <SinglePoint text={achievement} />
                ))}
            </ContentLayout>
        </div>
    );
}
