import "../../styles/root.css";
import "../../styles/utility.css";
import "./ContentEditor.css";
import PersonalInfo from "../personal-info/PersonalInfo";
import Education from "../education/Education";
import Projects from "../projects/Projects";
import Skills from "../skills/Skills";
import WorkExperience from "../work-experience/WorkExperience";
import Achievements from "../achievements/Achievements";
import VolunteerExperience from "../volunteer-experience/VolunteerExperience";
import { useState } from "react";

export default function ContentEditor({ info, onInfoChange }) {
    const [personalInfo, setPersonalInfo] = useState(info.personalInfo);

    const setAndShowPersonalInfoChange = function (personalInfo) {
        setPersonalInfo(personalInfo);
        onInfoChange({ ...info, personalInfo: { ...personalInfo } });
    };

    return (
        <div className="contentEditorWrapper flex">
            <PersonalInfo
                personalInfo={personalInfo}
                onPersonalInfoChange={setAndShowPersonalInfoChange}
            />
            <Education />
            <Projects />
            <Skills />
            <WorkExperience />
            <Achievements />
            <VolunteerExperience />
        </div>
    );
}
