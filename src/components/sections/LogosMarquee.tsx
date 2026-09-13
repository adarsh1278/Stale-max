const items = [
  "School ERP & Portals",
  "Startup Incubator Platforms",
  "D2C E-Commerce & Retail",
  "ISO & NABL Compliance SaaS",
  "Enterprise Cloud Architecture",
  "AI & Automation Systems",
  "Payment & Billing Workflows",
];

export default function LogosMarquee() {
  const doubled = [...items, ...items];
  return (
    <div className="logos">
      <div className="logos-track">
        {doubled.map((item, i) => (
          <span key={i}>{item}</span>
        ))}
      </div>
    </div>
  );
}
