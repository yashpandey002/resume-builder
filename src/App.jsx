import "./styles/root.css";
import "./styles/utility.css";
import "./styles/App.css";
import PersonalInfo from "./components/personal-info/PersonalInfo";
import ImpLinks from "./components/imp-links/ImpLinks";
import Education from "./components/education/Education";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";
import WorkExperience from "./components/work-experience/WorkExperience";
import Achievements from "./components/achievements/Achievements";
import VolunteerExperience from "./components/volunteer-experience/VolunteerExperience";

function App() {
    return (
        <div className="App">
            <div className="mainWrapper">
                <div className="mainHeading__box">
                    <h1 className="mainHeading">Build Your Tech Resume</h1>
                </div>
                <div className="mainContent__box flex">
                    <div className="mainContent__editorBox flex flex-column flex-gap-lg">
                        <PersonalInfo />
                        <ImpLinks />
                        <Education />
                        <Projects />
                        <Skills />
                        <WorkExperience />
                        <Achievements />
                        <VolunteerExperience />
                    </div>
                    <div className="mainContent__resultBox"></div>
                </div>
            </div>
        </div>
    );
}

export default App;
