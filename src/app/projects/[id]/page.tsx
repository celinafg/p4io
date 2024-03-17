import { getprojectById, getAllProjects } from "../../../../lib/api";
import { Navbar } from "@/components";

interface Node {
  data: {
    hProperties: {
      id: string;
    };
  };
  value: string;
}

interface Link {
  href: string;
  label: string;
  status?: string;
}

function parseNodes(nodes: Node[]) {
  const nlinks: Link[] = [];
  nodes.map((node: any, index: number) => {
    const href = `#${node.data.hProperties.id}`;
    const label = node.value;
    const links: Link = {
      href: href,
      label: label,
    };

    if (index === 0) {
      links["status"] = "active";
    }

    nlinks.push(links);
  });

  return nlinks;
}

export default async function project({
  params: { id },
}: {
  params: { id: string };
}) {
  const { html, title, date, headings } = await getprojectById(id);
  const navLinks = parseNodes(headings as Node[]);

  return (
    <main style={{ margin: "auto", padding: "auto" }}>
      <div>
        <Navbar links={navLinks} backButton={true} observeSelector="h2" />

        <article
          className="prose prose-slate"
          style={{ margin: "auto", padding: "auto" }}
        >
          <h1>{title}</h1>
          <h4>{date}</h4>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </article>
      </div>
    </main>
  );
}

export async function generateStaticParams() {
  const projects = await getAllProjects();

  return projects.map((project) => ({
    id: project.id,
  }));
}

export async function generateMetadata({
  params: { id },
}: {
  params: { id: string };
}) {
  const { title } = await getprojectById(id);
  return {
    title,
  };
}
