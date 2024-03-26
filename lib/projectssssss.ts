// type FileTree = {
//   tree: [
//     {
//       path: string;
//     }
//   ];
// };

// export async function getPostsByName(
//   filename: string
// ): Promise<BlogPost | undefined> {}

// export async function getProjectsMeta(): Promise<Meta[] | undefined> {
//   const res = await fetch(
//     "https://api.github.com/repos/celinafg/p4io-md/git/trees/main?recursive=1",
//     {
//       headers: {
//         Accept: "application/vnd.github+json",
//         Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
//         "X-Github-Api-Version": "2022-11-28",
//       },
//     }
//   );

//   if (!res.ok) return undefined;

//   const repoFileTree: FileTree = await res.json();

//   const filesArray = repoFileTree.tree
//     .map((obj) => obj.path)
//     .filter((path) => path.endsWith(".mdx"));

//   for (const file of filesArray) {
//     const post = await getProjectByName(file);
//     if (post) {
//       const { meta } = postposts.push(meta);
//     }
//   }
// }
