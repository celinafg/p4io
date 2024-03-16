import { About, Hero, Projects, Navbar, Footer } from "../components";
import styles from "../styles/Home.module.scss";
import "../styles/globals.scss";

const navLinks = [
  { href: "#home", label: "home", status: "active" },
  { href: "#projects", label: "projects" },
  { href: "#about", label: "about" },
  { href: "resume.com", label: "resume", customClassName: "hide" },
];

const Home = async () => {
  return (
    <main>
      <div className={styles.home}>
        <Navbar links={navLinks} />
        <Hero />
        <Projects />
        <About />
      </div>

      <Footer />
    </main>
  );
};

export default Home;
