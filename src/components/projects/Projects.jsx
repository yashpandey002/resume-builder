import "../../styles/root.css";
import "../../styles/utility.css";
import Layout from "../layout/Layout";
import Input from "../input/Input";
import TextArea from "../textarea/TextArea";
import AddSecondaryBtn from "../buttons/AddSecondaryBtn";
import AddPrimaryBtn from "../buttons/AddPrimaryBtn";
import { useState } from "react";

export default function Projects() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="projectsWrapper">
            <Layout
                contentIconSrc={"./project-icon.svg"}
                heading={"Projects"}
                currentState={isOpen}
                handleDropdown={setIsOpen}
            >
                {isOpen ? (
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
                ) : null}
            </Layout>
        </div>
    );
}
