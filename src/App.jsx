import "./styles/root.css";
import "./styles/utility.css";
import "./styles/App.css";
import PersonalInfo from "./components/PersonalInfo";

function App() {
    return (
        <div className="App">
            <div className="mainWrapper">
                <div className="mainHeading__box">
                    <h1 className="mainHeading">Build Your Tech Resume</h1>
                </div>
                <div className="mainContent__box flex">
                    <div className="mainContent__editorBox">
                        <PersonalInfo />
                    </div>
                    <div className="mainContent__resultBox"></div>
                </div>
            </div>
        </div>
    );
}

export default App;
