import ProjectCard from "./ProjectCard";
import "../styles/Projects.scss";
import { getAllProjects } from "../../lib/api";

const Projects = async () => {
  const projects = await getAllProjects();

  return (
    <section id="projects">
      <h2 className="work">recent work</h2>
      <div className="container">
        <ul className="grid-container">
          {projects.map((project) => {
            const { id, date, title, description, imgurl, company } = project;

            return (
              <li className="li grid-item" key={id}>
                <ProjectCard
                  key={id}
                  title={title}
                  description={description}
                  image={imgurl}
                  comp={company}
                  link={`/projects/${id}`}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Projects;
