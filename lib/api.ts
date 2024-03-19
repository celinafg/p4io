// lib/api.ts
import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { unified } from "unified";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import remarkToc from "remark-toc";
import { headingTree } from "./headings";
import { remark } from "remark";
import remarkImages from "remark-images";

import project from "@/app/projects/[id]/page";

// import rehypePrettyCode from "rehype-pretty-code";

interface Heading {
  depth: number;
  value: string;
  slug: string;
}

const projectsDirectory = path.join(process.cwd(), "_projects");

function getprojectFiles() {
  return fs.readdirSync(projectsDirectory);
}

function getParser() {
  return (
    unified()
      .use(remarkParse)
      .use(remarkRehype)
      .use(remarkGfm)
      // .use(rehypePrettyCode, {
      //   theme: "one-dark-pro",
      // })
      .use(rehypeStringify)
      .use(rehypeStringify)
      .use(rehypeSlug)
      .use(rehypeAutolinkHeadings, {
        content: (arg) => ({
          type: "element",
          tagName: "a",
          properties: {
            href: `#${String(arg.properties?.id)}`,
            // style: "margin-right: 10px",
          },
          children: [{ type: "text", value: "" }],
        }),
      })
      .use(headingTree)
      .use(remarkImages)
  );
}

const parser = getParser();

export async function getprojectById(id: any) {
  const realId = id.replace(/\.md$/, "");
  const fullPath = path.join(projectsDirectory, `${realId}.md`);
  const { data, content } = matter(
    await fs.promises.readFile(fullPath, "utf8")
  );

  const html = await parser.process(content);
  const date = data.date;

  const processedContent = await remark().use(headingTree).process(content);

  return {
    ...data,
    title: data.title,
    id: realId,
    date: `${date.toISOString().slice(0, 10)}`,
    html: html.value.toString(),
    headings: processedContent.data.headings,
  };
}

export async function getPageMarkdown(string_: any) {
  const { data, content } = matter(
    fs.readFileSync(path.join("_pages", string_), "utf8")
  );
  const html = await parser.process(content);

  return {
    ...data,
    html: html.value.toString(),
  };
}

export async function getAllProjects() {
  const projects = await Promise.all(
    getprojectFiles().map((id) => getprojectById(id))
  );
  return projects.sort((project1, project2) =>
    project1.date > project2.date ? -1 : 1
  );
}

export async function getHeadings(id: any) {
  const realId = id.replace(/\.md$/, "");
  const fullPath = path.join(projectsDirectory, `${realId}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(headingTree)
    .process(matterResult.content);

  return { headings: processedContent.data.headings };
}
