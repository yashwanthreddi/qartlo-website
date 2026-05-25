import { whys } from "@/data/siteData";

export default function WhyChooseSection() {
  return (
    <section className="why-section">
      <div className="why-bg why-bg-one" />
      <div className="why-bg why-bg-two" />

      <div className="why-container">
        <div className="why-header">
          

          <h2>
            Built for businesses that want to{" "}
            <span>grow faster</span>
          </h2>

          <p>
            Qartlo gives you a simple, fast, and reliable way to launch your
            online store, manage orders, and sell directly through WhatsApp.
          </p>
        </div>

        <div className="why-grid">
          {whys.map((item, index) => (
            <div className="why-card" key={item.text}>
              <div className="why-card-top">
                <div className="why-icon">{item.icon}</div>
                <div className="why-number">
                  {String(index + 1).padStart(2, "0")}
                </div>
              </div>

              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .why-section {
          position: relative;
          overflow: hidden;
          background:
            radial-gradient(circle at 12% 18%, rgba(18, 140, 126, 0.12), transparent 34%),
            radial-gradient(circle at 88% 75%, rgba(59, 130, 246, 0.1), transparent 32%),
            linear-gradient(180deg, #eef7f5 0%, #ffffff 50%, #f8fafc 100%);
          padding: 92px 0;
        }

        .why-bg {
          position: absolute;
          border-radius: 999px;
          filter: blur(80px);
          opacity: 0.32;
          pointer-events: none;
        }

        .why-bg-one {
          width: 340px;
          height: 340px;
          left: -140px;
          top: 80px;
          background: #14b8a6;
        }

        .why-bg-two {
          width: 360px;
          height: 360px;
          right: -70px;
          bottom: 80px;
          background: #60a5fa;
        }

        .why-container {
          position: relative;
          z-index: 1;
          width: 100%;
          max-width: 1180px;
          margin: 0 auto;
          padding: 0 16px;
        }

        .why-header {
          max-width: 760px;
          margin: 0 auto 48px;
          text-align: center;
        }

        .why-eyebrow {
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

        .why-eyebrow span {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #10b981;
          box-shadow: 0 0 0 6px rgba(16, 185, 129, 0.14);
        }

        .why-header h2 {
          margin: 22px 0 0;
          font-size: clamp(38px, 5vw, 62px);
          font-weight: 950;
          line-height: 1;
          letter-spacing: -0.065em;
          color: #07111f;
        }

        .why-header h2 span {
          background: linear-gradient(135deg, #128c7e, #0ea5e9);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .why-header p {
          max-width: 680px;
          margin: 22px auto 0;
          font-size: 18px;
          line-height: 1.75;
          color: #475569;
        }

        .why-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 20px;
        }

        .why-card {
          position: relative;
          min-height: 230px;
          overflow: hidden;
          border: 1px solid rgba(15, 23, 42, 0.08);
          border-radius: 30px;
          background:
            linear-gradient(180deg, rgba(255, 255, 255, 0.92), rgba(248, 250, 252, 0.92)),
            #ffffff;
          padding: 26px;
          box-shadow: 0 24px 70px rgba(15, 23, 42, 0.08);
          backdrop-filter: blur(18px);
          transition:
            transform 0.22s ease,
            box-shadow 0.22s ease,
            border-color 0.22s ease;
        }

        .why-card::before {
          content: "";
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at top right, rgba(18, 140, 126, 0.15), transparent 38%);
          opacity: 0;
          transition: opacity 0.22s ease;
          pointer-events: none;
        }

        .why-card:hover {
          transform: translateY(-6px);
          border-color: rgba(18, 140, 126, 0.22);
          box-shadow: 0 34px 90px rgba(15, 23, 42, 0.12);
        }

        .why-card:hover::before {
          opacity: 1;
        }

        .why-card-top {
          position: relative;
          z-index: 1;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
        }

        .why-icon {
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

        .why-number {
          font-size: 14px;
          font-weight: 950;
          letter-spacing: 0.12em;
          color: rgba(15, 23, 42, 0.18);
        }

        .why-card p {
          position: relative;
          z-index: 1;
          margin: 26px 0 0;
          font-size: 17px;
          font-weight: 800;
          line-height: 1.55;
          letter-spacing: -0.025em;
          color: #0f172a;
        }

        @media (max-width: 1100px) {
          .why-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 640px) {
          .why-section {
            padding: 56px 0;
          }

          .why-header {
            margin-bottom: 34px;
          }

          .why-header h2 {
            font-size: 38px;
          }

          .why-header p {
            font-size: 16px;
          }

          .why-grid {
            grid-template-columns: 1fr;
          }

          .why-card {
            min-height: auto;
            border-radius: 24px;
            padding: 24px;
          }
            @media (max-width: 640px) {
  .hero-glow-right,
  .section-glow-right,
  .glow-right,
  .legal-glow-right,
  .page-glow-right,
  .bg-glow-right {
    right: -70px !important;
    width: 180px !important;
    height: 180px !important;
  }
}

          .why-card p {
            margin-top: 22px;
            font-size: 16px;
          }
        }
      `}</style>
    </section>
  );
}