import "../../styles/root.css";
import "../../styles/utility.css";
import Layout from "../layout/Layout";
import TextArea from "../textarea/TextArea";
import AddPrimaryBtn from "../buttons/AddPrimaryBtn";
import { useState } from "react";

export default function Achievements() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="achievementsWrapper">
            <Layout
                contentIconSrc={"./achievements-icon.svg"}
                heading={"Achievements"}
                currentState={isOpen}
                handleDropdown={setIsOpen}
            >
                {isOpen ? (
                    <div className="achievements__contentBox flex flex-column flex-gap-md">
                        <TextArea
                            label={"Achievement"}
                            textLimit={"1/5"}
                            id={"achievementInput1"}
                        />
                        <AddPrimaryBtn text={"Add achievement"} />
                    </div>
                ) : null}
            </Layout>
        </div>
    );
}
