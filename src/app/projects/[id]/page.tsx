import { getprojectById, getAllProjects } from "../../../../lib/api";
import { Navbar } from "@/components";
import "../../../styles/ProjectPage.scss";

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
    <div className="container">
      <main className="eh mx-auto px-3 py-4 md:px-0">
        <div>
          <Navbar links={navLinks} backButton={true} observeSelector="h2" />

          <article
            className="prose prose-lg xl:prose-kl articleprose"
            style={{ margin: "auto", padding: "auto" }}
          >
            <h1>{title}</h1>
            <div dangerouslySetInnerHTML={{ __html: html }} id="htmlContent" />
          </article>
        </div>
      </main>
    </div>
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
