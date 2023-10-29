import "../styles/root.css";
import "../styles/utility.css";
import Layout from "./Layout";
import Header from "./Header";
import TextArea from "./TextArea";

export default function WorkExperience() {
    return (
        <div className="skillsWrapper">
            <Layout>
                <div className="workExperience__header">
                    <Header
                        contentIconSrc={".././work-experience-icon.svg"}
                        heading={"Work Experience"}
                        downIconSrc={".././down-icon.svg"}
                    />
                </div>
                <div className="workExperience__contentBox flex flex-column flex-gap-md">
                    <TextArea
                        label={"Work Experience"}
                        textLimit={"1/5"}
                        id={"workExperienceInput"}
                    />
                </div>
            </Layout>
        </div>
    );
}
