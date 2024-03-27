import styles from "../styles/Footer.module.scss";

const Footer = () => {
  return (
    <section id="footer" className={styles.footer}>
      <div className={styles.contact}>
        <div>
          <h4>contact</h4>
          <p>cbtfg@uw.edu</p>
          <p>linkedin</p>
          <p>resume</p>
        </div>
        <div>
          <h4>menu</h4>
          <p>home</p>
          <p>work</p>
          <p>experiments</p>
        </div>
      </div>
      <div className={styles.copyright}>
        <p>© 2024 Celina Garcia</p>
      </div>
    </section>
  );
};

export default Footer;
