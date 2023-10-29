import "../styles/root.css";
import "../styles/utility.css";
import Layout from "./Layout";
import Header from "./Header";
import TextArea from "./TextArea";

export default function Skills() {
    return (
        <div className="skillsWrapper">
            <Layout>
                <div className="skills__header">
                    <Header
                        contentIconSrc={".././skills-icon.svg"}
                        heading={"Skills"}
                        downIconSrc={".././down-icon.svg"}
                    />
                </div>
                <div className="skills__contentBox flex flex-column flex-gap-md">
                    <TextArea
                        label={"Skills Separated by comma(,)"}
                        textLimit={"0/15"}
                        id={"skillsInput"}
                    />
                </div>
            </Layout>
        </div>
    );
}
