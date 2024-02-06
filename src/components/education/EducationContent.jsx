import { v4 as uuidv4 } from "uuid";
import "../../styles/root.css";
import "../../styles/utility.css";
import "./Education.css";
import ContentLayout from "../layout/ContentLayout";
import EducationSingle from "./EducationSingle";

export default function EducationContent({ education }) {
    return (
        <div className="educationContentWrapper">
            <ContentLayout heading={"Education"}>
                {education.map((educationSingle) => (
                    <EducationSingle
                        degree={educationSingle.degree}
                        school={educationSingle.school}
                        city={educationSingle.city}
                        year={educationSingle.year}
                        cgpa={educationSingle.cgpa}
                        cgpaYear={educationSingle.cgpaYear}
                        details={educationSingle.details}
                    />
                ))}
            </ContentLayout>
        </div>
    );
}
