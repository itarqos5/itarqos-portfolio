import { FaJava, FaJs, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiTailwindcss, SiTypescript } from 'react-icons/si';
import styles from '../../styles/Skills.module.css';

const Skills = () => {
  const tech = [
    { name: 'Java', icon: <FaJava />, color: '#f8981d' },
    { name: 'JS', icon: <FaJs />, color: '#f7df1e' },
    { name: 'React', icon: <FaReact />, color: '#61dafb' },
    { name: 'TS', icon: <SiTypescript />, color: '#3178c6' },
  ];

  return (
    <div className={styles.skillsCard}>
      <h3 className={styles.title}>Tech Stack</h3>
      <div className={styles.grid}>
        {tech.map((item, i) => (
          <div key={i} className={styles.skillIcon}>
            <span style={{ color: item.color }}>{item.icon}</span>
            <span className={styles.skillName}>{item.name}</span>
          </div>
        ))}
      </div>
      <div className={styles.footer}>
        <div className={styles.bar}>
          <div className={styles.progress} style={{ width: '90%' }}></div>
        </div>
        <span className={styles.label}>General Proficiency</span>
      </div>
    </div>
  );
};

export default Skills;