import React from "react";
import { getProjectsMeta, getProjectByName } from "../../../lib/projects";
import { notFound } from "next/navigation";
import getFormattedDate from "../../../lib/getFormattedDate";
import Link from "next/link";
import "highlight.js/styles/github-dark.css";
import Navbar from "../../components/Navbar";

export const revalidate = 86400;

type Props = {
  params: {
    projectId: string;
  };
};

export async function generateStaticParams() {
  const projects = await getProjectsMeta();

  if (!projects) return [];

  return projects.map((project) => ({
    projectId: project.id,
  }));
}

export async function generateMetadata({ params: { projectId } }: Props) {
  const project = await getProjectByName(`${projectId}.mdx`);

  if (!project) {
    return {
      title: "Project not found",
    };
  }
  return {
    title: project.meta.title,
  };
}

interface Link {
  href: string;
  label: string;
  status?: string;
}

interface Node {
  title: string;
  id: string;
}

interface NavLink {
  href: string;
  label: string;
  status?: string;
  customClassName?: string;
}

export default async function Project({ params: { projectId } }: Props) {
  const project = await getProjectByName(`${projectId}.mdx`);
  if (!project) notFound();

  const { meta, content } = project;

  const pubDate = getFormattedDate(meta.date);

  function parseNodes(nodes: any[] | undefined): any[] {
    if (!nodes) return [];
    return nodes.map((node, index) => ({
      href: `#${node.id}`,
      label: node.title,
      ...(index === 0 ? { status: "active" } : {}),
    }));
  }
  const navLinks = parseNodes(meta.headings);

  return (
    <>
      <Navbar links={navLinks} backButton={true} observeSelector="h2" />{" "}
      <h2>{meta.title}</h2>
      <p>{pubDate}</p>
      <article>{content}</article>
      <section>
        <h3>Related:</h3>
      </section>
      <p>
        <Link href={"/"}>Back home</Link>
      </p>
    </>
  );
}
