// // lib/api.ts
// import fs from "fs";
// import matter from "gray-matter";
// import path from "path";
// import { unified } from "unified";
// import remarkGfm from "remark-gfm";
// import rehypeSlug from "rehype-slug";
// import rehypeAutolinkHeadings from "rehype-autolink-headings";
// import remarkParse from "remark-parse";
// import remarkRehype from "remark-rehype";
// import rehypeStringify from "rehype-stringify";
// import remarkToc from "remark-toc";
// import { headingTree } from "./headings";
// import { remark } from "remark";
// import remarkImages from "remark-images";
// import remarkFlexibleContainers from "remark-flexible-containers";
// import remarkHighlight from "./remarkHighlight";
// import html from "remark-html";
// import remarkDirectiveRehype from "remark-directive-rehype";
// import remarkCss from "./remarkCss";
// import remarkDirective from "remark-directive";
// import rehypeRaw from "rehype-raw";
// import rehypeFormat from "rehype-format";
// import rehypeDocument from "rehype-document";
// import rehypeComponents from "rehype-components";

// const projectsDirectory = path.join(process.cwd(), "_projects");

// function getprojectFiles() {
//   return fs.readdirSync(projectsDirectory);
// }

// function getParser() {
//   return unified()
//     .use(remarkParse)
//     .use(remarkDirective)
//     .use(remarkHighlight)
//     .use(remarkGfm)
//     .use(remarkToc)
//     .use(remarkRehype, { allowDangerousHtml: true })
//     .use(rehypeSlug)
//     .use(rehypeAutolinkHeadings, {
//       content: (arg) => ({
//         type: "element",
//         tagName: "a",
//         properties: {
//           href: `#${String(arg.properties?.id)}`,
//         },
//         children: [{ type: "text", value: "" }],
//       }),
//     })
//     .use(headingTree)
//     .use(remarkImages)
//     .use(remarkCss)
//     .use(rehypeRaw)
//     .use(rehypeStringify);
// }

// const parser = getParser();

// export async function getprojectById(id: any) {
//   const realId = id.replace(/\.mdx$/, "");
//   const fullPath = path.join(projectsDirectory, `${realId}.mdx`);
//   const { data, content } = matter(
//     await fs.promises.readFile(fullPath, "utf8")
//   );

//   const html = await parser.process(content);
//   const date = data.date;

//   const processedContent = await remark().use(headingTree).process(content);

//   return {
//     ...data,
//     title: data.title,
//     id: realId,
//     html: html.value.toString(),
//     headings: processedContent.data.headings,
//   };
// }

// export async function getPageMarkdown(string_: any) {
//   const { data, content } = matter(
//     fs.readFileSync(path.join("_pages", string_), "utf8")
//   );
//   const html = await parser.process(content);

//   return {
//     ...data,
//     html: html.value.toString(),
//   };
// }

// export async function getAllProjects() {
//   const projects = await Promise.all(
//     getprojectFiles().map((id) => getprojectById(id))
//   );
//   return projects;
// }

// export async function getHeadings(id: any) {
//   const realId = id.replace(/\.mdx$/, "");
//   const fullPath = path.join(projectsDirectory, `${realId}.mdx`);
//   const fileContents = fs.readFileSync(fullPath, "utf8");

//   const matterResult = matter(fileContents);

//   const processedContent = await remark()
//     .use(headingTree)
//     .process(matterResult.content);

//   return { headings: processedContent.data.headings };
// }
