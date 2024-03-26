import "../styles/Hero.scss";
const Hero = () => {
  return (
    <section id="home">
      <div className="hcontainer">
        <div className="hi">
          <div className="htitle">
            <span>
              <h1>research. </h1>
              <h1>design.</h1>
              <h1>build.</h1>
            </span>
          </div>
          <div className="descriptionh">
            <div className="locinfo">
              <p>BASED IN SEATTLE</p>
              <p>LINKEDIN</p>
              <p>RESUME</p>
            </div>
            <div className="centertext">
              <div>
                <p>
                  I’m a frontend engineer turned UX Designer passionate about
                  creating seamless and accessible experiences from design
                  conception to implementation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="continue">
        <p>SCROLL</p>
        <div className="line"></div>
      </div>
    </section>
  );
};

export default Hero;
