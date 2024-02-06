import "../../styles/root.css";
import "../../styles/utility.css";
import Layout from "../layout/Layout";
import TextArea from "../textarea/TextArea";
import AddPrimaryBtn from "../buttons/AddPrimaryBtn";
import { useState } from "react";

export default function VolunteerExperience() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="volunteerExperienceWrapper">
            <Layout
                contentIconSrc={"./volunteer-experience-icon.svg"}
                heading={"Volunteer Experience"}
                currentState={isOpen}
                handleDropdown={setIsOpen}
            >
                {isOpen ? (
                    <div className="volunteerExperience__contentBox flex flex-column flex-gap-md">
                        <TextArea
                            label={"volunteership"}
                            textLimit={"1/5"}
                            id={"volunteershipInput1"}
                        />
                        <AddPrimaryBtn text={"Add volunteership"} />
                    </div>
                ) : null}
            </Layout>
        </div>
    );
}
