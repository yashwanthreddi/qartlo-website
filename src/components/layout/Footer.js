export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="qartlo-footer">
      <div className="qartlo-footer-container">
        <div className="qartlo-footer-card">
          <div className="qartlo-footer-glow qartlo-footer-glow-one" />
          <div className="qartlo-footer-glow qartlo-footer-glow-two" />

          <div className="qartlo-footer-content">
            <div className="qartlo-footer-brand-area">
              <div className="qartlo-footer-brand">
                <span className="logo-image-wrap">
              <img
                src="/images/maskable-icon-512.png"
                alt="Qartlo logo"
                className="logo-image"
              />
            </span>
                <div>
                  <p className="qartlo-footer-brand-name">Qartlo</p>
                  <p className="qartlo-footer-brand-subtitle">
                    Smart commerce platform for modern businesses
                  </p>
                </div>
              </div>

              <p className="qartlo-footer-description">
                Build your online store, manage products, and grow your business
                with a simple SaaS platform built for fast-moving sellers.
              </p>

              <div className="qartlo-footer-badges">
                <span>SaaS Platform</span>
                <span>E-commerce Software</span>
              </div>
            </div>

            <div className="qartlo-footer-info-card">
              <p className="qartlo-footer-section-label">
                Business Registration
              </p>

              <div className="qartlo-footer-info-list">
                <div className="qartlo-footer-info-item">
                  <span>Company Name</span>
                  <strong>QARTLO</strong>
                </div>

                <div className="qartlo-footer-info-item">
                  <span>Contact Email</span>
                  <a href="mailto:reddyyashwanth23@gmail.com">
                    reddyyashwanth23@gmail.com
                  </a>
                </div>

                <div className="qartlo-footer-info-item">
                  <span>Business Type</span>
                  <strong>SaaS Platform Provider</strong>
                </div>
              </div>
            </div>
          </div>

          <div className="qartlo-footer-address-box">
            <span>Registered Address</span>
            <p>
              37-1-4/126, Annavarappadu 1st Line, Ongole, Prakasam, Andhra
              Pradesh - 523001
            </p>
          </div>

          <div className="qartlo-footer-bottom">
            <nav className="qartlo-footer-nav" aria-label="Footer navigation">
              <a href="/about">About</a>
              <a href="/privacy-policy">Privacy Policy</a>
              <a href="/terms">Terms & Conditions</a>
            </nav>

            <div className="qartlo-footer-divider" />

            <div className="qartlo-footer-copy-row">
              <p>© {year} Qartlo. All rights reserved.</p>
              <p>Created by QARTLO</p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .qartlo-footer {
          position: relative;
          background:
            radial-gradient(circle at top left, rgba(34, 197, 94, 0.12), transparent 34%),
            radial-gradient(circle at bottom right, rgba(59, 130, 246, 0.12), transparent 32%),
            #07111f;
          color: #ffffff;
          overflow: hidden;
        }

        .qartlo-footer-container {
          width: 100%;
          max-width: 1240px;
          margin: 0 auto;
          padding: 56px 16px;
        }

        .qartlo-footer-card {
          position: relative;
          overflow: hidden;
          border-radius: 32px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          background:
            linear-gradient(135deg, rgba(15, 23, 42, 0.98), rgba(17, 24, 39, 0.96)),
            #111827;
          box-shadow:
            0 30px 90px rgba(0, 0, 0, 0.4),
            inset 0 1px 0 rgba(255, 255, 255, 0.08);
        }

        .qartlo-footer-glow {
          position: absolute;
          width: 280px;
          height: 280px;
          border-radius: 999px;
          filter: blur(70px);
          opacity: 0.35;
          pointer-events: none;
        }

        .qartlo-footer-glow-one {
          top: -120px;
          left: -80px;
          background: #22c55e;
        }

        .qartlo-footer-glow-two {
          right: -100px;
          bottom: -130px;
          background: #3b82f6;
        }

        .qartlo-footer-content {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: 36px;
          padding: 46px;
        }

        .qartlo-footer-brand {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .qartlo-footer-logo {
          display: flex;
          width: 56px;
          height: 56px;
          align-items: center;
          justify-content: center;
          border-radius: 18px;
          background: linear-gradient(135deg, #22c55e, #14b8a6);
          color: #03131f;
          font-size: 28px;
          font-weight: 900;
          box-shadow: 0 16px 40px rgba(34, 197, 94, 0.25);
        }

        .qartlo-footer-brand-name {
          margin: 0;
          font-size: 30px;
          font-weight: 900;
          line-height: 1;
          letter-spacing: -0.04em;
          color: #f8fafc;
        }

        .qartlo-footer-brand-subtitle {
          margin: 8px 0 0;
          font-size: 14px;
          font-weight: 600;
          line-height: 1.4;
          color: #94a3b8;
        }

        .qartlo-footer-description {
          max-width: 560px;
          margin: 28px 0 0;
          font-size: 17px;
          line-height: 1.75;
          color: #cbd5e1;
        }

        .qartlo-footer-badges {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 28px;
        }

        .qartlo-footer-badges span {
          display: inline-flex;
          align-items: center;
          border-radius: 999px;
          border: 1px solid rgba(34, 197, 94, 0.22);
          background: rgba(34, 197, 94, 0.08);
          padding: 10px 14px;
          font-size: 13px;
          font-weight: 800;
          color: #86efac;
        }

        .qartlo-footer-info-card {
          border-radius: 26px;
          border: 1px solid rgba(255, 255, 255, 0.09);
          background: rgba(255, 255, 255, 0.045);
          padding: 28px;
          backdrop-filter: blur(14px);
        }

        .qartlo-footer-section-label {
          margin: 0 0 24px;
          font-size: 14px;
          font-weight: 900;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #22c55e;
        }

        .qartlo-footer-info-list {
          display: grid;
          gap: 18px;
        }

        .qartlo-footer-info-item {
          display: grid;
          gap: 8px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          padding-bottom: 18px;
        }

        .qartlo-footer-info-item:last-child {
          border-bottom: 0;
          padding-bottom: 0;
        }

        .qartlo-footer-info-item span {
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #64748b;
        }

        .qartlo-footer-info-item strong,
        .qartlo-footer-info-item a {
          font-size: 18px;
          font-weight: 800;
          line-height: 1.45;
          color: #f8fafc;
          text-decoration: none;
          word-break: break-word;
        }

        .qartlo-footer-info-item a {
          color: #60a5fa;
        }

        .qartlo-footer-info-item a:hover {
          color: #93c5fd;
        }

        .qartlo-footer-address-box {
          position: relative;
          z-index: 1;
          margin: 0 46px 42px;
          border-radius: 22px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          background: rgba(2, 6, 23, 0.35);
          padding: 22px 24px;
        }

        .qartlo-footer-address-box span {
          display: block;
          margin-bottom: 8px;
          font-size: 13px;
          font-weight: 900;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #94a3b8;
        }

        .qartlo-footer-address-box p {
          margin: 0;
          font-size: 16px;
          font-weight: 650;
          line-height: 1.7;
          color: #cbd5e1;
        }

        .qartlo-footer-bottom {
          position: relative;
          z-index: 1;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          background: rgba(2, 6, 23, 0.35);
          padding: 28px 46px;
        }

        .qartlo-footer-nav {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 12px;
        }

        .qartlo-footer-nav a {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 42px;
          border-radius: 999px;
          padding: 10px 16px;
          font-size: 15px;
          font-weight: 800;
          color: #cbd5e1;
          text-decoration: none;
          transition:
            background 0.2s ease,
            color 0.2s ease,
            transform 0.2s ease;
        }

        .qartlo-footer-nav a:hover {
          background: rgba(255, 255, 255, 0.08);
          color: #ffffff;
          transform: translateY(-1px);
        }

        .qartlo-footer-divider {
          width: 100%;
          height: 1px;
          margin: 24px 0;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.14),
            transparent
          );
        }

        .qartlo-footer-copy-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          color: #94a3b8;
        }

        .qartlo-footer-copy-row p {
          margin: 0;
          font-size: 14px;
          font-weight: 700;
          line-height: 1.6;
        }

        @media (max-width: 900px) {
          .qartlo-footer-container {
            padding: 40px 14px;
          }

          .qartlo-footer-content {
            grid-template-columns: 1fr;
            padding: 34px;
          }

          .qartlo-footer-address-box {
            margin: 0 34px 34px;
          }

          .qartlo-footer-bottom {
            padding: 28px 34px;
          }

          .qartlo-footer-copy-row {
            flex-direction: column;
            justify-content: center;
            text-align: center;
          }
        }

        @media (max-width: 560px) {
          .qartlo-footer-container {
            padding: 28px 12px;
          }

          .qartlo-footer-card {
            border-radius: 24px;
          }

          .qartlo-footer-content {
            padding: 26px 20px;
          }

          .qartlo-footer-brand {
            align-items: flex-start;
          }

          .qartlo-footer-logo {
            width: 48px;
            height: 48px;
            border-radius: 16px;
            font-size: 24px;
          }

          .qartlo-footer-brand-name {
            font-size: 25px;
          }

          .qartlo-footer-description {
            font-size: 15px;
          }

          .qartlo-footer-info-card {
            border-radius: 22px;
            padding: 22px;
          }

          .qartlo-footer-info-item strong,
          .qartlo-footer-info-item a {
            font-size: 16px;
          }

          .qartlo-footer-address-box {
            margin: 0 20px 26px;
            padding: 18px;
          }

          .qartlo-footer-address-box p {
            font-size: 14px;
          }

          .qartlo-footer-bottom {
            padding: 24px 18px;
          }

          .qartlo-footer-nav {
            gap: 8px;
          }

          .qartlo-footer-nav a {
            min-height: 38px;
            padding: 8px 12px;
            font-size: 14px;
          }
        }
      `}</style>
    </footer>
  );
}