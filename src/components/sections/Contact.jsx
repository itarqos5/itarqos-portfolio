import { FiGithub, FiTwitter, FiMail, FiCopy } from 'react-icons/fi';
import { FaDiscord } from 'react-icons/fa';
import { motion } from 'framer-motion';
import styles from '../../styles/Contact.module.css';

const Contact = () => {
  const copyEmail = () => {
    navigator.clipboard.writeText('itarqosdev@gmail.com');
  };

  return (
    <div className={styles.contactCard}>
      <h3 className={styles.title}>Let's Connect</h3>

      <div className={styles.socials}>
        <motion.a whileHover={{ y: -4 }} href="https://github.com/itarqos5" className={styles.iconBtn}><FiGithub /></motion.a>
        <motion.a whileHover={{ y: -4 }} href="#" className={styles.iconBtn}><FaDiscord /></motion.a>
        <motion.a whileHover={{ y: -4 }} href="https://x.com/itarqos" className={styles.iconBtn}><FiTwitter /></motion.a>
      </div>

      <motion.button
        whileTap={{ scale: 0.98 }}
        onClick={copyEmail}
        className={styles.emailBar}
      >
        <FiMail className={styles.mailIcon} />
        <span className={styles.emailText}>itarqosdev@gmail.com</span>
        <FiCopy className={styles.copyIcon} />
      </motion.button>
    </div>
  );
};

export default Contact;