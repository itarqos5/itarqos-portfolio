import {
  SiNextdotjs,
  SiReact,
  SiExpress,
  SiFlask,
  SiFastapi,
  SiDjango,
  SiPython,
  SiCplusplus,
  SiC,
  SiLinux,
  SiUbuntu,
  SiDocker,
  SiDiscord,
  SiJavascript,
} from 'react-icons/si';
import { FaJava, FaServer, FaCube, FaPython, FaPuzzlePiece, FaHammer, FaTools, FaLeaf } from 'react-icons/fa';
import './Hero.css';

const techCategories = [
  {
    title: 'Web Frameworks',
    icon: <SiReact />,
    color: '#61dafb',
    items: [
      { label: 'Next.js', icon: <SiNextdotjs /> },
      { label: 'React.js', icon: <SiReact /> },
      { label: 'Express.js', icon: <SiExpress /> },
    ],
  },
  {
    title: 'Python Backend',
    icon: <SiPython />,
    color: '#3776ab',
    items: [
      { label: 'Flask', icon: <SiFlask /> },
      { label: 'FastAPI', icon: <SiFastapi /> },
      { label: 'Django', icon: <SiDjango /> },
    ],
  },
  {
    title: 'Discord Bot Dev',
    icon: <SiDiscord />,
    color: '#5865f2',
    items: [
      { label: 'Discord.py', icon: <FaPython /> },
      { label: 'Discord.js', icon: <SiJavascript /> },
    ],
  },
  {
    title: 'Minecraft Modding',
    icon: <FaPuzzlePiece />,
    color: '#a855f7',
    items: [
      { label: 'Fabric', icon: <FaHammer /> },
      { label: 'NeoForge', icon: <FaTools /> },
      { label: 'Paper & forks', icon: <FaServer /> },
      { label: 'Spigot', icon: <FaCube /> },
      { label: 'Folia', icon: <FaLeaf /> },
    ],
  },
  {
    title: 'Systems & Languages',
    icon: <FaJava />,
    color: '#f8981d',
    items: [
      { label: 'Java', icon: <FaJava /> },
      { label: 'C++', icon: <SiCplusplus />, learning: true },
      { label: 'C', icon: <SiC />, learning: true },
    ],
  },
  {
    title: 'DevOps & Infrastructure',
    icon: <FaServer />,
    color: '#06b6d4',
    items: [
      {
        label: 'Linux Ubuntu & Debian',
        icon: (
          <span className="hero-badge-icons">
            <SiLinux />
            <SiUbuntu />
          </span>
        ),
      },
      { label: 'Docker', icon: <SiDocker /> },
      { label: 'Pterodactyl', icon: <FaServer /> },
      { label: 'Minecraft Config & Opt.', icon: <FaCube /> },
    ],
  },
];

export default function Hero() {
  return (
    <section className="hero">
      <h1 className="hero-headline">LITERAL</h1>

      <div className="hero-profile">
        <img src="/profile.png" alt="Literal" />
      </div>

      <p className="hero-bio">
        Fullstack Dev, experienced in Java Minecraft mods &amp; plugins, fullstack websites (backend &amp; frontend).
      </p>

      <div className="hero-tech">
        {techCategories.map((cat) => (
          <div key={cat.title} className="hero-tech-card">
            <div className="hero-tech-card-header">
              <span className="hero-tech-card-icon" style={{ color: cat.color }}>
                {cat.icon}
              </span>
              <h3 className="hero-tech-card-title">{cat.title}</h3>
            </div>
            <div className="hero-tech-badges">
              {cat.items.map((item) => (
                <span
                  key={item.label}
                  className={`hero-tech-badge${item.learning ? ' badge-learning' : ''}`}
                  data-tooltip={item.learning ? 'Currently learning' : undefined}
                >
                  <span className="badge-icon">{item.icon}</span>
                  <span className="badge-label">{item.label}</span>
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
