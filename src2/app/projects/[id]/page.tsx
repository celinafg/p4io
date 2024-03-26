// import fs from "fs";
// import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
// import { serialize } from "next-mdx-remote/serialize";
// import { MDXRemote } from "next-mdx-remote/rsc";
// import Head from "next/head";
// import HeroImage from "@/components/mdx/HeroImage";
// import React from "react";

// export default function PostPage({ source }: any) {
//   return (
//     <div>
//       <Head>
//         <title>{source.frontmatter.title as string}</title>
//       </Head>
//       <MDXRemote
//         {...source}
//         // specifying the custom MDX components
//         components={{
//           HeroImage,
//         }}
//       />
//     </div>
//   );
// }
// export async function getStaticPaths() {
//   return { paths: [], fallback: "blocking" };
// }
