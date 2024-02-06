import "../../styles/root.css";
import "../../styles/utility.css";
import Layout from "../layout/Layout";
import Input from "../input/Input";
import countryCodes from "./linkedinCountryCode.json";
import { useState } from "react";

console.log(countryCodes);

export default function PersonalInfo({ personalInfo, onPersonalInfoChange }) {
    const [isOpen, setIsOpen] = useState(true);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [github, setGithub] = useState("");
    const [linkedin, setLinkedin] = useState("");
    const [twitter, setTwitter] = useState("");

    return (
        <div className="personalInfoWrapper">
            <Layout
                contentIconSrc={"./personal-info-icon.svg"}
                heading={"Personal info"}
                currentState={isOpen}
                handleDropdown={setIsOpen}
            >
                {isOpen ? (
                    <div className="personalInfo__contentBox flex flex-column flex-gap-md">
                        <Input
                            label={"Name"}
                            type={"text"}
                            id={"name"}
                            value={name}
                            handleInputChange={(e) => {
                                setName(e.target.value);
                                onPersonalInfoChange({
                                    ...personalInfo,
                                    fullName: e.target.value,
                                });
                            }}
                        />
                        <Input
                            label={"Email"}
                            type={"email"}
                            id={"email"}
                            value={email}
                            handleInputChange={(e) => {
                                setEmail(e.target.value);
                                onPersonalInfoChange({
                                    ...personalInfo,
                                    email: e.target.value,
                                });
                            }}
                        />
                        <Input
                            label={"Github username"}
                            type={"text"}
                            id={"github"}
                            value={github}
                            handleInputChange={(e) => {
                                setGithub(e.target.value);
                                onPersonalInfoChange({
                                    ...personalInfo,
                                    github: e.target.value,
                                });
                            }}
                        />
                        <Input
                            label={"Linkedin username"}
                            type={"text"}
                            id={"linkedin"}
                            value={linkedin}
                            handleInputChange={(e) => {
                                setLinkedin(e.target.value);
                                onPersonalInfoChange({
                                    ...personalInfo,
                                    linkedin: e.target.value,
                                });
                            }}
                        />
                        <Input
                            label={"Twitter username"}
                            type={"text"}
                            id={"twitter"}
                            value={twitter}
                            handleInputChange={(e) => {
                                setTwitter(e.target.value);
                                onPersonalInfoChange({
                                    ...personalInfo,
                                    twitter: e.target.value,
                                });
                            }}
                        />
                    </div>
                ) : null}
            </Layout>
        </div>
    );
}
