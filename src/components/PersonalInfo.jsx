import "../styles/root.css";
import "../styles/utility.css";
import Layout from "./Layout";
import Header from "./Header";
import Input from "./Input";

export default function PersonalInfo() {
    return (
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
    );
}
