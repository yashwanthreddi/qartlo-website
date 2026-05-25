import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Terms and Conditions - Qartlo",
  description:
    "Read the Qartlo terms and conditions for using the website, platform, and ecommerce services.",
};

const termsSections = [
  {
    title: "1. Acceptance of terms",
    text: "By using Qartlo, you agree to these Terms and Conditions. If you do not agree, you should not use the platform or related services.",
  },
  {
    title: "2. Use of the platform",
    text: "Qartlo provides tools for businesses to create online stores, manage products, receive orders, connect payments, and manage store operations. You agree to use the platform only for lawful business purposes.",
  },
  {
    title: "3. Account responsibility",
    text: "You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.",
  },
  {
    title: "4. Store content",
    text: "You are responsible for the products, images, descriptions, prices, policies, customer communications, and other content you upload or publish through your Qartlo store.",
  },
  {
    title: "5. Prohibited use",
    text: "You must not use Qartlo for illegal, fraudulent, harmful, misleading, abusive, or unauthorized activities. Qartlo may suspend or restrict access if platform misuse is detected.",
  },
  {
    title: "6. Payments and subscriptions",
    text: "Paid plans, subscriptions, and payment processing may be handled through third-party payment providers. Fees, renewals, cancellations, and payment confirmations are subject to the applicable plan and payment provider terms.",
  },
  {
    title: "7. Availability",
    text: "We aim to keep Qartlo reliable and available, but we do not guarantee uninterrupted or error-free service. Maintenance, updates, outages, or third-party service issues may affect availability.",
  },
  {
    title: "8. Limitation of liability",
    text: "To the maximum extent permitted by law, Qartlo will not be liable for indirect, incidental, special, consequential, or business losses arising from use of the platform.",
  },
  {
    title: "9. Changes to terms",
    text: "We may update these Terms and Conditions from time to time. Continued use of Qartlo after updates means you accept the revised terms.",
  },
];

