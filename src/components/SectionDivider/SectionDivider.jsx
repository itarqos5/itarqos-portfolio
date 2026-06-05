import './SectionDivider.css';

export default function SectionDivider() {
  return (
    <div className="section-divider" aria-hidden="true">
      <span className="divider-line" />
      <span className="divider-diamond" />
      <span className="divider-line" />
    </div>
  );
}
