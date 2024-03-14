// "use client";
import {
  getprojectById,
  getAllprojects,
  getHeadings,
} from "../../../../lib/api";
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
    <main>
      <Navbar links={navLinks} backButton={true} observeSelector="h2" />
      <div className="projectpage">
        <article className="projectcontent">
          <h1>{title}</h1>
          <h4>{date}</h4>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </article>
      </div>
    </main>
  );
}
