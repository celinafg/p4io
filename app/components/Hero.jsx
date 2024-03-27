import styles from "../styles/Hero.module.scss";

const Hero = () => {
  return (
    <>
      <section id="home" className={styles.home}>
        <div className={styles.title}>
          <span>
            <h2>research.</h2>
            <h2>design.</h2>
            <h2>build.</h2>
          </span>
        </div>
        <div className={styles.info}>
          <div className={styles.loc}>
            <h6> SEATTLE</h6>
            <h6>LINKEDIN</h6>
            <h6>RESUME</h6>
          </div>
          <div className={styles.centertext}>
            <p>
              I’m a frontend engineer turned UX Designer passionate about
              creating seamless and accessible experiences from design
              conception to implementation.
            </p>
          </div>
        </div>
      </section>
      <div className={styles.continue}>
        <p>SCROLL</p>
        <div className={styles.line}></div>
      </div>
    </>
  );
};

export default Hero;
