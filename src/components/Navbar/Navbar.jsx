import { FiGithub, FiTwitter } from 'react-icons/fi';
import { Package, Coffee } from 'lucide-react';
import './Navbar.css';

const links = [
  { href: 'https://github.com/itarqos5', icon: FiGithub, label: 'GitHub' },
  { href: 'https://x.com/itarqosdev', icon: FiTwitter, label: 'X (Twitter)' },
  { href: 'https://modrinth.com/user/literal.uu', icon: Package, label: 'Modrinth' },
  { href: 'https://ko-fi.com/itarqos5', icon: Coffee, label: 'Ko-fi' },
];

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <span className="navbar-brand">Literal</span>

        <div className="navbar-links">
          {links.map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="navbar-icon-link"
              aria-label={label}
            >
              <Icon />
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
