import { About, Hero, Projects, Navbar, Footer } from "../components";
import "../styles/Home.scss";

const navLinks = [
  { href: "#home", label: "home", status: "active" },
  { href: "#projects", label: "projects" },
  { href: "#about", label: "about" },
  { href: "resume.com", label: "resume", customClassName: "hide" },
];

const Home = async () => {
  return (
    <main>
      <Navbar links={navLinks} />
      <Hero />
      <Projects />
      <About />
      <Footer />
    </main>
  );
};

export default Home;
