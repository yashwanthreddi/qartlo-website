import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { routes } from "@/lib/routes";

const appFeatures = [
  {
    icon: "📲",
    title: "Install on Phone",
    description: "Add Qartlo to your home screen and open it like a native app.",
  },
  {
    icon: "📦",
    title: "Manage Products",
    description: "Add, edit, and manage your product catalog from anywhere.",
  },
  {
    icon: "📊",
    title: "Real-time Analytics",
    description: "Track store views, orders, products, and performance anytime.",
  },
];

const androidSteps = [
  {
    number: "1",
    title: "Login to Qartlo",
    description: "Visit your Qartlo dashboard and sign in to your account.",
  },
  {
    number: "2",
    title: "Tap Install App",
    description: "If Chrome shows the install banner, tap Install App.",
  },
  {
    number: "3",
    title: "Confirm installation",
    description: "Tap Install when your browser asks for confirmation.",
  },
];

const iphoneSteps = [
  {
    number: "1",
    title: "Open in Safari",
    description: "Open your Qartlo dashboard using the Safari browser.",
  },
  {
    number: "2",
    title: "Tap Share button",
    description: "Tap the share icon at the bottom of your Safari screen.",
  },
  {
    number: "3",
    title: "Add to Home Screen",
    description: "Scroll and select Add to Home Screen.",
  },
];



