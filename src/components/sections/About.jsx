import styles from '../../styles/About.module.css';

export default function About() {
  return (
    <div className={styles.aboutCard}>
      <div className={styles.header}>
        <h3 className={styles.cardTitle}>Background</h3>
        <span className={styles.badge}>Hobbyist</span>
      </div>

      <p className={styles.text}>
        Passionate about crafting pixel-perfect interfaces and robust Minecraft plugins.
        Focusing on <span className={styles.highlight}>smooth interactions</span> and
        <span className={styles.highlight}>performant code</span>.
      </p>

      <div className={styles.stats}>
        <div className={styles.statItem}>
          <span className={styles.statValue}>13</span>
          <span className={styles.statLabel}>Years Old</span>
        </div>
        <div className={styles.statLine}></div>
        <div className={styles.statItem}>
          <span className={styles.statValue}>Java</span>
          <span className={styles.statLabel}>Expert</span>
        </div>
        <div className={styles.statLine}></div>
        <div className={styles.statItem}>
          <span className={styles.statValue}>React</span>
          <span className={styles.statLabel}>Modern UI</span>
        </div>
      </div>
    </div>
  );
}
