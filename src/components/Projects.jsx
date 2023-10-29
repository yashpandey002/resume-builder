import "../styles/root.css";
import "../styles/utility.css";
import Layout from "./Layout";
import Header from "./Header";
import Input from "./Input";
import TextArea from "./TextArea";
import AddSecondaryBtn from "./AddSecondaryBtn";
import AddPrimaryBtn from "./AddPrimaryBtn";

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
