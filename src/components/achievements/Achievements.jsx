import "../../styles/root.css";
import "../../styles/utility.css";
import Layout from "../layout/Layout";
import Header from "../header/Header";
import TextArea from "../textarea/TextArea";
import AddPrimaryBtn from "../buttons/AddPrimaryBtn";

export default function Achievements() {
    return (
        <div className="achievementsWrapper">
            <Layout>
                <div className="achievements__header">
                    <Header
                        contentIconSrc={".././achievements-icon.svg"}
                        heading={"Achievements"}
                        downIconSrc={".././down-icon.svg"}
                    />
                </div>
                <div className="achievements__contentBox flex flex-column flex-gap-md">
                    <TextArea
                        label={"Achievement"}
                        textLimit={"1/5"}
                        id={"achievementInput1"}
                    />
                    <AddPrimaryBtn text={"Add achievement"} />
                </div>
            </Layout>
        </div>
    );
}
