import "./styles/root.css";
import "./styles/utility.css";
import "./styles/App.css";
import exampleData from "./exampleData";
import ContentEditor from "./components/content-editor/ContentEditor";
import ResumeResult from "./components/resume-result/ResumeResult";
import { useState } from "react";

function App() {
    const [info, setInfo] = useState({
        ...exampleData,
    });

    return (
        <div className="App">
            <div className="mainWrapper">
                <div className="mainHeading__box">
                    <h1 className="mainHeading">Build Your Tech Resume</h1>
                </div>
                <div className="mainContent__box flex">
                    <div className="mainContent__editorBox flex flex-column flex-gap-lg">
                        <ContentEditor info={info} onInfoChange={setInfo} />
                    </div>
                    <div className="mainContent__resultBox">
                        <ResumeResult info={info} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
