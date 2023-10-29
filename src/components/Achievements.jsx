import "../styles/root.css";
import "../styles/utility.css";
import Layout from "./Layout";
import Header from "./Header";
import TextArea from "./TextArea";
import AddPrimaryBtn from "./AddPrimaryBtn";

export default function Achievements() {
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
                    <AddPrimaryBtn text={"Add Work experience"} />
                </div>
            </Layout>
        </div>
    );
}
