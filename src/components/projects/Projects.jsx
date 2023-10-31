import "../../styles/root.css";
import "../../styles/utility.css";
import Layout from "../layout/Layout";
import Header from "../header/Header";
import Input from "../input/Input";
import TextArea from "../textarea/TextArea";
import AddSecondaryBtn from "../buttons/AddSecondaryBtn";
import AddPrimaryBtn from "../buttons/AddPrimaryBtn";

export default function Projects() {
    return (
        <div className="projectsWrapper">
            <Layout>
                <div className="projects__header">
                    <Header
                        contentIconSrc={".././project-icon.svg"}
                        heading={"Projects"}
                        downIconSrc={".././down-icon.svg"}
                    />
                </div>
                <div className="projects__contentBox flex flex-column flex-gap-md">
                    <Input
                        label={"Project name"}
                        type={"text"}
                        id={"projectName"}
                    />
                    <Input
                        label={"Descriptive heading"}
                        type={"text"}
                        id={"projectDescriptiveHeading"}
                    />
                    <TextArea
                        label={"Project description point"}
                        textLimit={"1/5"}
                        id={"projectDesciptionPoint1"}
                    />
                    <AddSecondaryBtn text={"Add deatils head"} />
                    <AddPrimaryBtn text={"Add projects"} />
                </div>
            </Layout>
        </div>
    );
}
