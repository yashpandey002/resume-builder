import "../../styles/root.css";
import "../../styles/utility.css";
import Layout from "../layout/Layout";
import Header from "../header/Header";
import TextArea from "../textarea/TextArea";
import AddPrimaryBtn from "../buttons/AddPrimaryBtn";

export default function VolunteerExperience() {
    return (
        <div className="volunteerExperienceWrapper">
            <Layout>
                <div className="volunteerExperience__header">
                    <Header
                        contentIconSrc={".././volunteer-experience-icon.svg"}
                        heading={"Volunteer Experience"}
                        downIconSrc={".././down-icon.svg"}
                    />
                </div>
                <div className="volunteerExperience__contentBox flex flex-column flex-gap-md">
                    <TextArea
                        label={"volunteership"}
                        textLimit={"1/5"}
                        id={"volunteershipInput1"}
                    />
                    <AddPrimaryBtn text={"Add volunteership"} />
                </div>
            </Layout>
        </div>
    );
}
