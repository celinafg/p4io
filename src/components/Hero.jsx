import "../styles/Hero.scss";
const Hero = () => {
  return (
    <section id="home">
      <div>
        <div className="title">
          <span>
            <h1>research. </h1>
            <h1>design.</h1>
            <h1>build.</h1>
          </span>
        </div>
        <div>
          <div className="centertext">
            <div className="locinfo">
              <p>BASED IN SEATTLE</p>
              <p>LINKEDIN</p>
              <p>RESUME</p>
            </div>
            <div>
              <p>
                I’m a frontend engineer turned UX Designer passionate about
                creating seamless and accessible experiences from design
                conception to implementation.
              </p>
            </div>
          </div>
          <div className="continue">
            <p>SCROLL</p>
            <div className="line"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
