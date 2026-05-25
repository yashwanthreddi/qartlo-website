export default function AboutSection() {
  return (
    <section className="about-section">
      <div className="about-bg about-bg-one" />
      <div className="about-bg about-bg-two" />

      <div className="about-container">
        <div className="about-header">
          
          <h2>
            Your Complete Online Store in{" "}
            <span className="about-accent">5 Minutes </span> with ease
          </h2>

          
        </div>

        <div className="about-grid">
          <div className="about-main-card">
            <div className="about-logo-mark">Q</div>

            <h3>The fastest way to start selling online</h3>

            <p>
              Qartlo helps small businesses, local stores, and growing brands
              create a professional online store without coding, app downloads,
              or complicated setup.
            </p>

            <p>
              Add your products, set prices, share your store link, and start
              receiving customer orders directly on WhatsApp.
            </p>

            <div className="about-price-card">
              <div>
                <span>pricing</span>
                <strong>₹499/month</strong>
              </div>

              <p>3-day free trial. No charge today. Cancel anytime.</p>
            </div>
          </div>

          <div className="about-features">
            <div className="about-feature-card">
              <div className="about-feature-icon">₹</div>
              <div>
                <h4>Zero Transaction Fees</h4>
                <p>
                  Keep 100% of your sales. No commission on orders, ever.
                </p>
              </div>
            </div>

            <div className="about-feature-card">
              <div className="about-feature-icon">💬</div>
              <div>
                <h4>Orders Via WhatsApp</h4>
                <p>
                  Customers order directly on WhatsApp — no app downloads
                  needed.
                </p>
              </div>
            </div>

            <div className="about-feature-card">
              <div className="about-feature-icon">⚡</div>
              <div>
                <h4>Go Live in 15 Minutes</h4>
                <p>
                  Add products, set prices, and share your link. No coding
                  required.
                </p>
              </div>
            </div>
          </div>
        </div>

       
      </div>

      <style>{`
        .about-section {
          position: relative;
          overflow: hidden;
          background:
            radial-gradient(circle at 12% 18%, rgba(18, 140, 126, 0.12), transparent 34%),
            radial-gradient(circle at 88% 22%, rgba(59, 130, 246, 0.1), transparent 32%),
            linear-gradient(180deg, #f8fafc 0%, #ffffff 50%, #eef7f5 100%);
          padding: 92px 0;
        }

        .about-bg {
          position: absolute;
          border-radius: 999px;
          filter: blur(80px);
          pointer-events: none;
          opacity: 0.35;
        }

        .about-bg-one {
          width: 340px;
          height: 340px;
          left: -140px;
          top: 80px;
          background: #14b8a6;
        }

        .about-bg-two {
          width: 360px;
          height: 360px;
          right: -150px;
          bottom: 70px;
          background: #60a5fa;
        }

        .about-container {
          position: relative;
          z-index: 1;
          width: 100%;
          max-width: 1180px;
          margin: 0 auto;
          padding: 0 16px;
        }

        .about-header {
          max-width: 760px;
          margin: 0 auto 48px;
          text-align: center;
        }

        .about-eyebrow {
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
        }

        .about-eyebrow span {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #10b981;
          box-shadow: 0 0 0 6px rgba(16, 185, 129, 0.14);
        }

        .about-header h2 {
          margin: 22px 0 0;
          font-size: clamp(38px, 5vw, 64px);
          font-weight: 950;
          line-height: 1;
          letter-spacing: -0.065em;
          color: #07111f;
        }

        .about-accent {
          background: linear-gradient(135deg, #128c7e, #0ea5e9);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .about-header p {
          max-width: 650px;
          margin: 22px auto 0;
          font-size: 18px;
          line-height: 1.75;
          color: #475569;
        }

        .about-grid {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(0, 0.95fr);
          gap: 24px;
          align-items: stretch;
        }

        .about-main-card,
        .about-feature-card,
        .about-stats {
          border: 1px solid rgba(15, 23, 42, 0.08);
          background: rgba(255, 255, 255, 0.86);
          box-shadow: 0 24px 70px rgba(15, 23, 42, 0.08);
          backdrop-filter: blur(18px);
        }

        .about-main-card {
          border-radius: 34px;
          padding: 38px;
        }

        .about-logo-mark {
          display: flex;
          width: 58px;
          height: 58px;
          align-items: center;
          justify-content: center;
          border-radius: 18px;
          background: linear-gradient(135deg, #128c7e, #0f766e);
          color: #ffffff;
          font-size: 28px;
          font-weight: 950;
          box-shadow: 0 18px 36px rgba(18, 140, 126, 0.22);
        }

        .about-main-card h3 {
          margin: 28px 0 0;
          font-size: clamp(28px, 3vw, 40px);
          font-weight: 950;
          line-height: 1.05;
          letter-spacing: -0.055em;
          color: #0f172a;
        }

        .about-main-card p {
          margin: 18px 0 0;
          font-size: 16px;
          line-height: 1.8;
          color: #475569;
        }

        .about-price-card {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 18px;
          margin-top: 30px;
          border-radius: 24px;
          background:
            radial-gradient(circle at top right, rgba(18, 140, 126, 0.18), transparent 42%),
            linear-gradient(135deg, #0f172a, #111827);
          padding: 22px;
          color: #ffffff;
        }

        .about-price-card span {
          display: block;
          font-size: 13px;
          font-weight: 850;
          color: #99f6e4;
        }

        .about-price-card strong {
          display: block;
          margin-top: 6px;
          font-size: 30px;
          font-weight: 950;
          letter-spacing: -0.05em;
        }

        .about-price-card p {
          max-width: 230px;
          margin: 0;
          font-size: 14px;
          line-height: 1.6;
          color: #cbd5e1;
        }

        .about-features {
          display: grid;
          gap: 18px;
        }

        .about-feature-card {
          display: flex;
          gap: 18px;
          border-radius: 28px;
          padding: 26px;
        }

        .about-feature-icon {
          display: flex;
          width: 52px;
          height: 52px;
          flex: 0 0 auto;
          align-items: center;
          justify-content: center;
          border-radius: 18px;
          background: rgba(18, 140, 126, 0.1);
          color: #0f766e;
          font-size: 24px;
          font-weight: 950;
        }

        .about-feature-card h4 {
          margin: 0;
          font-size: 22px;
          font-weight: 950;
          letter-spacing: -0.035em;
          color: #0f172a;
        }

        .about-feature-card p {
          margin: 10px 0 0;
          font-size: 15px;
          line-height: 1.7;
          color: #475569;
        }

        .about-stats {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 1px;
          overflow: hidden;
          margin-top: 24px;
          border-radius: 30px;
          background: rgba(15, 23, 42, 0.08);
        }

        .about-stats div {
          background: rgba(255, 255, 255, 0.9);
          padding: 26px 18px;
          text-align: center;
        }

        .about-stats strong {
          display: block;
          font-size: 34px;
          font-weight: 950;
          letter-spacing: -0.055em;
          color: #0f766e;
        }

        .about-stats span {
          display: block;
          margin-top: 8px;
          font-size: 14px;
          font-weight: 800;
          color: #64748b;
        }

        @media (max-width: 900px) {
          .about-section {
            padding: 72px 0;
          }

          .about-grid {
            grid-template-columns: 1fr;
          }

          .about-main-card {
            padding: 30px;
          }

          .about-stats {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 560px) {
          .about-section {
            padding: 56px 0;
          }

          .about-header {
            margin-bottom: 34px;
          }

          .about-header h2 {
            font-size: 38px;
          }

          .about-header p {
            font-size: 16px;
          }

          .about-main-card {
            border-radius: 26px;
            padding: 24px;
          }

          .about-price-card {
            align-items: flex-start;
            flex-direction: column;
          }

          .about-feature-card {
            border-radius: 24px;
            padding: 22px;
          }

          .about-feature-card h4 {
            font-size: 20px;
          }

          .about-stats {
            grid-template-columns: 1fr;
            border-radius: 24px;
          }
        }
      `}</style>
    </section>
  );
}