import { motion } from 'framer-motion';
import styles from '../../styles/Hero.module.css';

export default function Hero() {
  return (
    <div className={styles.heroContainer}>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className={styles.status}
      >
        <span className={styles.dot}></span>
        Available for hire
      </motion.div>

      <h1 className={styles.title}>
        Building <span className={styles.gradientText}>Digital</span><br />
        <span className={styles.outlineText}>Experiences</span>
      </h1>

      <p className={styles.subtitle}>
        A 13-year-old fullstack developer crafting polished solutions in Java and React.
      </p>

      <div className={styles.ctaWrapper}>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={styles.mainBtn}
        >
          See Projects
        </motion.button>
        <div className={styles.avatarGroup}>
          <img src="/cat.jpeg" alt="Avatar" className={styles.avatar} />
          <div className={styles.avatarInfo}>
            <span className={styles.name}>itarqos</span>
            <span className={styles.username}>@itarqos5</span>
          </div>
        </div>
      </div>
    </div>
  );
}
