import { features } from "@/data/siteData";

export default function FeaturesSection() {
  return (
    <section className="features-section" id="features">
      <div className="features-bg features-bg-one" />
      <div className="features-bg features-bg-two" />

      <div className="features-container">
        <div className="features-header">
         

          <h2>
            Everything a modern <span>online store</span> needs
          </h2>

          <p>
            From setup to selling, Qartlo gives you simple tools to launch,
            manage, and grow your WhatsApp-powered online store without any
            technical complexity.
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div className="feature-card" key={feature.title}>
              <div className="feature-card-top">
                <div className="feature-icon">{feature.icon}</div>
                <div className="feature-number">
                  {String(index + 1).padStart(2, "0")}
                </div>
              </div>

              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>

              <div className="feature-arrow">→</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .features-section {
          position: relative;
          overflow: hidden;
          background:
            radial-gradient(circle at 10% 18%, rgba(18, 140, 126, 0.11), transparent 34%),
            radial-gradient(circle at 90% 78%, rgba(59, 130, 246, 0.1), transparent 32%),
            linear-gradient(180deg, #eef7f5 0%, #ffffff 48%, #f8fafc 100%);
          padding: 92px 0;
        }

        .features-bg {
          position: absolute;
          border-radius: 999px;
          filter: blur(80px);
          opacity: 0.32;
          pointer-events: none;
        }

        .features-bg-one {
          width: 340px;
          height: 340px;
          left: -140px;
          top: 80px;
          background: #14b8a6;
        }

        .features-bg-two {
          width: 360px;
          height: 360px;
          right: -70px;
          bottom: 80px;
          background: #60a5fa;
        }

        .features-container {
          position: relative;
          z-index: 1;
          width: 100%;
          max-width: 1180px;
          margin: 0 auto;
          padding: 0 16px;
        }

        .features-header {
          max-width: 760px;
          margin: 0 auto 48px;
          text-align: center;
        }

        .features-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          border: 1px solid rgba(18, 140, 126, 0.18);
          border-radius: 999px;
          background: rgba(18, 140, 126, 0.08);
          padding: 9px 14px;
          font-size: 14px;
          font-weight: 850;
          color: #0f766e;
          box-shadow: 0 12px 28px rgba(15, 118, 110, 0.08);
        }

        .features-eyebrow span {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #10b981;
          box-shadow: 0 0 0 6px rgba(16, 185, 129, 0.14);
        }

        .features-header h2 {
          margin: 22px 0 0;
          font-size: clamp(38px, 5vw, 62px);
          font-weight: 950;
          line-height: 1;
          letter-spacing: -0.065em;
          color: #07111f;
        }

        .features-header h2 span {
          background: linear-gradient(135deg, #128c7e, #0ea5e9);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .features-header p {
          max-width: 680px;
          margin: 22px auto 0;
          font-size: 18px;
          line-height: 1.75;
          color: #475569;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 22px;
        }

        .feature-card {
          position: relative;
          min-height: 270px;
          overflow: hidden;
          border: 1px solid rgba(15, 23, 42, 0.08);
          border-radius: 30px;
          background:
            linear-gradient(180deg, rgba(255, 255, 255, 0.92), rgba(248, 250, 252, 0.92)),
            #ffffff;
          padding: 28px;
          box-shadow: 0 24px 70px rgba(15, 23, 42, 0.08);
          backdrop-filter: blur(18px);
          transition:
            transform 0.22s ease,
            box-shadow 0.22s ease,
            border-color 0.22s ease;
        }

        .feature-card::before {
          content: "";
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at top right, rgba(18, 140, 126, 0.14), transparent 36%);
          opacity: 0;
          transition: opacity 0.22s ease;
          pointer-events: none;
        }

        .feature-card:hover {
          transform: translateY(-6px);
          border-color: rgba(18, 140, 126, 0.22);
          box-shadow: 0 34px 90px rgba(15, 23, 42, 0.12);
        }

        .feature-card:hover::before {
          opacity: 1;
        }

        .feature-card-top {
          position: relative;
          z-index: 1;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 18px;
        }

        .feature-icon {
          display: flex;
          width: 58px;
          height: 58px;
          align-items: center;
          justify-content: center;
          border-radius: 20px;
          background: rgba(18, 140, 126, 0.1);
          color: #0f766e;
          font-size: 28px;
          font-weight: 950;
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.72);
        }

        .feature-number {
          font-size: 14px;
          font-weight: 950;
          letter-spacing: 0.12em;
          color: rgba(15, 23, 42, 0.18);
        }

        .feature-card h3 {
          position: relative;
          z-index: 1;
          margin: 26px 0 0;
          font-size: 23px;
          font-weight: 950;
          line-height: 1.15;
          letter-spacing: -0.04em;
          color: #0f172a;
        }

        .feature-card p {
          position: relative;
          z-index: 1;
          margin: 14px 0 0;
          font-size: 15.5px;
          line-height: 1.75;
          color: #475569;
        }

        .feature-arrow {
          position: absolute;
          right: 24px;
          bottom: 22px;
          display: flex;
          width: 38px;
          height: 38px;
          align-items: center;
          justify-content: center;
          border-radius: 999px;
          background: rgba(18, 140, 126, 0.1);
          color: #0f766e;
          font-size: 20px;
          font-weight: 950;
          opacity: 0;
          transform: translateX(-8px);
          transition:
            opacity 0.22s ease,
            transform 0.22s ease,
            background 0.22s ease;
        }

        .feature-card:hover .feature-arrow {
          opacity: 1;
          transform: translateX(0);
          background: #128c7e;
          color: #ffffff;
        }

        @media (max-width: 980px) {
          .features-section {
            padding: 72px 0;
          }

          .features-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 640px) {
          .features-section {
            padding: 56px 0;
          }

          .features-header {
            margin-bottom: 34px;
          }

          .features-header h2 {
            font-size: 38px;
          }

          .features-header p {
            font-size: 16px;
          }

          .features-grid {
            grid-template-columns: 1fr;
          }

          .feature-card {
            min-height: auto;
            border-radius: 24px;
            padding: 24px;
          }

          
          .feature-arrow {
            opacity: 1;
            transform: none;
          }
        }
      `}</style>
    </section>
  );
}