export default function QartloAppPage() {
  return (
    <main className="app-page">
      <Navbar />

    

      <section className="app-section">
        <div className="app-container">
          <div className="app-header">
            <div className="app-eyebrow">
              <span />
              What You Can Do
            </div>

            <h2>
              Everything you need in your <span>pocket</span>
            </h2>

            <p>
              Qartlo gives store owners quick mobile access to manage daily
              operations without opening a laptop.
            </p>
          </div>

          <div className="app-feature-grid">
            {appFeatures.map((feature, index) => (
              <div className="app-feature-card" key={feature.title}>
                <div className="feature-card-top">
                  <div className="feature-icon">{feature.icon}</div>
                  <div className="feature-number">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                </div>

                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="install-section">
        <div className="app-container">
          <div className="app-header">
            <div className="app-eyebrow">
              <span />
              How to Install
            </div>

            <h2>
              No app store needed. Install directly from your{" "}
              <span>browser</span>.
            </h2>

            <p>
              Add Qartlo to your phone home screen and open your dashboard like
              a native mobile app.
            </p>
          </div>

          <div className="install-grid">
            <div className="install-card">
              <div className="install-card-head">
                <div className="install-icon">🤖</div>
                <div>
                  <span>Android</span>
                  <h3>Chrome Browser</h3>
                </div>
              </div>

              <div className="install-steps">
                {androidSteps.map((step) => (
                  <div className="install-step" key={step.number}>
                    <span>{step.number}</span>

                    <div>
                      <strong>{step.title}</strong>
                      <p>{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="install-success">
                ✓ Open Qartlo from your home screen.
              </div>
            </div>

            <div className="install-card">
              <div className="install-card-head">
                <div className="install-icon"></div>
                <div>
                  <span>iPhone</span>
                  <h3>Safari Browser</h3>
                </div>
              </div>

              <div className="install-steps">
                {iphoneSteps.map((step) => (
                  <div className="install-step" key={step.number}>
                    <span>{step.number}</span>

                    <div>
                      <strong>{step.title}</strong>
                      <p>{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="install-success">
                ✓ Qartlo icon will appear on your home screen.
              </div>
            </div>
          </div>

          <div className="pro-tip-card">
            <div className="pro-tip-icon">💡</div>
            <p>
              <strong>Pro Tip:</strong> Once installed, Qartlo opens like a
              mobile app with quick access from your home screen. It is ideal
              for store owners who want to manage products, orders, and store
              sharing on the go.
            </p>
          </div>
        </div>
      </section>

      <section className="app-cta-section">
        <div className="app-container">
          <div className="app-cta-box">
            <div className="app-eyebrow">
              <span />
              Ready to Go Mobile?
            </div>

            <h2>Manage your Qartlo store from your phone</h2>

            <p>
              Login to your Qartlo account and install the app to start managing
              your business from anywhere.
            </p>

            <div className="app-actions center">
              <a className="app-btn app-btn-primary" href={routes.signup}>
                Get Started →
              </a>

              <a className="app-btn app-btn-outline" href={routes.login}>
                Already have an account? Sign In
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <style>{`
        .app-page {
          min-height: 100vh;
          background: #f8fafc;
        }

        .app-hero,
        .app-section,
        .install-section,
        .app-cta-section {
          position: relative;
          overflow: hidden;
          background:
            radial-gradient(circle at 12% 18%, rgba(18, 140, 126, 0.12), transparent 34%),
            radial-gradient(circle at 88% 22%, rgba(59, 130, 246, 0.1), transparent 32%),
            linear-gradient(180deg, #f8fafc 0%, #ffffff 50%, #eef7f5 100%);
          padding: 92px 0;
        }

        .app-section {
          background:
            radial-gradient(circle at 10% 18%, rgba(18, 140, 126, 0.1), transparent 34%),
            linear-gradient(180deg, #eef7f5 0%, #ffffff 55%, #f8fafc 100%);
        }

        .install-section {
          background:
            radial-gradient(circle at 90% 20%, rgba(59, 130, 246, 0.1), transparent 32%),
            linear-gradient(180deg, #ffffff 0%, #f8fafc 55%, #eef7f5 100%);
        }

        .app-bg {
          position: absolute;
          border-radius: 999px;
          filter: blur(80px);
          opacity: 0.34;
          pointer-events: none;
        }

        .app-bg-one {
          width: 340px;
          height: 340px;
          left: -140px;
          top: 80px;
          background: #14b8a6;
        }

        .app-bg-two {
          width: 360px;
          height: 360px;
          right: -70px;
          bottom: 80px;
          background: #60a5fa;
        }
          

        .app-container {
          position: relative;
          z-index: 1;
          width: 100%;
          max-width: 1180px;
          margin: 0 auto;
          padding: 0 16px;
        }

        .app-hero-grid {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(0, 0.9fr);
          align-items: center;
          gap: 56px;
        }

        .app-hero-content {
          max-width: 625px;
        }

        .app-eyebrow {
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

        .app-eyebrow span {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #10b981;
          box-shadow: 0 0 0 6px rgba(16, 185, 129, 0.14);
        }

        .app-hero h1,
        .app-header h2,
        .app-cta-box h2 {
          margin: 22px 0 0;
          font-size: clamp(42px, 5vw, 70px);
          font-weight: 950;
          line-height: 0.98;
          letter-spacing: -0.07em;
          color: #07111f;
        }

        .app-header h2,
        .app-cta-box h2 {
          font-size: clamp(38px, 5vw, 62px);
        }

        .app-hero h1 span,
        .app-header h2 span {
          background: linear-gradient(135deg, #128c7e, #0ea5e9);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .app-hero p,
        .app-header p,
        .app-cta-box p {
          max-width: 680px;
          margin: 24px 0 0;
          font-size: 18px;
          line-height: 1.8;
          color: #475569;
        }

        .app-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          margin-top: 34px;
        }

        .app-actions.center {
          justify-content: center;
        }

        .app-btn {
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

        .app-btn:hover {
          transform: translateY(-2px);
        }

        .app-btn-primary {
          background: linear-gradient(135deg, #128c7e, #0f766e);
          color: #ffffff;
          box-shadow: 0 18px 36px rgba(18, 140, 126, 0.24);
        }

        .app-btn-primary:hover {
          box-shadow: 0 22px 42px rgba(18, 140, 126, 0.32);
        }

        .app-btn-outline {
          border: 1px solid rgba(15, 23, 42, 0.1);
          background: rgba(255, 255, 255, 0.86);
          color: #0f172a;
          box-shadow: 0 14px 30px rgba(15, 23, 42, 0.07);
          backdrop-filter: blur(14px);
        }

        .app-btn-outline:hover {
          background: #ffffff;
          box-shadow: 0 18px 38px rgba(15, 23, 42, 0.1);
        }

        .app-trust {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 28px;
        }

        .app-trust span {
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

        .app-phone-preview {
          position: relative;
          min-height: 560px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .phone-bg-card {
          position: absolute;
          width: min(100%, 540px);
          height: 380px;
          border-radius: 44px;
          background:
            radial-gradient(circle at 28% 22%, rgba(18, 140, 126, 0.1), transparent 44%),
            linear-gradient(135deg, rgba(255, 255, 255, 0.88), rgba(235, 244, 255, 0.92));
          border: 1px solid rgba(15, 23, 42, 0.06);
          box-shadow: 0 34px 90px rgba(15, 23, 42, 0.1);
        }

        .phone-shell {
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
          width: 300px;
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
          width: 100%;
          height: 100%;
          overflow: hidden;
          background: linear-gradient(180deg, #f8fafc 0%, #ffffff 100%);
          padding: 30px 16px 16px;
        }

        .phone-topbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          margin-bottom: 16px;
        }

        .phone-topbar strong {
          display: block;
          font-size: 20px;
          font-weight: 950;
          letter-spacing: -0.05em;
          color: #0f172a;
        }

        .phone-topbar span {
          display: block;
          margin-top: 3px;
          font-size: 12px;
          font-weight: 800;
          color: #64748b;
        }

        .phone-avatar {
          display: flex;
          width: 42px;
          height: 42px;
          align-items: center;
          justify-content: center;
          border-radius: 14px;
          background: linear-gradient(135deg, #128c7e, #0f766e);
          color: #ffffff;
          font-weight: 950;
        }

        .phone-stat-card {
          border-radius: 24px;
          padding: 20px;
        }

        .phone-stat-card.dark {
          background:
            radial-gradient(circle at top right, rgba(18, 140, 126, 0.2), transparent 40%),
            linear-gradient(135deg, #0f172a, #111827);
          color: #ffffff;
        }

        .phone-stat-card span {
          display: block;
          font-size: 13px;
          font-weight: 850;
          color: #99f6e4;
        }

        .phone-stat-card strong {
          display: block;
          margin-top: 8px;
          font-size: 42px;
          font-weight: 950;
          letter-spacing: -0.06em;
        }

        .phone-stat-card small {
          display: block;
          margin-top: 4px;
          color: #cbd5e1;
          font-weight: 700;
        }

        .phone-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 10px;
          margin-top: 12px;
        }

        .phone-grid div,
        .phone-list {
          border: 1px solid rgba(15, 23, 42, 0.08);
          border-radius: 18px;
          background: #ffffff;
          box-shadow: 0 10px 24px rgba(15, 23, 42, 0.05);
        }

        .phone-grid div {
          padding: 14px;
        }

        .phone-grid span {
          display: block;
          font-size: 11px;
          font-weight: 850;
          color: #64748b;
        }

        .phone-grid strong {
          display: block;
          margin-top: 6px;
          font-size: 22px;
          font-weight: 950;
          color: #0f172a;
        }

        .phone-list {
          margin-top: 12px;
          padding: 14px;
        }

        .phone-list-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 12px;
        }

        .phone-list-head strong {
          font-size: 14px;
          font-weight: 950;
          color: #0f172a;
        }

        .phone-list-head span {
          border-radius: 999px;
          background: rgba(18, 140, 126, 0.1);
          padding: 5px 8px;
          font-size: 10px;
          font-weight: 950;
          color: #0f766e;
        }

        .phone-row {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 0;
          border-top: 1px solid rgba(15, 23, 42, 0.06);
        }

        .phone-row > span {
          display: flex;
          width: 34px;
          height: 34px;
          align-items: center;
          justify-content: center;
          border-radius: 12px;
          background: rgba(18, 140, 126, 0.08);
        }

        .phone-row strong {
          display: block;
          font-size: 12px;
          font-weight: 900;
          color: #0f172a;
        }

        .phone-row small {
          display: block;
          margin-top: 2px;
          font-size: 11px;
          font-weight: 700;
          color: #64748b;
        }

        .preview-pill {
          position: absolute;
          z-index: 3;
          min-width: 142px;
          border: 1px solid rgba(255, 255, 255, 0.72);
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.9);
          padding: 13px 16px;
          box-shadow: 0 18px 40px rgba(15, 23, 42, 0.12);
          backdrop-filter: blur(16px);
        }

        .preview-pill small {
          display: block;
          font-size: 12px;
          font-weight: 850;
          color: #64748b;
        }

        .preview-pill strong {
          display: block;
          margin-top: 6px;
          font-size: 18px;
          font-weight: 950;
          color: #0f172a;
        }

        .preview-pill-left {
          left: 22px;
          bottom: 135px;
        }

        .preview-pill-right {
          right: 8px;
          top: 175px;
        }

        .app-header {
          max-width: 760px;
          margin: 0 auto 48px;
          text-align: center;
        }

        .app-header p {
          margin-left: auto;
          margin-right: auto;
        }

        .app-feature-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 22px;
        }

        .app-feature-card,
        .install-card,
        .pro-tip-card,
        .app-cta-box {
          border: 1px solid rgba(15, 23, 42, 0.08);
          background: rgba(255, 255, 255, 0.88);
          box-shadow: 0 24px 70px rgba(15, 23, 42, 0.08);
          backdrop-filter: blur(18px);
        }

        .app-feature-card {
          min-height: 250px;
          border-radius: 30px;
          padding: 28px;
        }

        .feature-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
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
        }

        .feature-number {
          font-size: 14px;
          font-weight: 950;
          letter-spacing: 0.12em;
          color: rgba(15, 23, 42, 0.18);
        }

        .app-feature-card h3 {
          margin: 26px 0 0;
          font-size: 23px;
          font-weight: 950;
          line-height: 1.15;
          letter-spacing: -0.04em;
          color: #0f172a;
        }

        .app-feature-card p {
          margin: 14px 0 0;
          font-size: 15.5px;
          line-height: 1.75;
          color: #475569;
        }

        .install-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 24px;
        }

        .install-card {
          border-radius: 30px;
          padding: 30px;
        }

        .install-card-head {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .install-icon {
          display: flex;
          width: 58px;
          height: 58px;
          align-items: center;
          justify-content: center;
          border-radius: 20px;
          background: rgba(18, 140, 126, 0.1);
          color: #0f766e;
          font-size: 28px;
        }

        .install-card-head span {
          display: block;
          font-size: 13px;
          font-weight: 900;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #0f766e;
        }

        .install-card-head h3 {
          margin: 7px 0 0;
          font-size: 28px;
          font-weight: 950;
          line-height: 1.05;
          letter-spacing: -0.055em;
          color: #0f172a;
        }

        .install-steps {
          display: grid;
          gap: 16px;
          margin-top: 28px;
        }

        .install-step {
          display: flex;
          gap: 14px;
          border: 1px solid rgba(15, 23, 42, 0.07);
          border-radius: 18px;
          background: rgba(248, 250, 252, 0.82);
          padding: 16px;
        }

        .install-step > span {
          display: flex;
          width: 30px;
          height: 30px;
          flex: 0 0 auto;
          align-items: center;
          justify-content: center;
          border-radius: 999px;
          background: #128c7e;
          color: #ffffff;
          font-size: 13px;
          font-weight: 950;
        }

        .install-step strong {
          display: block;
          font-size: 15px;
          font-weight: 950;
          color: #0f172a;
        }

        .install-step p {
          margin: 6px 0 0;
          font-size: 14px;
          line-height: 1.6;
          color: #64748b;
        }

        .install-success {
          margin-top: 20px;
          border-radius: 18px;
          background: rgba(18, 140, 126, 0.1);
          padding: 14px 16px;
          color: #0f766e;
          font-size: 14px;
          font-weight: 900;
        }

        .pro-tip-card {
          display: flex;
          gap: 16px;
          align-items: flex-start;
          margin-top: 24px;
          border-radius: 26px;
          padding: 22px 24px;
        }

        .pro-tip-icon {
          display: flex;
          width: 42px;
          height: 42px;
          flex: 0 0 auto;
          align-items: center;
          justify-content: center;
          border-radius: 14px;
          background: rgba(18, 140, 126, 0.1);
        }

        .pro-tip-card p {
          margin: 0;
          font-size: 15px;
          line-height: 1.7;
          color: #475569;
        }

        .pro-tip-card strong {
          color: #0f172a;
        }

        .app-cta-box {
          max-width: 960px;
          margin: 0 auto;
          border-radius: 34px;
          padding: 62px 34px;
          text-align: center;
        }

        .app-cta-box p {
          margin-left: auto;
          margin-right: auto;
        }

        @media (max-width: 980px) {
          .app-hero,
          .app-section,
          .install-section,
          .app-cta-section {
            padding: 72px 0;
          }

          .app-hero-grid {
            grid-template-columns: 1fr;
            gap: 38px;
          }

          .app-hero-content {
            max-width: 760px;
            margin: 0 auto;
            text-align: center;
          }

          .app-hero p {
            margin-left: auto;
            margin-right: auto;
          }

          .app-actions,
          .app-trust {
            justify-content: center;
          }

          .app-feature-grid {
            grid-template-columns: 1fr;
          }

          .preview-pill {
            display: none;
          }
        }

        @media (max-width: 760px) {
          .install-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 560px) {
          .app-hero,
          .app-section,
          .install-section,
          .app-cta-section {
            padding: 56px 0;
          }

          .app-hero h1,
          .app-header h2,
          .app-cta-box h2 {
            font-size: 38px;
          }

          .app-hero p,
          .app-header p,
          .app-cta-box p {
            font-size: 16px;
          }

          .app-actions {
            flex-direction: column;
          }

          .app-btn {
            width: 100%;
          }

          .app-phone-preview {
            min-height: 500px;
          }

          .phone-device {
            width: 260px;
            height: 455px;
          }

          .phone-shell {
            border-radius: 38px;
            padding: 8px;
          }

          .phone-bg-card {
            height: 330px;
            border-radius: 32px;
          }

          .install-card,
          .app-feature-card,
          .app-cta-box {
            border-radius: 26px;
            padding: 24px;
          }

          .app-cta-box {
            padding: 44px 22px;
          }

          .pro-tip-card {
            flex-direction: column;
            border-radius: 22px;
          }
        }
      `}</style>
    </main>
  );
}