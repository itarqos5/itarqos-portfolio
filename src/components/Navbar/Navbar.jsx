import { useState, useCallback, useEffect } from 'react';
import { FiGithub, FiTwitter } from 'react-icons/fi';
import { Package, Coffee, Menu, X } from 'lucide-react';
import useReveal from '../../hooks/useReveal';
import './Navbar.css';

const links = [
  { href: 'https://github.com/itarqos5', icon: FiGithub, label: 'GitHub' },
  { href: 'https://x.com/itarqosdev', icon: FiTwitter, label: 'X (Twitter)' },
  { href: 'https://modrinth.com/user/literal.uu', icon: Package, label: 'Modrinth' },
  { href: 'https://ko-fi.com/itarqos5', icon: Coffee, label: 'Ko-fi' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [navRef, visible] = useReveal();

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <>
      <nav ref={navRef} className={`navbar reveal${visible ? ' reveal-visible' : ''}`}>
        <div className="navbar-inner">
          <button
            className="navbar-hamburger"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu />
          </button>

          <span className="navbar-brand">Literal</span>

          <div className="navbar-links desktop-only">
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

          <div className="navbar-spacer" />
        </div>
      </nav>

      <div
        className={`navbar-overlay${menuOpen ? ' overlay-active' : ''}`}
        onClick={closeMenu}
      />

      <aside className={`navbar-sidebar${menuOpen ? ' sidebar-active' : ''}`}>
        <div className="sidebar-header">
          <span className="navbar-brand">Literal</span>
          <button
            className="sidebar-close"
            onClick={closeMenu}
            aria-label="Close menu"
          >
            <X />
          </button>
        </div>

        <div className="sidebar-links">
          {links.map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="sidebar-link"
              onClick={closeMenu}
            >
              <Icon className="sidebar-link-icon" />
              <span>{label}</span>
            </a>
          ))}
        </div>
      </aside>
    </>
  );
}
