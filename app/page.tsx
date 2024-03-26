import styles from "./page.module.css";
import Link from "next/link";
import { DM_Sans, Encode_Sans } from "next/font/google";
import Projects from "./components/Projects";
import MyProfilePic from "./components/MyProfilePic";
import { Hero } from "./components";
import { getProjectsMeta, getProjectByName } from "../lib/projects";

const dmsans = DM_Sans({ subsets: ["latin"], variable: "--font-dmsans" });
const encodesans = Encode_Sans({
  subsets: ["latin"],
  variable: "--font-encodesans",
});
const navLinks = [
  { href: "#home", label: "home", status: "active" },
  { href: "#projects", label: "projects" },
  { href: "#about", label: "about" },
  { href: "resume.com", label: "resume", customClassName: "hide" },
];

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

export default async function Home({ params: { projectId } }: Props) {
  const project = await getProjectsMeta();
  console.log(project);
  return (
    <div className={`${dmsans.variable} ${encodesans.variable} ${styles.main}`}>
      <Hero />
      <Projects />
    </div>
  );
}
