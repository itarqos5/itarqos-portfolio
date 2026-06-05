import { FiGithub, FiTwitter } from 'react-icons/fi';
import { Package, Coffee } from 'lucide-react';
import useReveal from '../../hooks/useReveal';
import './Footer.css';

const links = [
  { href: 'https://github.com/itarqos5', icon: FiGithub, label: 'GitHub' },
  { href: 'https://x.com/itarqosdev', icon: FiTwitter, label: 'X (Twitter)' },
  { href: 'https://modrinth.com/user/literal.uu', icon: Package, label: 'Modrinth' },
  { href: 'https://ko-fi.com/itarqos5', icon: Coffee, label: 'Ko-fi' },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const [footerRef, visible] = useReveal();

  return (
    <footer ref={footerRef} className={`footer reveal${visible ? ' reveal-visible' : ''}`}>
      <div className="footer-inner">
        <span className="footer-brand">Literal</span>

        <div className="footer-icons">
          {links.map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-icon-link"
              aria-label={label}
            >
              <Icon />
            </a>
          ))}
        </div>

        <span className="footer-copy">&copy; {year} Literal</span>
      </div>
    </footer>
  );
}
