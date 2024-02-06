import "../../styles/root.css";
import "../../styles/utility.css";
import Layout from "../layout/Layout";
import TextArea from "../textarea/TextArea";
import AddPrimaryBtn from "../buttons/AddPrimaryBtn";
import { useState } from "react";

export default function WorkExperience() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="workExperienceWrapper">
            <Layout
                contentIconSrc={".././work-experience-icon.svg"}
                heading={"Work Experience"}
                currentState={isOpen}
                handleDropdown={setIsOpen}
            >
                {isOpen ? (
                    <div className="workExperience__contentBox flex flex-column flex-gap-md">
                        <TextArea
                            label={"Work Experience"}
                            textLimit={"1/5"}
                            id={"workExperienceInput"}
                        />
                        <AddPrimaryBtn text={"Add Work experience"} />
                    </div>
                ) : null}
            </Layout>
        </div>
    );
}
