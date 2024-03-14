import Image from "next/image";
import SVGPhoto from "../../public/images/about.svg";
import "../styles/About.scss";

const About = () => {
  return (
    <section id="about">
      <div className="arrow">
        <Image src={SVGPhoto} alt="arrow" width={40} height={40} />
      </div>
      <h2>about me</h2>
      <div>
        <p>
          <br />
          From the sunny Philippines, I packed my dreams in my suitcase and
          moved to Seattle in 2022, determined to carve out a niche for myself
          as an experience designer at the University of Washingtons HCDEs
          masters program. Im a product generalist - rooted in UX but with a
          history in marketing and software engineering roles. I love building
          stuff that people actually use, no matter the hat Im wearing. My dream
          role is one where Im able to sit at the intersection of design and
          engineering - whether that means research, design, or code.
          <br />
          <br />
          Beyond the pixels, Im a lifelong learner and maker at heart,
          constantly exploring new ideas and projects. This journey has taught
          me the importance of balancing business objectives and user
          satisfaction, striving for sustainability, accessibility and harmony
          in every product I work on.
        </p>
      </div>
    </section>
  );
};

export default About;
