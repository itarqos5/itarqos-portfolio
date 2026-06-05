import { ExternalLink } from 'lucide-react';
import useReveal from '../../hooks/useReveal';
import './Experience.css';

const servers = [
  {
    name: 'DashCordPum4',
    invite: 'https://discord.gg/4KSb3vYDxh',
    icon: 'https://cdn.discordapp.com/icons/740041386513924147/9e868a0a4a23712cf8bbe7334fdf8578.webp?size=1024',
    role: 'Developer',
  },
  {
    name: 'Tiers SMP',
    invite: 'https://discord.gg/bfTctuHCb2',
    icon: 'https://cdn.discordapp.com/icons/1489765869679673394/03350f3910e13c5545eda94df9db3a5f.webp?size=1024',
    role: 'Developer',
  },
  {
    name: 'Purpify.host',
    invite: 'https://purpify.host',
    icon: 'https://cdn.discordapp.com/icons/1368671101579690018/6a8334d3df5e9e176371e153ec9d7a12.webp?size=1024',
    role: 'Ex Co-founder',
  },
];

export default function Experience() {
  const [sectionRef, visible] = useReveal();

  return (
    <section ref={sectionRef} className={`experience reveal${visible ? ' reveal-visible' : ''}`}>
      <h2 className="experience-title">Experience</h2>

      <div className="experience-grid">
        {servers.map((server) => (
          <article key={server.name} className="experience-card">
            <img
              src={server.icon}
              alt={server.name}
              className="experience-card-icon"
              loading="lazy"
            />
            <h3 className="experience-card-name">{server.name}</h3>
            <span className="experience-card-role">{server.role}</span>
            <a
              href={server.invite}
              target="_blank"
              rel="noopener noreferrer"
              className="experience-card-link"
            >
              {server.invite.includes('discord') ? 'Join Discord' : 'Visit Site'}
              <ExternalLink />
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
