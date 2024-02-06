import "../../styles/root.css";
import "../../styles/utility.css";
import "./Education.css";
import Layout from "../layout/Layout";
import Input from "../input/Input";
import TextArea from "../textarea/TextArea";
import AddPrimaryBtn from "../buttons/AddPrimaryBtn";
import { useState } from "react";

export default function Education() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="educationWrapper">
            <Layout
                contentIconSrc={"./education-icon.svg"}
                heading={"Education"}
                currentState={isOpen}
                handleDropdown={setIsOpen}
            >
                {isOpen ? (
                    <div className="personalInfo__contentBox flex flex-column flex-gap-md">
                        <Input label={"Degree"} type={"text"} id={"degree"} />
                        <Input
                            label={"School/College"}
                            type={"text"}
                            id={"school"}
                        />
                        <Input label={"City"} type={"text"} id={"city"} />
                        <Input label={"Year"} type={"text"} id={"year"} />
                        <div>
                            <label htmlFor="cgpa" className="inputLabel">
                                CGPA/Grade
                            </label>
                            <div className="flex flex-gap-md">
                                <input
                                    type="text"
                                    id="cgpa"
                                    className="inputInput cgpaInput"
                                    autoComplete="off"
                                />
                                <div className="cgpaYearBox flex">
                                    <select
                                        name="cgpaYear"
                                        className="cgpaYearSelect"
                                    >
                                        <option value="volvo" disabled selected>
                                            Select year(optional)
                                        </option>
                                        <option value="volvo">
                                            First year
                                        </option>
                                        <option value="saab">
                                            Second year
                                        </option>
                                        <option value="mercedes">
                                            Third year
                                        </option>
                                        <option value="audi">
                                            Fourth year
                                        </option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <TextArea
                            label={"Details"}
                            textLimit={"150"}
                            id={"educationDeatils"}
                        ></TextArea>
                        <AddPrimaryBtn text={"Add Education"} />
                    </div>
                ) : null}
            </Layout>
        </div>
    );
}
