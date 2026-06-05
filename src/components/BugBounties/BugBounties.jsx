import { Shield } from 'lucide-react';
import useReveal from '../../hooks/useReveal';
import './BugBounties.css';

export default function BugBounties() {
  const [sectionRef, visible] = useReveal();

  return (
    <section ref={sectionRef} className={`bounties reveal${visible ? ' reveal-visible' : ''}`}>
      <div className="bounties-card">
        <div className="bounties-icon">
          <Shield />
        </div>
        <div className="bounties-content">
          <span className="bounties-label">Security Research</span>
          <p className="bounties-text">
            Reported <em>2 high-severity vulnerabilities</em> to Vercel&rsquo;s Next.js Program.
          </p>
        </div>
      </div>
    </section>
  );
}
