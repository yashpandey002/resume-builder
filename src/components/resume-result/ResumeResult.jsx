import "../../styles/root.css";
import "../../styles/utility.css";
import "./ResumeResult.css";
import PersonalInfoContent from "../personal-info/PersonalInfoContent";
import EducationContent from "../education/EducationContent";
import ProjectsContent from "../projects/ProjectsContent";
import SkillsContent from "../skills/SkillsContent";
import WorkExperienceContent from "../work-experience/WorkExperienceContent";
import AchievementsContent from "../achievements/AchievementsContent";
import VolunteerExperience from "../volunteer-experience/VolunteerExperienceContent";

export default function ResumeResult({ info }) {
    return (
        <div className="resumeResultWrapper">
            <div className="center-container">
                <PersonalInfoContent info={info} />
                <EducationContent education={info.education} />
                <ProjectsContent projects={info.projects} />
                <SkillsContent skills={info.skills} />
                <WorkExperienceContent workExperience={info.workExperience} />
                <AchievementsContent achievements={info.achievements} />
                <VolunteerExperience
                    volunteerExperience={info.volunteerExperience}
                />
            </div>
        </div>
    );
}
