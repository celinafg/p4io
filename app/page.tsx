import styles from "./page.module.css";
import { DM_Sans, Encode_Sans } from "next/font/google";
import { Hero, Navbar, About, Footer, Projects } from "./components";

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

export default async function Home() {
  return (
    <div
      className={`${dmsans.variable} ${encodesans.variable} ${styles.main}`}
      style={{ padding: "1rem 4rem" }}
    >
      <Navbar links={navLinks} />
      <Hero />
      <Projects />
      <About />
      <Footer />
    </div>
  );
}
