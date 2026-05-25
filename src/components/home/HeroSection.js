import { routes } from "@/lib/routes";

export default function HeroSection() {
  const heroImage = "/images/Dashboard.jpeg";

  return (
    <section className="hero">
      <div className="hero-glow hero-glow-left" />
      <div className="hero-glow hero-glow-right" />

      <div className="container hero-grid">
        <div className="hero-content">
          

          <h1 className="hero-title">
            Launch a professional{" "}
            <span className="accent">online store</span> for your business in
            minutes
          </h1>

          <p className="hero-sub">
            Qartlo helps businesses create a professional online catalog, manage
            products, accept customer orders, and share a store link instantly —
            all from one simple dashboard.
          </p>

          <div className="hero-ctas">
            <a className="btn btn-primary" href={routes.signup}>
              Start Free Trial →
            </a>

            <a className="btn btn-light" href={routes.login}>
              Sign In to Dashboard
            </a>
          </div>

          <div className="hero-trust">
            <span>⚡ Setup in minutes</span>
            <span>📱 Mobile-first storefront</span>
            <span>🌐 Custom domain ready</span>
            <span>💬 WhatsApp order flow</span>
          </div>
        </div>

        <div className="hero-preview">
          <div className="preview-bg-card" />

          <div className="phone-wrapper">
            <div className="phone-device">
              <div className="phone-notch" />

              <div className="phone-screen">
                <img
                  src={heroImage}
                  alt="Qartlo mobile dashboard preview"
                  className="phone-image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero {
          position: relative;
          overflow: hidden;
          background:
            radial-gradient(circle at 12% 20%, rgba(18, 140, 126, 0.14), transparent 34%),
            radial-gradient(circle at 90% 24%, rgba(37, 99, 235, 0.10), transparent 32%),
            linear-gradient(180deg, #f8fafc 0%, #ffffff 56%, #eef5f4 100%);
          padding: 92px 0 86px;
        }

        .hero-glow {
          position: absolute;
          width: 360px;
          height: 360px;
          border-radius: 999px;
          filter: blur(80px);
          opacity: 0.28;
          pointer-events: none;
        }

        .hero-glow-left {
          top: 70px;
          left: -150px;
          background: #14b8a6;
        }

        .hero-glow-right {
          right: -140px;
          bottom: 70px;
          background: #60a5fa;
        }

        .container {
          width: 100%;
          max-width: 1220px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .hero-grid {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(0, 0.95fr);
          align-items: center;
          gap: 56px;
        }

        .hero-content {
          max-width: 625px;
        }

        .hero-kicker {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          border: 1px solid rgba(18, 140, 126, 0.18);
          border-radius: 999px;
          background: rgba(18, 140, 126, 0.08);
          padding: 9px 14px;
          font-size: 14px;
          font-weight: 800;
          line-height: 1;
          color: #0f766e;
          box-shadow: 0 12px 28px rgba(15, 118, 110, 0.08);
        }

        .hero-kicker span {
          width: 8px;
          height: 8px;
          flex: 0 0 auto;
          border-radius: 50%;
          background: #10b981;
          box-shadow: 0 0 0 6px rgba(16, 185, 129, 0.14);
        }

        .hero-title {
          margin: 24px 0 0;
          max-width: 680px;
          font-family:
            Inter,
            ui-sans-serif,
            system-ui,
            -apple-system,
            BlinkMacSystemFont,
            "Segoe UI",
            sans-serif;
          font-size: clamp(48px, 5vw, 72px);
          font-weight: 900;
          line-height: 0.98;
          letter-spacing: -0.055em;
          color: #07111f;
        }

        .accent {
          background: linear-gradient(135deg, #128c7e, #0ea5e9);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .hero-sub {
          max-width: 590px;
          margin: 24px 0 0;
          font-family:
            Inter,
            ui-sans-serif,
            system-ui,
            -apple-system,
            BlinkMacSystemFont,
            "Segoe UI",
            sans-serif;
          font-size: 18px;
          line-height: 1.75;
          letter-spacing: -0.01em;
          color: #475569;
        }

        .hero-ctas {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          margin-top: 34px;
        }

        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 54px;
          border-radius: 999px;
          padding: 14px 24px;
          font-family:
            Inter,
            ui-sans-serif,
            system-ui,
            -apple-system,
            BlinkMacSystemFont,
            "Segoe UI",
            sans-serif;
          font-size: 15px;
          font-weight: 800;
          line-height: 1;
          text-decoration: none;
          transition:
            transform 0.2s ease,
            box-shadow 0.2s ease,
            background 0.2s ease;
        }

        .btn-primary {
          background: linear-gradient(135deg, #128c7e, #0f766e);
          color: #ffffff;
          box-shadow: 0 18px 36px rgba(18, 140, 126, 0.24);
        }

        .btn-light {
          border: 1px solid rgba(15, 23, 42, 0.1);
          background: rgba(255, 255, 255, 0.88);
          color: #0f172a;
          box-shadow: 0 14px 30px rgba(15, 23, 42, 0.07);
          backdrop-filter: blur(14px);
        }

        .btn:hover {
          transform: translateY(-2px);
        }

        .btn-primary:hover {
          box-shadow: 0 22px 42px rgba(18, 140, 126, 0.32);
        }

        .btn-light:hover {
          background: #ffffff;
          box-shadow: 0 18px 38px rgba(15, 23, 42, 0.1);
        }

        .hero-trust {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 28px;
        }

        .hero-trust span {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 40px;
          border: 1px solid rgba(15, 23, 42, 0.08);
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.8);
          padding: 9px 13px;
          font-family:
            Inter,
            ui-sans-serif,
            system-ui,
            -apple-system,
            BlinkMacSystemFont,
            "Segoe UI",
            sans-serif;
          font-size: 13px;
          font-weight: 750;
          line-height: 1.2;
          color: #334155;
          box-shadow: 0 10px 24px rgba(15, 23, 42, 0.06);
          backdrop-filter: blur(12px);
          white-space: nowrap;
        }

        .hero-preview {
          position: relative;
          width: 100%;
          min-width: 0;
          height: 560px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: visible;
        }

        .preview-bg-card {
          position: absolute;
          width: min(100%, 560px);
          height: 390px;
          border-radius: 44px;
          background:
            radial-gradient(circle at 28% 22%, rgba(18, 140, 126, 0.1), transparent 44%),
            linear-gradient(135deg, rgba(255, 255, 255, 0.88), rgba(235, 244, 255, 0.92));
          border: 1px solid rgba(15, 23, 42, 0.06);
          box-shadow: 0 34px 90px rgba(15, 23, 42, 0.1);
        }

        .phone-wrapper {
          position: relative;
          z-index: 2;
          padding: 9px;
          border-radius: 40px;
          background: #070d1a;
          box-shadow:
            0 34px 85px rgba(15, 23, 42, 0.24),
            inset 0 1px 0 rgba(255, 255, 255, 0.12);
        }

        .phone-device {
          position: relative;
          width: 315px;
          height: 520px;
          overflow: hidden;
          border-radius: 32px;
          background: #ffffff;
        }

        .phone-notch {
          position: absolute;
          top: 0;
          left: 50%;
          z-index: 4;
          width: 86px;
          height: 20px;
          transform: translateX(-50%);
          border-radius: 0 0 999px 999px;
          background: #070d1a;
          pointer-events: none;
        }

        .phone-screen {
          position: relative;
          width: 100%;
          height: 100%;
          overflow: hidden;
          background: #ffffff;
          border-radius: 30px;
        }

        .phone-image {
          position: absolute;
          inset: 0;
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top center;
        }

        @media (max-width: 980px) {
          .hero {
            padding: 68px 0 64px;
          }

          .hero-grid {
            grid-template-columns: 1fr;
            gap: 38px;
          }

          .hero-content {
            max-width: 760px;
            margin: 0 auto;
            text-align: center;
          }

          .hero-title {
            margin-left: auto;
            margin-right: auto;
          }

          .hero-sub {
            margin-left: auto;
            margin-right: auto;
          }

          .hero-ctas,
          .hero-trust {
            justify-content: center;
          }

          .hero-preview {
            height: 520px;
            overflow: hidden;
          }
        }

        @media (max-width: 640px) {
          .hero {
            padding: 52px 0 42px;
          }

          .container {
            padding: 0 18px;
          }

          .hero-grid {
            gap: 34px;
          }

          .hero-content {
            max-width: 100%;
          }

          .hero-kicker {
            max-width: 100%;
            padding: 9px 12px;
            font-size: 12.5px;
            font-weight: 800;
            line-height: 1.25;
          }

          .hero-title {
            margin-top: 22px;
            font-size: clamp(38px, 11vw, 48px);
            line-height: 1.02;
            letter-spacing: -0.045em;
          }

          .hero-sub {
            margin-top: 20px;
            max-width: 96%;
            font-size: 15.5px;
            line-height: 1.68;
            letter-spacing: -0.01em;
          }

          .hero-ctas {
            display: grid;
            grid-template-columns: 1fr;
            gap: 12px;
            margin-top: 28px;
          }

          .btn {
            width: 100%;
            min-height: 56px;
            padding: 14px 18px;
            font-size: 15px;
          }

          .hero-trust {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 10px;
            margin-top: 26px;
          }

          .hero-trust span {
            width: 100%;
            min-height: 44px;
            padding: 9px 10px;
            font-size: 12.5px;
            white-space: normal;
          }

          .hero-preview {
            height: 445px;
            margin-top: 4px;
            overflow: hidden;
          }

          .preview-bg-card {
            width: 100%;
            height: 300px;
            border-radius: 32px;
          }

          .phone-wrapper {
            border-radius: 36px;
            padding: 8px;
          }

          .phone-device {
            width: 250px;
            height: 410px;
            border-radius: 28px;
          }

          .phone-screen {
            border-radius: 26px;
          }

          .phone-notch {
            width: 74px;
            height: 17px;
          }
        }

        @media (max-width: 420px) {
          .hero {
            padding: 46px 0 36px;
          }

          .container {
            padding: 0 16px;
          }

          .hero-title {
            font-size: clamp(34px, 10.5vw, 42px);
            letter-spacing: -0.04em;
          }

          .hero-sub {
            font-size: 15px;
            line-height: 1.65;
          }

          .hero-kicker {
            font-size: 12px;
          }

          .hero-trust {
            gap: 9px;
          }

          .hero-trust span {
            min-height: 42px;
            font-size: 12px;
          }

          .hero-preview {
            height: 420px;
          }

          .phone-device {
            width: 235px;
            height: 390px;
          }
        }
      `}</style>
    </section>
  );
}