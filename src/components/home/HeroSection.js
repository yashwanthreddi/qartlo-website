import { routes } from "@/lib/routes";

export default function HeroSection() {
  const heroImage = "/images/Dashboard.jpeg";

  return (
    <section className="hero">
      <div className="hero-glow hero-glow-left" />
      <div className="hero-glow hero-glow-right" />

      <div className="container hero-grid">
        <div className="hero-content">
          <div className="hero-kicker">
            <span />
            Online store builder for modern businesses
          </div>

          <h1 className="hero-title">
            Launch a professional{" "}
            <span className="accent">online store </span> for your business in
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
            radial-gradient(circle at 90% 24%, rgba(37, 99, 235, 0.12), transparent 32%),
            linear-gradient(180deg, #f8fafc 0%, #ffffff 52%, #eef5f4 100%);
          padding: 88px 0 82px;
        }

        .hero-glow {
          position: absolute;
          width: 360px;
          height: 360px;
          border-radius: 999px;
          filter: blur(80px);
          opacity: 0.32;
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
          padding: 0 16px;
        }

        .hero-grid {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(0, 0.95fr);
          align-items: center;
          gap: 54px;
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
          font-weight: 850;
          color: #0f766e;
          box-shadow: 0 12px 28px rgba(15, 118, 110, 0.08);
        }

        .hero-kicker span {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #10b981;
          box-shadow: 0 0 0 6px rgba(16, 185, 129, 0.14);
        }

        .hero-title {
          margin: 22px 0 0;
          font-size: clamp(42px, 5vw, 70px);
          font-weight: 950;
          line-height: 0.98;
          letter-spacing: -0.07em;
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
          font-size: 18px;
          line-height: 1.8;
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
          padding: 15px 22px;
          font-size: 15px;
          font-weight: 900;
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
          background: rgba(255, 255, 255, 0.86);
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
          border: 1px solid rgba(15, 23, 42, 0.08);
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.78);
          padding: 9px 12px;
          font-size: 13px;
          font-weight: 800;
          color: #334155;
          box-shadow: 0 10px 24px rgba(15, 23, 42, 0.06);
          backdrop-filter: blur(12px);
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
          transform: none;
        }

        
        @media (max-width: 980px) {
          .hero {
            padding: 64px 0;
          }

          .hero-grid {
            grid-template-columns: 1fr;
            gap: 36px;
          }

          .hero-content {
            max-width: 760px;
            margin: 0 auto;
            text-align: center;
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
            height: 540px;
            overflow: hidden;
          }

          .preview-pill-left {
            left: 110px;
          }

          .preview-pill-right {
            right: 100px;
          }
        }

        @media (max-width: 640px) {
          .hero {
            padding: 48px 0;
          }

          .container {
            padding: 0 14px;
          }

          .hero-title {
            font-size: 42px;
            letter-spacing: -0.055em;
          }

          .hero-sub {
            font-size: 16px;
          }

          .hero-ctas {
            flex-direction: column;
          }

          .btn {
            width: 100%;
          }

          .hero-preview {
            height: 490px;
            overflow: hidden;
          }

          .preview-bg-card {
            width: 100%;
            height: 330px;
            border-radius: 32px;
            transform: none;
          }

          .phone-device {
            width: 260px;
            height: 430px;
            border-radius: 30px;
          }

          .phone-wrapper {
            border-radius: 38px;
            padding: 8px;
          }

          .phone-notch {
            width: 74px;
            height: 17px;
          }

          .preview-pill {
            display: none;
          }
        }

        @media (max-width: 420px) {
          .hero-title {
            font-size: 36px;
          }

          .hero-kicker {
            font-size: 12px;
          }

          .hero-preview {
            height: 455px;
          }

          .phone-device {
            width: 240px;
            height: 400px;
          }
        }
      `}</style>
    </section>
  );
}