export default function TermsPage() {
  return (
    <main className="terms-page">
      <Navbar />

      <section className="terms-section">
        <div className="terms-bg terms-bg-one" />
        <div className="terms-bg terms-bg-two" />

        <div className="terms-container">
          <div className="terms-header">
            <div className="terms-eyebrow">
              <span />
              Terms and Conditions
            </div>

            <h1>
              Terms for using <span>Qartlo</span>
            </h1>

            <p>
              These Terms and Conditions govern your access to and use of
              Qartlo, including our website, platform, dashboard, storefront
              tools, and related services.
            </p>

            <div className="terms-updated">
              <span>Last updated</span>
              <strong>May 2026</strong>
            </div>
          </div>

          <div className="terms-layout">
            <aside className="terms-sidebar">
              <div className="terms-sidebar-card">
                <div className="terms-sidebar-icon">📄</div>

                <h2>Platform usage terms</h2>

                <p>
                  These terms explain how businesses can use Qartlo to create
                  stores, manage products, receive orders, and operate their
                  online business.
                </p>

                <div className="terms-mini-list">
                  <span>Lawful business use</span>
                  <span>Store owner responsibility</span>
                  <span>Fair platform usage</span>
                </div>
              </div>
            </aside>

            <div className="terms-content-card">
              {termsSections.map((section) => (
                <article className="terms-item" key={section.title}>
                  <h2>{section.title}</h2>
                  <p>{section.text}</p>
                </article>
              ))}

              <article className="terms-contact-box">
                <div>
                  <span>10. Contact</span>
                  <h2>Questions about these terms?</h2>
                  <p>
                    For questions about these terms, contact us at{" "}
                    <a href="mailto:support@qartlo.com">support@qartlo.com</a>.
                  </p>
                </div>

                <a className="terms-contact-btn" href="mailto:support@qartlo.com">
                  Contact Support →
                </a>
              </article>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <style>{`
        .terms-page {
          min-height: 100vh;
          background: #f8fafc;
        }

        .terms-section {
          position: relative;
          overflow: hidden;
          background:
            radial-gradient(circle at 12% 18%, rgba(18, 140, 126, 0.1), transparent 34%),
            radial-gradient(circle at 88% 22%, rgba(59, 130, 246, 0.09), transparent 32%),
            linear-gradient(180deg, #f8fafc 0%, #ffffff 52%, #eef7f5 100%);
          padding: 118px 0 92px;
        }

        .terms-bg {
          position: absolute;
          border-radius: 999px;
          filter: blur(80px);
          opacity: 0.34;
          pointer-events: none;
        }

        .terms-bg-one {
          width: 340px;
          height: 340px;
          left: -140px;
          top: 80px;
          background: #14b8a6;
        }

        .terms-bg-two {
          width: 360px;
          height: 360px;
          right: -70px;
          bottom: 80px;
          background: #60a5fa;
        }

        .terms-container {
          position: relative;
          z-index: 1;
          width: 100%;
          max-width: 1180px;
          margin: 0 auto;
          padding: 0 16px;
        }

        .terms-header {
          max-width: 840px;
          margin: 0 auto 46px;
          text-align: center;
        }

        .terms-eyebrow {
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

        .terms-eyebrow span {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #10b981;
          box-shadow: 0 0 0 6px rgba(16, 185, 129, 0.14);
        }

        .terms-header h1 {
          margin: 22px 0 0;
          font-size: clamp(42px, 5vw, 68px);
          font-weight: 950;
          line-height: 0.98;
          letter-spacing: -0.07em;
          color: #07111f;
        }

        .terms-header h1 span {
          background: linear-gradient(135deg, #128c7e, #0ea5e9);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .terms-header p {
          max-width: 760px;
          margin: 22px auto 0;
          font-size: 18px;
          line-height: 1.8;
          color: #475569;
        }

        .terms-updated {
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

        .terms-updated span {
          color: #64748b;
          font-size: 13px;
          font-weight: 850;
        }

        .terms-updated strong {
          color: #0f172a;
          font-size: 13px;
          font-weight: 950;
        }

        .terms-layout {
          display: grid;
          grid-template-columns: minmax(0, 0.36fr) minmax(0, 0.64fr);
          gap: 24px;
          align-items: start;
        }

        .terms-sidebar {
          position: sticky;
          top: 98px;
        }

        .terms-sidebar-card,
        .terms-content-card {
          border: 1px solid rgba(15, 23, 42, 0.08);
          background:
            linear-gradient(180deg, rgba(255, 255, 255, 0.96), rgba(248, 250, 252, 0.94)),
            #ffffff;
          box-shadow: 0 22px 60px rgba(15, 23, 42, 0.07);
          backdrop-filter: blur(18px);
        }

        .terms-sidebar-card {
          overflow: hidden;
          border-radius: 30px;
          padding: 30px;
        }

        .terms-sidebar-icon {
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

        .terms-sidebar-card h2 {
          margin: 24px 0 0;
          font-size: 30px;
          font-weight: 950;
          line-height: 1.08;
          letter-spacing: -0.055em;
          color: #0f172a;
        }

        .terms-sidebar-card p {
          margin: 14px 0 0;
          font-size: 15.5px;
          line-height: 1.75;
          color: #475569;
        }

        .terms-mini-list {
          display: grid;
          gap: 10px;
          margin-top: 24px;
        }

        .terms-mini-list span {
          position: relative;
          border: 1px solid rgba(15, 23, 42, 0.07);
          border-radius: 16px;
          background: rgba(248, 250, 252, 0.82);
          padding: 12px 14px 12px 40px;
          color: #334155;
          font-size: 14px;
          font-weight: 850;
        }

        .terms-mini-list span::before {
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

        .terms-content-card {
          overflow: hidden;
          border-radius: 30px;
          padding: 8px;
        }

        .terms-item {
          border-bottom: 1px solid rgba(15, 23, 42, 0.07);
          padding: 26px;
        }

        .terms-item:last-of-type {
          border-bottom: 0;
        }

        .terms-item h2 {
          margin: 0;
          font-size: 22px;
          font-weight: 950;
          line-height: 1.25;
          letter-spacing: -0.04em;
          color: #0f172a;
        }

        .terms-item p {
          margin: 12px 0 0;
          font-size: 15.5px;
          line-height: 1.85;
          color: #475569;
        }

        .terms-contact-box {
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

        .terms-contact-box span {
          display: block;
          font-size: 12px;
          font-weight: 950;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #0f766e;
        }

        .terms-contact-box h2 {
          margin: 10px 0 0;
          font-size: 26px;
          font-weight: 950;
          line-height: 1.1;
          letter-spacing: -0.055em;
          color: #0f172a;
        }

        .terms-contact-box p {
          max-width: 520px;
          margin: 10px 0 0;
          font-size: 15px;
          line-height: 1.7;
          color: #475569;
        }

        .terms-contact-box a {
          color: #0f766e;
          font-weight: 900;
          text-decoration: none;
        }

        .terms-contact-box a:hover {
          text-decoration: underline;
        }

        .terms-contact-btn {
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

        .terms-contact-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 22px 42px rgba(18, 140, 126, 0.32);
        }

        @media (max-width: 900px) {
          .terms-section {
            padding: 92px 0 72px;
          }

          .terms-layout {
            grid-template-columns: 1fr;
          }

          .terms-sidebar {
            position: relative;
            top: auto;
          }
        }

        @media (max-width: 560px) {
          .terms-section {
            padding: 78px 0 56px;
          }

          .terms-header {
            margin-bottom: 36px;
          }

          .terms-header h1 {
            font-size: 38px;
          }

          .terms-header p {
            font-size: 16px;
          }

          .terms-sidebar-card,
          .terms-content-card {
            border-radius: 24px;
          }

          .terms-sidebar-card {
            padding: 24px;
          }

          .terms-sidebar-card h2 {
            font-size: 26px;
          }

          .terms-item {
            padding: 22px 18px;
          }

          .terms-item h2 {
            font-size: 20px;
          }

          .terms-item p {
            font-size: 15px;
          }

          .terms-contact-box {
            flex-direction: column;
            align-items: flex-start;
            border-radius: 20px;
            padding: 22px 18px;
          }

          .terms-contact-btn {
            width: 100%;
          }
            
        }
      `}</style>
    </main>
  );
}