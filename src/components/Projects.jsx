import ProjectCard from "./ProjectCard";
import "../styles/Projects.scss";
import { getAllprojects } from "../../lib/api";

const Projects = async () => {
  const projects = await getAllprojects();

  return (
    <section id="projects">
      <div></div>
      <h2 className="work">recent work</h2>
      <div className="container">
        <ul>
          {projects.map((project) => {
            const { id, date, title, description, imgurl, company } = project;

            return (
              <li className="li" key={id}>
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
