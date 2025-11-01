import styles from '../../styles/About.module.css';

export default function About() {
  const skills = [
    'JavaScript', 'TypeScript', 'React', 'Node.js',
    'Minecraft Plugins', 'Java', 'HTML/CSS', 'Git',
    'Responsive Design', 'UI/UX', 'API Development', 'Problem Solving'
  ];

  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.imageContainer}>
            <img 
              src="/cat.jpeg" 
              alt="itarqos" 
              className={styles.image}
            />
          </div>
          
          <div className={styles.text}>
            <h2 className={styles.title}>About Me</h2>
            
            <p className={styles.description}>
              Hey there! I'm itarqos, you can call me itar.
              I'm a passionate web developer (Fullstack) and minecraft plugin developer.
              I'm pretty good with particles too!
            </p>
            
            <p className={styles.description}>
              With experience in both frontend and backend development, 
              I like taking on projects that push me to learn new things. My focus is on creating software that works smoothly and feels great to use.
            </p>
            
            <div className={styles.skills}>
              {skills.map((skill, index) => (
                <span key={index} className={styles.skill}>
                  {skill}
                </span>
              ))}
            </div>
            
            <div className={styles.infoGrid}>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Name:</span>
                <span className={styles.infoValue}>itarqos</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Email:</span>
                <a href="mailto:itarqosdev@gmail.com" className={styles.infoLink}>
                  itarqosdev@gmail.com
                </a>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Age:</span>
                <span className={styles.infoValue}>13</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Discord:</span>
                <span className={styles.infoValue}>itarqos5</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
