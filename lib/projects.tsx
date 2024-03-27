import { Meta, ProjectPost } from "../types";
import { compileMDX } from "next-mdx-remote/rsc";
import rehypeAutoLinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import Video from "../app/components/Video";
import NewTsx from "../app/components/New";
import { remark } from "remark";
import { headingTree } from "./headings";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkToc from "remark-toc";
import remarkRehype from "remark-rehype";
import rehypeToc from "rehype-toc";
import { visit } from "unist-util-visit";

import { toString } from "hast-util-to-string";
import { hasProperty } from "hast-util-has-property";
import { Root } from "hast";

interface Heading {
  title: string;
  id: string;
}

interface ExtractHeadingsOptions {
  rank?: number;
  headings: Heading[];
}

function headingRank(node: any): number {
  return node.tagName ? parseInt(node.tagName.charAt(1), 10) : 0;
}

export default function rehypeExtractHeadings({
  rank = 2,
  headings,
}: ExtractHeadingsOptions) {
  return (tree: Root) => {
    visit(tree, "element", (node) => {
      if (
        headingRank(node) === rank &&
        node.properties &&
        // @ts-ignore
        hasProperty(node, "id")
      ) {
        const title = toString(node);
        const id = node.properties.id.toString();

        headings.push({ title, id });
      }
    });
  };
}

type Filetree = {
  tree: [
    {
      path: string;
    }
  ];
};

export async function getProjectByName(
  fileName: string
): Promise<ProjectPost | undefined> {
  const res = await fetch(
    `https://raw.githubusercontent.com/celinafg/p4io-md/main/${fileName}`,
    {
      headers: {
        Accept: "application/vnd.github+json",
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        "X-Github-Api-Version": "2022-11-28",
      },
    }
  );

  if (!res.ok) return undefined;
  const rawMDX = await res.text();
  if (rawMDX == "404: Not Found") return undefined;

  const headings: [] = [];

  const { frontmatter, content } = await compileMDX<{
    title: string;
    date: string;
    tags: string[];
    headings: string[];
    description: string;
    img: string;
    company?: string;
  }>({
    source: rawMDX,
    components: {
      Video,
    },
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [remarkToc],
        rehypePlugins: [
          rehypeSlug,
          [rehypeAutoLinkHeadings, { behavior: "wrap" }],
          [rehypeExtractHeadings, { rank: 2, headings }],
        ],
      },
    },
  });

  const id = fileName.replace(/\.mdx$/, "");

  const projectPostObj: ProjectPost = {
    meta: {
      id,
      title: frontmatter.title,
      date: frontmatter.date,
      tags: frontmatter.tags,
      headings: headings,
      description: frontmatter.description,
      img: frontmatter.description,
      company: frontmatter.company,
    },
    content,
  };

  return projectPostObj;
}

export async function getProjectsMeta(): Promise<Meta[] | undefined> {
  const res = await fetch(
    "https://api.github.com/repos/celinafg/p4io-md/git/trees/main?recursive=1",
    {
      headers: {
        Accept: "application/vnd.github+json",
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        "X-Github-Api-Version": "2022-11-28",
      },
    }
  );

  if (!res.ok) return undefined;

  const repoFiletree: Filetree = await res.json();

  const filesArray = repoFiletree.tree
    .map((obj) => obj.path)
    .filter((path) => path.endsWith(".mdx"));

  const projects: Meta[] = [];

  for (const file of filesArray) {
    const project = await getProjectByName(file);
    if (project) {
      const { meta } = project;
      projects.push(meta);
    }
  }

  return projects.sort((a, b) => (a.date < b.date ? 1 : -1));
}
