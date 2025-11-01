import { useEffect, useRef } from 'react';
import { FiCode, FiUsers, FiLayers, FiCpu, FiDatabase, FiGitBranch } from 'react-icons/fi';
import { FaJava, FaJs, FaReact, FaNodeJs } from 'react-icons/fa';
import { FiPlusCircle } from 'react-icons/fi';
import styles from '../../styles/Skills.module.css';

const Skills = () => {
  const skillBarsRef = useRef([]);

  useEffect(() => {
    // Animate skill bars on scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const skillBar = entry.target.querySelector(`.${styles.skillLevelBar}`);
            if (skillBar) {
              skillBar.style.width = skillBar.getAttribute('data-level');
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    if (skillBarsRef.current) {
      skillBarsRef.current.forEach(el => {
        if (el) observer.observe(el);
      });
    }

    return () => {
      if (skillBarsRef.current) {
        skillBarsRef.current.forEach(el => {
          if (el) observer.unobserve(el);
        });
      }
    };
  }, []);

  const technicalSkills = [
    { name: 'Java', level: 95, icon: <FaJava /> },
    { name: 'JavaScript', level: 85, icon: <FaJs /> },
    { name: 'React', level: 80, icon: <FaReact /> },
    { name: 'Node.js', level: 75, icon: <FaNodeJs /> },
    { name: 'Minecraft Plugins', level: 100, icon: <FiPlusCircle /> },
    { name: 'Git', level: 75, icon: <FiGitBranch /> },
    { name: 'Database', level: 85, icon: <FiDatabase />},
  ];

  const professionalSkills = [
    { 
      name: 'Problem Solving', 
      description: 'Analyzing complex problems and developing effective solutions',
      icon: <FiCode />
    },
    { 
      name: 'Teamwork', 
      description: 'Collaborating effectively with team members to achieve common goals',
      icon: <FiUsers />
    },
    { 
      name: 'Creativity', 
      description: 'Thinking outside the box to create innovative solutions',
      icon: <FiLayers />
    },
    { 
      name: 'Technical Knowledge', 
      description: 'Strong understanding of software development principles',
      icon: <FiCpu />
    },
    { 
      name: 'Data Management', 
      description: 'Efficiently handling and organizing data',
      icon: <FiDatabase />
    },
    { 
      name: 'Version Control', 
      description: 'Managing code changes and collaboration with Git',
      icon: <FiGitBranch />
    },
  ];

  const addToRefs = (el) => {
    if (el && !skillBarsRef.current.includes(el)) {
      skillBarsRef.current.push(el);
    }
  };

  return (
    <section id="skills" className={styles.skillsSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>My Skills</h2>
          <p className={styles.subtitle}>
            Here are the technical and professional skills I've developed throughout my journey as a developer.
          </p>
        </div>
        
        <div className={styles.skillsGrid}>
          {/* Technical Skills */}
          <div className={styles.skillCategory} ref={addToRefs}>
            <div className={styles.categoryHeader}>
              <div className={styles.categoryIcon}>
                <FiCode />
              </div>
              <h3 className={styles.categoryTitle}>Technical Skills</h3>
            </div>
            <div className={styles.skillsList}>
              {technicalSkills.map((skill, index) => (
                <div key={index} className={styles.skillItem}>
                  <div className={styles.skillInfo}>
                    <span className={styles.skillIcon}>{skill.icon}</span>
                    <span className={styles.skillName}>{skill.name}</span>
                  </div>
                  <div className={styles.skillLevel}>
                    <div 
                      className={styles.skillLevelBar}
                      data-level={`${skill.level}%`}
                      style={{ width: '0%' }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Professional Skills */}
          <div className={styles.skillCategory}>
            <div className={styles.categoryHeader}>
              <div className={styles.categoryIcon} style={{ background: 'linear-gradient(135deg, #8b5cf6, #ec4899)' }}>
                <FiUsers />
              </div>
              <h3 className={styles.categoryTitle}>Professional Skills</h3>
            </div>
            <div className={styles.skillsList}>
              {professionalSkills.map((skill, index) => (
                <div key={index} className={styles.skillItem}>
                  <div className={styles.skillInfo}>
                    <span className={styles.skillIcon}>{skill.icon}</span>
                    <div>
                      <div className={styles.skillName}>{skill.name}</div>
                      <div className={styles.skillDescription}>
                        {skill.description}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
