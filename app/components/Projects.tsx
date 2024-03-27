import { getProjectsMeta } from "../../lib/projects";
import ListItem from "./ListItem";
import "../styles/Projects.module.scss";

export default async function Projects() {
  const projects = await getProjectsMeta();

  if (!projects) {
    return <p>no posts avail</p>;
  }
  return (
    <section id="projects">
      <h2>recent work</h2>
      <ul className="grid-container">
        {projects.map((project) => {
          return <ListItem key={project.id} project={project} />;
        })}
      </ul>
    </section>
  );
}
