import "../../styles/root.css";
import "../../styles/utility.css";
import Layout from "../layout/Layout";
import Input from "../input/Input";
import countryCodes from "./linkedinCountryCode";
import { useState } from "react";

console.log(countryCodes);
let id = 0;

export default function PersonalInfo({ personalInfo, onPersonalInfoChange }) {
    const [isOpen, setIsOpen] = useState(true);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [github, setGithub] = useState("");
    const [linkedin, setLinkedin] = useState("");
    const [linkedinCountryCode, setLinkedinCountryCode] = useState("in");
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
                            placeholder={"Yash Pandey"}
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
                            placeholder={"pandeyyash002@gmail.com"}
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
                            placeholder={"yashpandey002"}
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
                        <div className="inputWrapper">
                            <label className="inputLabel">Linkedin</label>
                            <div className="flex flex-gap-md">
                                <select
                                    name="linkdeinCountryCode"
                                    id="linkdeinCountryCode"
                                    className="linkdeinCountryCode"
                                    onChange={(e) => {
                                        setLinkedinCountryCode(e.target.value);
                                        onPersonalInfoChange({
                                            ...personalInfo,
                                            linkedinCountryCode: e.target.value,
                                        });
                                    }}
                                    value={linkedinCountryCode}
                                >
                                    {countryCodes.map((country) => (
                                        <option
                                            key={country.code}
                                            value={country.code}
                                        >
                                            {country.name}
                                        </option>
                                    ))}
                                </select>
                                <input
                                    type={"text"}
                                    placeholder="pandeyyash"
                                    id={"linkedin"}
                                    className="inputInput"
                                    autoComplete="off"
                                    value={linkedin}
                                    onChange={(e) => {
                                        setLinkedin(e.target.value);
                                        onPersonalInfoChange({
                                            ...personalInfo,
                                            linkedin: e.target.value,
                                        });
                                    }}
                                />
                            </div>
                        </div>
                        <Input
                            label={"Twitter username"}
                            placeholder={"pandeyyash_"}
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
