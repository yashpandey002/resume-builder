import "../styles/root.css";
import "../styles/utility.css";
import Layout from "./Layout";
import Header from "./Header";
import Input from "./Input";

export default function Education() {
    return (
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
                <Input label={"School/College"} type={"text"} id={"school"} />
                <Input label={"City"} type={"text"} id={"city"} />
                <div>
                    <label htmlFor="cgpa" className="inputLabel">
                        CGPA/Grade
                    </label>
                    <div>
                        <input
                            type="text"
                            id="cgpa"
                            className="inputInput cgpaInput"
                            autoComplete="off"
                        />
                        <select name="cars" id="cars">
                            <option value="volvo">Volvo</option>
                            <option value="saab">Saab</option>
                            <option value="mercedes">Mercedes</option>
                            <option value="audi">Audi</option>
                        </select>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
