import "../../styles/root.css";
import "../../styles/utility.css";
import Layout from "../layout/Layout";
import TextArea from "../textarea/TextArea";
import { useState } from "react";

export default function Skills() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="skillsWrapper">
            <Layout
                contentIconSrc={"./skills-icon.svg"}
                heading={"Skills"}
                currentState={isOpen}
                handleDropdown={setIsOpen}
            >
                {isOpen ? (
                    <div className="skills__contentBox flex flex-column flex-gap-md">
                        <TextArea
                            label={"Skills Separated by comma(,)"}
                            textLimit={"0/15"}
                            id={"skillsInput"}
                        />
                    </div>
                ) : null}
            </Layout>
        </div>
    );
}
