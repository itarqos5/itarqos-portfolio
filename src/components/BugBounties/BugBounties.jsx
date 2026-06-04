import { Shield } from 'lucide-react';
import './BugBounties.css';

export default function BugBounties() {
  return (
    <section className="bounties">
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
