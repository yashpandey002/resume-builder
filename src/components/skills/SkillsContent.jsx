import "../../styles/root.css";
import "../../styles/utility.css";
import "./Skills.css";
import ContentLayout from "../layout/ContentLayout";
import SinglePoint from "../single-point/SinglePoint";

export default function SkillsContent({ skills }) {
    return (
        <div className="skillsContentWrapper">
            <ContentLayout heading={"Technical skills"}>
                <ul className="skillsContentSkillsContainer grid">
                    {skills.map((skill) => (
                        <SinglePoint text={skill} />
                    ))}
                </ul>
            </ContentLayout>
        </div>
    );
}
