import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Privacy Policy - Qartlo",
  description:
    "Read the Qartlo privacy policy to understand how information is collected, used, and protected.",
};

const policySections = [
  {
    title: "1. Information we collect",
    text: "We may collect information such as name, business name, email address, phone number, store details, product information, order information, payment-related references, and usage data required to provide the Qartlo platform.",
  },
  {
    title: "2. How we use information",
    text: "We use information to create and manage accounts, provide store services, process orders, support payment flows, improve platform performance, provide customer support, and communicate important service updates.",
  },
  {
    title: "3. Store and customer data",
    text: "Businesses using Qartlo may upload product, customer, and order information. Such data is used to operate the store and provide platform functionality to the business owner and their customers.",
  },
  {
    title: "4. Payments",
    text: "Qartlo may use third-party payment providers to process payments. Payment information is handled according to the policies and security practices of the respective payment provider.",
  },
  {
    title: "5. Data security",
    text: "We take reasonable technical and organizational measures to protect information from unauthorized access, misuse, loss, or disclosure. However, no online system can be guaranteed to be completely secure.",
  },
  {
    title: "6. Cookies and analytics",
    text: "We may use cookies, analytics, or similar technologies to improve website experience, understand usage patterns, and enhance platform performance.",
  },
  {
    title: "7. Data sharing",
    text: "We do not sell personal information. We may share information with trusted service providers only when required to operate the platform, provide support, process payments, comply with law, or protect Qartlo and its users.",
  },
  {
    title: "8. User rights",
    text: "Users may contact us to request access, correction, or deletion of their information, subject to legal, contractual, and operational requirements.",
  },
  {
    title: "9. Changes to this policy",
    text: "We may update this Privacy Policy from time to time. Updated versions will be posted on this page with a revised date.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="privacy-page">
      <Navbar />

      <section className="privacy-section">
        <div className="privacy-bg privacy-bg-one" />
        <div className="privacy-bg privacy-bg-two" />

        <div className="privacy-container">
          <div className="privacy-header">
           
            <h1>
              Privacy Policy for <span>Qartlo</span>
            </h1>

            <p>
              This Privacy Policy explains how Qartlo collects, uses, stores,
              and protects information when businesses and users access our
              website, platform, and related services.
            </p>

            <div className="privacy-updated">
              <span>Last updated</span>
              <strong>May 2026</strong>
            </div>
          </div>

          <div className="privacy-layout">
            <aside className="privacy-sidebar">
              <div className="privacy-sidebar-card">
                <div className="privacy-sidebar-icon">🔐</div>

                <h2>Your privacy matters</h2>

                <p>
                  We are committed to protecting business, store, customer, and
                  platform information handled through Qartlo.
                </p>

                <div className="privacy-mini-list">
                  <span>No personal data selling</span>
                  <span>Secure platform practices</span>
                  <span>Transparent data usage</span>
                </div>
              </div>
            </aside>

            <div className="privacy-content-card">
              {policySections.map((section) => (
                <article className="privacy-item" key={section.title}>
                  <h2>{section.title}</h2>
                  <p>{section.text}</p>
                </article>
              ))}

              <article className="privacy-contact-box">
                <div>
                  <span>10. Contact</span>
                  <h2>Privacy-related questions?</h2>
                  <p>
                    For privacy-related questions, contact us at{" "}
                    <a href="mailto:support@qartlo.com">support@qartlo.com</a>.
                  </p>
                </div>

                <a className="privacy-contact-btn" href="mailto:support@qartlo.com">
                  Contact Support →
                </a>
              </article>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <style>{`
        .privacy-page {
          min-height: 100vh;
          background: #f8fafc;
        }

        .privacy-section {
          position: relative;
          overflow: hidden;
          background:
            radial-gradient(circle at 12% 18%, rgba(18, 140, 126, 0.1), transparent 34%),
            radial-gradient(circle at 88% 22%, rgba(59, 130, 246, 0.09), transparent 32%),
            linear-gradient(180deg, #f8fafc 0%, #ffffff 52%, #eef7f5 100%);
          padding: 118px 0 92px;
        }

        .privacy-bg {
          position: absolute;
          border-radius: 999px;
          filter: blur(80px);
          opacity: 0.34;
          pointer-events: none;
        }

        .privacy-bg-one {
          width: 340px;
          height: 340px;
          left: -140px;
          top: 80px;
          background: #14b8a6;
        }

        .privacy-bg-two {
          width: 360px;
          height: 360px;
          right: -70px;
          bottom: 80px;
          background: #60a5fa;
        }

        .privacy-container {
          position: relative;
          z-index: 1;
          width: 100%;
          max-width: 1180px;
          margin: 0 auto;
          padding: 0 16px;
        }

        .privacy-header {
          max-width: 840px;
          margin: 0 auto 46px;
          text-align: center;
        }

        .privacy-eyebrow {
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

        .privacy-eyebrow span {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #10b981;
          box-shadow: 0 0 0 6px rgba(16, 185, 129, 0.14);
        }

        .privacy-header h1 {
          margin: 22px 0 0;
          font-size: clamp(42px, 5vw, 68px);
          font-weight: 950;
          line-height: 0.98;
          letter-spacing: -0.07em;
          color: #07111f;
        }

        .privacy-header h1 span {
          background: linear-gradient(135deg, #128c7e, #0ea5e9);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .privacy-header p {
          max-width: 760px;
          margin: 22px auto 0;
          font-size: 18px;
          line-height: 1.8;
          color: #475569;
        }

        .privacy-updated {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          margin-top: 24px;
          border: 1px solid rgba(15, 23, 42, 0.08);
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.82);
          padding: 10px 14px;
          box-shadow: 0 12px 28px rgba(15, 23, 42, 0.06);
          backdrop-filter: blur(14px);
        }

        .privacy-updated span {
          color: #64748b;
          font-size: 13px;
          font-weight: 850;
        }

        .privacy-updated strong {
          color: #0f172a;
          font-size: 13px;
          font-weight: 950;
        }

        .privacy-layout {
          display: grid;
          grid-template-columns: minmax(0, 0.36fr) minmax(0, 0.64fr);
          gap: 24px;
          align-items: start;
        }

        .privacy-sidebar {
          position: sticky;
          top: 98px;
        }

        .privacy-sidebar-card,
        .privacy-content-card {
          border: 1px solid rgba(15, 23, 42, 0.08);
          background:
            linear-gradient(180deg, rgba(255, 255, 255, 0.96), rgba(248, 250, 252, 0.94)),
            #ffffff;
          box-shadow: 0 22px 60px rgba(15, 23, 42, 0.07);
          backdrop-filter: blur(18px);
        }

        .privacy-sidebar-card {
          overflow: hidden;
          border-radius: 30px;
          padding: 30px;
        }

        .privacy-sidebar-icon {
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

        .privacy-sidebar-card h2 {
          margin: 24px 0 0;
          font-size: 30px;
          font-weight: 950;
          line-height: 1.08;
          letter-spacing: -0.055em;
          color: #0f172a;
        }

        .privacy-sidebar-card p {
          margin: 14px 0 0;
          font-size: 15.5px;
          line-height: 1.75;
          color: #475569;
        }

        .privacy-mini-list {
          display: grid;
          gap: 10px;
          margin-top: 24px;
        }

        .privacy-mini-list span {
          position: relative;
          border: 1px solid rgba(15, 23, 42, 0.07);
          border-radius: 16px;
          background: rgba(248, 250, 252, 0.82);
          padding: 12px 14px 12px 40px;
          color: #334155;
          font-size: 14px;
          font-weight: 850;
        }

        .privacy-mini-list span::before {
          content: "✓";
          position: absolute;
          left: 14px;
          top: 50%;
          display: flex;
          width: 18px;
          height: 18px;
          align-items: center;
          justify-content: center;
          transform: translateY(-50%);
          border-radius: 999px;
          background: rgba(18, 140, 126, 0.12);
          color: #0f766e;
          font-size: 11px;
          font-weight: 950;
        }

        .privacy-content-card {
          overflow: hidden;
          border-radius: 30px;
          padding: 8px;
        }

        .privacy-item {
          border-bottom: 1px solid rgba(15, 23, 42, 0.07);
          padding: 26px;
        }

        .privacy-item:last-of-type {
          border-bottom: 0;
        }

        .privacy-item h2 {
          margin: 0;
          font-size: 22px;
          font-weight: 950;
          line-height: 1.25;
          letter-spacing: -0.04em;
          color: #0f172a;
        }

        .privacy-item p {
          margin: 12px 0 0;
          font-size: 15.5px;
          line-height: 1.85;
          color: #475569;
        }

        .privacy-contact-box {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 22px;
          margin: 8px;
          border-radius: 24px;
          background:
            radial-gradient(circle at top right, rgba(18, 140, 126, 0.14), transparent 38%),
            rgba(248, 250, 252, 0.95);
          padding: 26px;
        }

        .privacy-contact-box span {
          display: block;
          font-size: 12px;
          font-weight: 950;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #0f766e;
        }

        .privacy-contact-box h2 {
          margin: 10px 0 0;
          font-size: 26px;
          font-weight: 950;
          line-height: 1.1;
          letter-spacing: -0.055em;
          color: #0f172a;
        }

        .privacy-contact-box p {
          max-width: 520px;
          margin: 10px 0 0;
          font-size: 15px;
          line-height: 1.7;
          color: #475569;
        }

        .privacy-contact-box a {
          color: #0f766e;
          font-weight: 900;
          text-decoration: none;
        }

        .privacy-contact-box a:hover {
          text-decoration: underline;
        }

        .privacy-contact-btn {
          display: inline-flex;
          min-height: 48px;
          flex: 0 0 auto;
          align-items: center;
          justify-content: center;
          border-radius: 999px;
          background: linear-gradient(135deg, #128c7e, #0f766e);
          padding: 13px 18px;
          color: #ffffff !important;
          font-size: 14px;
          font-weight: 900;
          text-decoration: none !important;
          box-shadow: 0 16px 34px rgba(18, 140, 126, 0.22);
          transition:
            transform 0.2s ease,
            box-shadow 0.2s ease;
        }

        .privacy-contact-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 22px 42px rgba(18, 140, 126, 0.32);
        }

        @media (max-width: 900px) {
          .privacy-section {
            padding: 92px 0 72px;
          }

          .privacy-layout {
            grid-template-columns: 1fr;
          }

          .privacy-sidebar {
            position: relative;
            top: auto;
          }
        }

        @media (max-width: 560px) {
          .privacy-section {
            padding: 78px 0 56px;
          }

          .privacy-header {
            margin-bottom: 36px;
          }

          .privacy-header h1 {
            font-size: 38px;
          }

          .privacy-header p {
            font-size: 16px;
          }

          .privacy-sidebar-card,
          .privacy-content-card {
            border-radius: 24px;
          }

          .privacy-sidebar-card {
            padding: 24px;
          }

          .privacy-sidebar-card h2 {
            font-size: 26px;
          }

          .privacy-item {
            padding: 22px 18px;
          }

          .privacy-item h2 {
            font-size: 20px;
          }

          .privacy-item p {
            font-size: 15px;
          }

          .privacy-contact-box {
            flex-direction: column;
            align-items: flex-start;
            border-radius: 20px;
            padding: 22px 18px;
          }

          .privacy-contact-btn {
            width: 100%;
          }
        }
      `}</style>
    </main>
  );
}