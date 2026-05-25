import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { routes } from "@/lib/routes";

export const metadata = {
  title: "Contact Qartlo - Online Store Builder",
  description:
    "Contact Qartlo for ecommerce store setup, online store support, custom domain help, and business enquiries.",
};

const contactCards = [
  {
    icon: "✉️",
    label: "Email",
    title: "support@qartlo.com",
    href: "mailto:support@qartlo.com",
    text: "Send us your questions about setup, pricing, or support.",
  },
  {
    icon: "🌐",
    label: "Website",
    title: "qartlo.com",
    href: "https://qartlo.com",
    text: "Visit the official Qartlo website for product information.",
  },
  {
    icon: "🔐",
    label: "Dashboard",
    title: "Sign in to Qartlo",
    href: routes.login,
    text: "Already have an account? Open your dashboard here.",
  },
];

export default function ContactPage() {
  return (
    <main className="contact-page">
      <Navbar />

      <section className="contact-section">
        <div className="contact-bg contact-bg-one" />
        <div className="contact-bg contact-bg-two" />

        <div className="contact-container">
          <div className="contact-header">
            

            <h1>
              Talk to the <span>Qartlo team</span>
            </h1>

            <p>
              Have questions about launching your online store? Contact us and
              our team will help you set up your store, choose the right plan,
              and start selling through WhatsApp.
            </p>
          </div>

          <div className="contact-grid">
            <div className="contact-card contact-main-card">
              <div className="contact-icon-main">💬</div>

              <h2>Get in touch</h2>

              <p>
                Whether you need help setting up your store, connecting your
                domain, understanding features, or choosing the right plan, we
                are here to help.
              </p>

              <div className="contact-info-list">
                {contactCards.map((item) => (
                  <a className="contact-info-item" href={item.href} key={item.label}>
                    <div className="contact-info-icon">{item.icon}</div>

                    <div>
                      <span>{item.label}</span>
                      <strong>{item.title}</strong>
                      <p>{item.text}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="contact-card contact-start-card">
              <div className="contact-start-top">
                <div className="contact-start-icon">🚀</div>

                <div>
                  <span>Start Today</span>
                  <h2>Launch your store faster</h2>
                </div>
              </div>

              <p>
                Create your Qartlo account and start building your online store
                with products, categories, WhatsApp orders, custom domain
                support, and zero transaction fees.
              </p>

              <div className="contact-benefits">
                <div>
                  <strong>5 min</strong>
                  <span>Store setup</span>
                </div>

                <div>
                  <strong>0%</strong>
                  <span>Transaction fees</span>
                </div>

                <div>
                  <strong>WhatsApp</strong>
                  <span>Order flow</span>
                </div>
              </div>

              <div className="contact-actions">
                <a className="contact-btn contact-btn-primary" href={routes.signup}>
                  Create Account →
                </a>

                <a className="contact-btn contact-btn-outline" href={routes.login}>
                  Sign In
                </a>
              </div>

              <div className="contact-note">
                <strong>Need a custom plan?</strong>
                <span>Contact us and we will guide you based on your business needs.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <style>{`
        .contact-page {
          min-height: 100vh;
          background: #f8fafc;
        }

        .contact-section {
          position: relative;
          overflow: hidden;
          background:
            radial-gradient(circle at 12% 18%, rgba(18, 140, 126, 0.1), transparent 34%),
            radial-gradient(circle at 88% 22%, rgba(59, 130, 246, 0.09), transparent 32%),
            linear-gradient(180deg, #f8fafc 0%, #ffffff 52%, #eef7f5 100%);
          padding: 118px 0 92px;
        }

        .contact-bg {
          position: absolute;
          border-radius: 999px;
          filter: blur(80px);
          opacity: 0.34;
          pointer-events: none;
        }

        .contact-bg-one {
          width: 340px;
          height: 340px;
          left: -140px;
          top: 80px;
          background: #14b8a6;
        }

        .contact-bg-two {
          width: 360px;
          height: 360px;
          right: -70px;
          bottom: 80px;
          background: #60a5fa;
        }

        .contact-container {
          position: relative;
          z-index: 1;
          width: 100%;
          max-width: 1180px;
          margin: 0 auto;
          padding: 0 16px;
        }

        .contact-header {
          max-width: 840px;
          margin: 0 auto 46px;
          text-align: center;
        }

        .contact-eyebrow {
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

        .contact-eyebrow span {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #10b981;
          box-shadow: 0 0 0 6px rgba(16, 185, 129, 0.14);
        }

        .contact-header h1 {
          margin: 22px 0 0;
          font-size: clamp(42px, 5vw, 68px);
          font-weight: 950;
          line-height: 0.98;
          letter-spacing: -0.07em;
          color: #07111f;
        }

        .contact-header h1 span {
          background: linear-gradient(135deg, #128c7e, #0ea5e9);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .contact-header p {
          max-width: 740px;
          margin: 22px auto 0;
          font-size: 18px;
          line-height: 1.8;
          color: #475569;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(0, 0.95fr);
          gap: 24px;
          align-items: stretch;
        }

        .contact-card {
          border: 1px solid rgba(15, 23, 42, 0.08);
          border-radius: 32px;
          background:
            linear-gradient(180deg, rgba(255, 255, 255, 0.96), rgba(248, 250, 252, 0.94)),
            #ffffff;
          padding: 32px;
          box-shadow: 0 22px 60px rgba(15, 23, 42, 0.07);
          backdrop-filter: blur(18px);
        }

        .contact-main-card {
          position: relative;
          overflow: hidden;
        }

        .contact-main-card::before {
          content: "";
          position: absolute;
          inset: 0;
          background: radial-gradient(
            circle at top right,
            rgba(18, 140, 126, 0.14),
            transparent 38%
          );
          pointer-events: none;
        }

        .contact-icon-main,
        .contact-start-icon {
          position: relative;
          z-index: 1;
          display: flex;
          width: 58px;
          height: 58px;
          align-items: center;
          justify-content: center;
          border-radius: 18px;
          background: linear-gradient(135deg, #128c7e, #0f766e);
          color: #ffffff;
          font-size: 28px;
          box-shadow: 0 18px 36px rgba(18, 140, 126, 0.22);
        }

        .contact-main-card h2,
        .contact-start-card h2 {
          position: relative;
          z-index: 1;
          margin: 24px 0 0;
          font-size: 34px;
          font-weight: 950;
          line-height: 1.05;
          letter-spacing: -0.06em;
          color: #0f172a;
        }

        .contact-main-card > p,
        .contact-start-card > p {
          position: relative;
          z-index: 1;
          margin: 16px 0 0;
          font-size: 16px;
          line-height: 1.75;
          color: #475569;
        }

        .contact-info-list {
          position: relative;
          z-index: 1;
          display: grid;
          gap: 14px;
          margin-top: 28px;
        }

        .contact-info-item {
          display: flex;
          gap: 14px;
          border: 1px solid rgba(15, 23, 42, 0.07);
          border-radius: 20px;
          background: rgba(255, 255, 255, 0.72);
          padding: 16px;
          color: inherit;
          text-decoration: none;
          transition:
            transform 0.2s ease,
            border-color 0.2s ease,
            box-shadow 0.2s ease,
            background 0.2s ease;
        }

        .contact-info-item:hover {
          transform: translateY(-2px);
          border-color: rgba(18, 140, 126, 0.2);
          background: #ffffff;
          box-shadow: 0 16px 34px rgba(15, 23, 42, 0.08);
        }

        .contact-info-icon {
          display: flex;
          width: 42px;
          height: 42px;
          flex: 0 0 auto;
          align-items: center;
          justify-content: center;
          border-radius: 14px;
          background: rgba(18, 140, 126, 0.1);
          font-size: 20px;
        }

        .contact-info-item span {
          display: block;
          font-size: 12px;
          font-weight: 950;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #0f766e;
        }

        .contact-info-item strong {
          display: block;
          margin-top: 5px;
          font-size: 17px;
          font-weight: 950;
          color: #0f172a;
          word-break: break-word;
        }

        .contact-info-item p {
          margin: 6px 0 0;
          font-size: 14px;
          line-height: 1.55;
          color: #64748b;
        }

        .contact-start-card {
          position: relative;
          overflow: hidden;
          background:
            radial-gradient(circle at top right, rgba(59, 130, 246, 0.13), transparent 38%),
            rgba(255, 255, 255, 0.96);
        }

        .contact-start-top {
          position: relative;
          z-index: 1;
          display: flex;
          align-items: flex-start;
          gap: 18px;
        }

        .contact-start-top span {
          display: block;
          margin-top: 3px;
          font-size: 13px;
          font-weight: 950;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #0f766e;
        }

        .contact-start-top h2 {
          margin-top: 8px;
        }

        .contact-benefits {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 1px;
          overflow: hidden;
          margin-top: 28px;
          border: 1px solid rgba(15, 23, 42, 0.08);
          border-radius: 22px;
          background: rgba(15, 23, 42, 0.08);
        }

        .contact-benefits div {
          background: rgba(255, 255, 255, 0.88);
          padding: 18px 12px;
          text-align: center;
        }

        .contact-benefits strong {
          display: block;
          font-size: 22px;
          font-weight: 950;
          letter-spacing: -0.055em;
          color: #0f766e;
        }

        .contact-benefits span {
          display: block;
          margin-top: 6px;
          font-size: 12px;
          font-weight: 800;
          color: #64748b;
        }

        .contact-actions {
          position: relative;
          z-index: 1;
          display: flex;
          gap: 12px;
          margin-top: 28px;
        }

        .contact-btn {
          display: inline-flex;
          min-height: 54px;
          flex: 1;
          align-items: center;
          justify-content: center;
          border-radius: 999px;
          padding: 14px 18px;
          font-size: 14px;
          font-weight: 900;
          text-decoration: none;
          white-space: nowrap;
          transition:
            transform 0.2s ease,
            box-shadow 0.2s ease,
            background 0.2s ease;
        }

        .contact-btn:hover {
          transform: translateY(-2px);
        }

        .contact-btn-primary {
          background: linear-gradient(135deg, #128c7e, #0f766e);
          color: #ffffff;
          box-shadow: 0 16px 34px rgba(18, 140, 126, 0.22);
        }

        .contact-btn-primary:hover {
          box-shadow: 0 22px 42px rgba(18, 140, 126, 0.32);
        }

        .contact-btn-outline {
          border: 1px solid rgba(15, 23, 42, 0.1);
          background: #ffffff;
          color: #0f172a;
          box-shadow: 0 12px 28px rgba(15, 23, 42, 0.06);
        }

        .contact-btn-outline:hover {
          box-shadow: 0 18px 38px rgba(15, 23, 42, 0.1);
        }

        .contact-note {
          position: relative;
          z-index: 1;
          display: grid;
          gap: 6px;
          margin-top: 22px;
          border-radius: 20px;
          background: rgba(18, 140, 126, 0.08);
          padding: 16px;
        }

        .contact-note strong {
          font-size: 15px;
          font-weight: 950;
          color: #0f172a;
        }

        .contact-note span {
          font-size: 14px;
          line-height: 1.6;
          color: #475569;
        }

        @media (max-width: 900px) {
          .contact-section {
            padding: 92px 0 72px;
          }

          .contact-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 560px) {
          .contact-section {
            padding: 78px 0 56px;
          }

          .contact-header {
            margin-bottom: 36px;
          }

          .contact-header h1 {
            font-size: 38px;
          }

          .contact-header p {
            font-size: 16px;
          }

          .contact-card {
            border-radius: 24px;
            padding: 24px;
          }

          .contact-start-top {
            flex-direction: column;
          }

          .contact-benefits {
            grid-template-columns: 1fr;
          }

          .contact-actions {
            flex-direction: column;
          }

          .contact-btn {
            width: 100%;
          }
            

          .contact-info-item {
            border-radius: 18px;
          }
        }
      `}</style>
    </main>
  );
}