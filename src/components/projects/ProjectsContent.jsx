import "../../styles/root.css";
import "../../styles/utility.css";
import ContentLayout from "../layout/ContentLayout";
import ProjectSingle from "./ProjectSingle";

export default function ProjectsContent({ projects }) {
    return (
        <div className="projectsContentWrapper">
            <ContentLayout heading={"Projects"}>
                {projects.map((project) => (
                    <ProjectSingle
                        name={project.name}
                        descriptiveHeading={project.descriptiveHeading}
                        details={project.details}
                    />
                ))}
            </ContentLayout>
        </div>
    );
}
