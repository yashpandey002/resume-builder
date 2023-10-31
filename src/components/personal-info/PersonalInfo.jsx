import "../../styles/root.css";
import "../../styles/utility.css";
import Layout from "../layout/Layout";
import Header from "../header/Header";
import Input from "../input/Input";

export default function PersonalInfo() {
    return (
        <div className="personalInfoWrapper">
            <Layout>
                <div className="personalInfo__header">
                    <Header
                        contentIconSrc={".././personal-info-icon.svg"}
                        heading={"Personal info"}
                        downIconSrc={".././down-icon.svg"}
                    />
                </div>
                <div className="personalInfo__contentBox flex flex-column flex-gap-md">
                    <Input label={"Name"} type={"text"} id={"name"} />
                    <Input label={"Email"} type={"email"} id={"email"} />
                </div>
            </Layout>
        </div>
    );
}
