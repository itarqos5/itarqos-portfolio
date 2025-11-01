import styles from '../../styles/Hero.module.css';

export default function Hero({ onContactClick, onAboutClick }) {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.tagline}>
          Welcome to my portfolio
        </div>
        <h1 className={styles.title}>
          Hi, I'm <span className={styles.highlight}>itarqos</span>
        </h1>
        <p className={styles.subtitle}>
          I craft exceptional digital experiences with code and creativity.
        </p>
        <div className={styles.buttons}>
          <button
            onClick={onContactClick}
            className={`${styles.button} ${styles.primaryButton}`}
          >
            Get In Touch
          </button>
          <button
            onClick={onAboutClick}
            className={`${styles.button} ${styles.secondaryButton}`}
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
