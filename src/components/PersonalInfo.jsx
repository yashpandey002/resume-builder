import "../styles/root.css";
import "../styles/utility.css";
import "../styles/PersonalInfo.css";

export default function PersonalInfo() {
    return (
        <div className="personalInfo__mainBox">
            <div className="personalInfo__header flex align-center">
                <div className="personalInfo__iconBox">
                    <img src=".././personal-info-icon.svg" />
                </div>
                <div className="personalInfo__headingBox">
                    <h3 className="personalInfo__heading">Personal info</h3>
                </div>
                <div className="personalInfo__downIconBox">
                    <img
                        src=".././down-icon.svg"
                        className="personalInfo__downIcon"
                    />
                </div>
            </div>
            <div className="personalInfo__contentBox">
                <div className="personalInfo__nameInputBox">
                    <label
                        htmlFor="name"
                        className="personalInfo__nameInputLabel"
                    >
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        className="personalInfo__nameInput"
                    />
                </div>
                <div className="personalInfo__emailInputBox">
                    <label
                        htmlFor="email"
                        className="personalInfo__emailInputLabel"
                    >
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="personalInfo__emailInput"
                    />
                </div>
            </div>
        </div>
    );
}
