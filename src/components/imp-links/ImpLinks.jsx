import "../../styles/root.css";
import "../../styles/utility.css";
import Layout from "../layout/Layout";
import Header from "../header/Header";
import Input from "../input/Input";

export default function ImpLinks() {
    return (
        <div className="impLinksWrapper">
            <Layout>
                <div className="impLinks__header">
                    <Header
                        contentIconSrc={".././imp-links-icon.svg"}
                        heading={"Important links"}
                        downIconSrc={".././down-icon.svg"}
                    />
                </div>
                <div className="impLinks__contentBox flex flex-column flex-gap-md">
                    <Input label={"Github"} type={"text"} id={"github"} />
                    <Input label={"Linkedin"} type={"text"} id={"linkedin"} />
                    <Input label={"Twitter"} type={"text"} id={"twitter"} />
                </div>
            </Layout>
        </div>
    );
}
