import "../../styles/root.css";
import "../../styles/utility.css";
import Layout from "../layout/Layout";
import Header from "../header/Header";
import TextArea from "../textarea/TextArea";
import AddPrimaryBtn from "../buttons/AddPrimaryBtn";

export default function WorkExperience() {
    return (
        <div className="workExperienceWrapper">
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
