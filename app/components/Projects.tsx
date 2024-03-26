import { getProjectsMeta } from "../../lib/projects";
import ListItem from "./ListItem";

export default async function Projects() {
  const projects = await getProjectsMeta();

  if (!projects) {
    return <p>no posts avail</p>;
  }

  return (
    <section>
      <h2></h2>
      <ul>
        {projects.map((project) => (
          <ListItem key={project.id} project={project} />
        ))}
      </ul>
    </section>
  );
}
