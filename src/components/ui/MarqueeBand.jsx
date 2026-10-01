export default function MarqueeBand({
  items = [
    'Web Design',
    'Brand Identity',
    'Logo Design',
    'Visiting Cards',
    'Social Media',
    'Digital Ads',
  ],
}) {
  return (
    <div className="marquee-band" aria-hidden="true">
      <div className="marquee-track">
        {items.map((item, idx) => (
          <span key={`m1-${idx}`}>{item}</span>
        ))}
        {items.map((item, idx) => (
          <span key={`m2-${idx}`}>{item}</span>
        ))}
      </div>
    </div>
  );
}
