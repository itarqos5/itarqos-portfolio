import { FiGithub, FiTwitter, FiMail } from 'react-icons/fi';
import { FaDiscord } from 'react-icons/fa';
import styles from '../../styles/Footer.module.css';

export default function Footer({ onHomeClick }) {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <a 
          href="#" 
          className={styles.logo}
          onClick={(e) => {
            e.preventDefault();
            onHomeClick && onHomeClick();
          }}
        >
          itarqos
        </a>
        
        <p className={styles.copyright}>
          Crafting digital experiences with code and creativity.
        </p>
        
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            {['home', 'about', 'skills', 'contact'].map((item) => (
              <li key={item}>
                <a 
                  href={`#${item}`} 
                  className={styles.navLink}
                  onClick={(e) => {
                    e.preventDefault();
                    onHomeClick && onHomeClick(item);
                  }}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        
        <div className={styles.socialLinks}>
          <a 
            href="https://github.com/itarqos5" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.socialLink}
            aria-label="GitHub"
          >
            <FiGithub />
          </a>
          <a 
            href="https://x.com/itarqos" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.socialLink}
            aria-label="Twitter"
          >
            <FiTwitter />
          </a>
          <a 
            href="https://discord.com/users/1184539864360816772" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.socialLink}
            aria-label="Discord"
          >
            <FaDiscord />
          </a>
          <a 
            href="mailto:itarqosdev@gmail.com"
            className={styles.socialLink}
            aria-label="Email"
          >
            <FiMail />
          </a>
        </div>
      </div>
    </footer>
  );
}
