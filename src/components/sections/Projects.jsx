import { FiExternalLink } from 'react-icons/fi';
import styles from '../../styles/Projects.module.css';

const projects = [
  {
    name: 'Inforge',
    description:
      'A futuristic billing dashboard sold to hosting owners as a replacement for WHMCS.',
    stack: ['React.js', 'Next.js', 'Express.js'],
    url: 'https://inforge.itarqos.xyz',
  },
];

export default function Projects() {
  return (
    <div className={styles.projectsCard}>
      <div className={styles.header}>
        <h3 className={styles.title}>Projects</h3>
        <p className={styles.subtitle}>Selected work and products</p>
      </div>

      <div className={styles.projectList}>
        {projects.map((project) => (
          <article key={project.name} className={styles.projectItem}>
            <div className={styles.projectTop}>
              <h4 className={styles.projectName}>{project.name}</h4>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.projectLink}
                aria-label={`Open ${project.name}`}
              >
                Visit <FiExternalLink />
              </a>
            </div>

            <p className={styles.projectDescription}>{project.description}</p>

            <div className={styles.stackWrap}>
              <span className={styles.stackLabel}>Stack</span>
              <ul className={styles.stackList}>
                {project.stack.map((tech) => (
                  <li key={tech} className={styles.stackTag}>
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
