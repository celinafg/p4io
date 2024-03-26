import styles from "../styles/Hero.module.scss";

const Hero = () => {
  return (
    <section id="home" className={styles.home}>
      <div className={styles.title}>
        <span>
          <h1>research. </h1>
          <h1>design.</h1>
          <h1>build.</h1>
        </span>
      </div>
      <div className={styles.info}>
        <div className={styles.loc}>
          <p>BASED IN SEATTLE</p>
          <p>LINKEDIN</p>
          <p>RESUME</p>
        </div>
        <div className={styles.centertext}>
          <p>
            I’m a frontend engineer turned UX Designer passionate about creating
            seamless and accessible experiences from design conception to
            implementation.
          </p>
        </div>
      </div>
      <div className="continue">
        <p>SCROLL</p>
        <div className="line"></div>
      </div>
      {/* <div className="hcontainer">
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
      </div> */}
    </section>
  );
};

export default Hero;
