import './Hero.css';

const techCategories = [
  {
    label: 'Web Frameworks',
    badges: ['Next.js', 'React.js', 'Express.js'],
  },
  {
    label: 'Python Backend',
    badges: ['Flask', 'FastAPI', 'Django'],
  },
  {
    label: 'Systems & Languages',
    badges: [
      { name: 'Java', learning: false },
      { name: 'C++ (learning)', learning: true },
      { name: 'C (learning)', learning: true },
    ],
  },
  {
    label: 'DevOps & Infrastructure',
    badges: [
      'Linux Ubuntu & Debian',
      'Docker',
      'Pterodactyl',
      'Minecraft Config & Optimization',
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
          <div key={cat.label} className="hero-tech-category">
            <span className="hero-tech-label">{cat.label}</span>
            <div className="hero-tech-badges">
              {cat.badges.map((badge) => {
                const isObj = typeof badge === 'object';
                const name = isObj ? badge.name : badge;
                const isLearning = isObj ? badge.learning : false;
                return (
                  <span
                    key={name}
                    className={`hero-tech-badge${isLearning ? ' learning' : ''}`}
                  >
                    {name}
                  </span>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
