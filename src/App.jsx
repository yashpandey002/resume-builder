import "./styles/root.css";
import "./styles/utility.css";
import "./styles/App.css";
import PersonalInfo from "./components/PersonalInfo";
import ImpLinks from "./components/ImpLinks";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import WorkExperience from "./components/WorkExperience";
import Achievements from "./components/Achievements";
import VolunteerExperience from "./components/VolunteerExperience";

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
