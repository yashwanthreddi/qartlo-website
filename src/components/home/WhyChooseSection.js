import { whys } from "@/data/siteData";

export default function WhyChooseSection() {
  return (
    <section className="section why-band">
      <div className="container">
        <div className="section-header">
          <div className="eyebrow">Why Choose Qartlo</div>

          <h2 className="section-title">
            Built for businesses that want to grow faster
          </h2>
        </div>

        <div className="why-grid">
          {whys.map((item) => (
            <div className="why-card" key={item.text}>
              <span className="icon">{item.icon}</span>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}