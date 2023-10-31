import "../../styles/root.css";
import "../../styles/utility.css";
import "./Education.css";
import Layout from "../layout/Layout";
import Header from "../header/Header";
import Input from "../input/Input";
import TextArea from "../textarea/TextArea";
import AddPrimaryBtn from "../buttons/AddPrimaryBtn";

export default function Education() {
    return (
        <div className="educationWrapper">
            <Layout>
                <div className="personalInfo__header">
                    <Header
                        contentIconSrc={".././education-icon.svg"}
                        heading={"Education"}
                        downIconSrc={".././down-icon.svg"}
                    />
                </div>
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
                            <div className="cgpaYearsBox flex">
                                <select
                                    name="cgpaYears"
                                    className="cgpaYearSelect"
                                >
                                    <option value="volvo" selected disabled>
                                        Select year(optional)
                                    </option>
                                    <option value="volvo">First year</option>
                                    <option value="saab">Second year</option>
                                    <option value="mercedes">Third year</option>
                                    <option value="audi">Fourth year</option>
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
            </Layout>
        </div>
    );
}
