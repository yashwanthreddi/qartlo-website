import { features } from "@/data/siteData";

export default function FeaturesSection() {
  return (
    <section className="section section-soft" id="features">
      <div className="container">
        <div className="section-header">
          <div className="eyebrow">Platform Features</div>

          <h2 className="section-title">Everything a modern store needs</h2>

          <p className="section-sub">
            From setup to selling, Qartlo gives you the tools to manage your
            store smoothly and grow your business online.
          </p>
        </div>

        <div className="feature-grid">
          {features.map((feature) => (
            <div className="feature-card" key={feature.title}>
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}