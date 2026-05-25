import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { routes } from "@/lib/routes";

export const metadata = {
  title: "About Qartlo - Online Store Builder",
  description:
    "Learn about Qartlo, a modern ecommerce platform built to help businesses create, manage, and grow online stores.",
};

export default function AboutPage() {
  return (
    <main className="about-page">
      <Navbar />

      <section className="about-hero">
        <div className="about-bg about-bg-one" />
        <div className="about-bg about-bg-two" />

        <div className="about-container">
          <div className="about-header">
            <div className="about-eyebrow">
              <span />
              About Qartlo
            </div>

            <h1>
              Helping Indian businesses sell online with{" "}
              <span>confidence</span>
            </h1>

            <p>
              Qartlo helps businesses create a complete online store, manage
              products, receive WhatsApp orders, and grow digitally without
              technical complexity.
            </p>
          </div>

          <div className="about-grid">
            <div className="about-card about-main-card">
              <div className="about-card-icon">Q</div>

              <h2>What is Qartlo?</h2>

              <p>
                Qartlo is an online store builder made for business owners who
                want to start selling quickly. You can create your store, add
                products, set prices, share your link, and receive orders
                directly through WhatsApp.
              </p>

              <p>
                The platform is designed to keep online selling simple, fast,
                and affordable for small businesses, local stores, and growing
                brands.
              </p>

              <div className="about-price-box">
                <div>
                  <span>Starting at</span>
                  <strong>₹399/month</strong>
                </div>

                <p>7-day free trial. No charge today. Cancel anytime.</p>
              </div>
            </div>

            <div className="about-card about-feature-card">
              <div className="about-feature-top">
                <div className="about-feature-icon">⚡</div>

                <div>
                  <span>Built for speed</span>
                  <h3>Your store can go live in minutes</h3>
                </div>
              </div>

              <ul className="about-check-list">
                <li>Simple setup for non-technical users</li>
                <li>Product, category, and price management</li>
                <li>WhatsApp-based customer order flow</li>
                <li>Mobile-first storefront experience</li>
                <li>Custom domain support for branded selling</li>
                <li>Zero transaction fees on orders</li>
              </ul>
            </div>
          </div>

          <div className="about-stats">
            <div>
              <strong>5 min</strong>
              <span>Store setup</span>
            </div>

            <div>
              <strong>₹499</strong>
              <span>Monthly plan</span>
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

          <div className="about-cta-row">
            <a className="about-btn about-btn-primary" href={routes.signup}>
              Create Your Store →
            </a>

            <a className="about-btn about-btn-outline" href="/features">
              Explore Features
            </a>
          </div>
        </div>
      </section>

      <Footer />

      <style>{`
        .about-page {
          min-height: 100vh;
          background: #f8fafc;
        }

        .about-hero {
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
          opacity: 0.34;
          pointer-events: none;
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
          right: -70px;
          bottom: 80px;
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
          max-width: 820px;
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
          box-shadow: 0 12px 28px rgba(15, 118, 110, 0.08);
        }

        .about-eyebrow span {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #10b981;
          box-shadow: 0 0 0 6px rgba(16, 185, 129, 0.14);
        }

        .about-header h1 {
          margin: 22px 0 0;
          font-size: clamp(42px, 5vw, 70px);
          font-weight: 950;
          line-height: 0.98;
          letter-spacing: -0.07em;
          color: #07111f;
        }

        .about-header h1 span {
          background: linear-gradient(135deg, #128c7e, #0ea5e9);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .about-header p {
          max-width: 700px;
          margin: 24px auto 0;
          font-size: 18px;
          line-height: 1.8;
          color: #475569;
        }

        .about-grid {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(0, 0.95fr);
          gap: 24px;
          align-items: stretch;
        }

        .about-card {
          border: 1px solid rgba(15, 23, 42, 0.08);
          background: rgba(255, 255, 255, 0.88);
          box-shadow: 0 24px 70px rgba(15, 23, 42, 0.08);
          backdrop-filter: blur(18px);
        }

        .about-main-card {
          border-radius: 34px;
          padding: 38px;
        }

        .about-card-icon {
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

        .about-main-card h2 {
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

        .about-price-box {
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

        .about-price-box span {
          display: block;
          font-size: 13px;
          font-weight: 850;
          color: #99f6e4;
        }

        .about-price-box strong {
          display: block;
          margin-top: 6px;
          font-size: 30px;
          font-weight: 950;
          letter-spacing: -0.05em;
        }

        .about-price-box p {
          max-width: 230px;
          margin: 0;
          font-size: 14px;
          line-height: 1.6;
          color: #cbd5e1;
        }

        .about-feature-card {
          border-radius: 34px;
          padding: 34px;
        }

        .about-feature-top {
          display: flex;
          align-items: flex-start;
          gap: 18px;
        }

        .about-feature-icon {
          display: flex;
          width: 56px;
          height: 56px;
          flex: 0 0 auto;
          align-items: center;
          justify-content: center;
          border-radius: 18px;
          background: rgba(18, 140, 126, 0.1);
          color: #0f766e;
          font-size: 26px;
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.72);
        }

        .about-feature-top span {
          display: block;
          margin-bottom: 8px;
          font-size: 13px;
          font-weight: 900;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #0f766e;
        }

        .about-feature-top h3 {
          margin: 0;
          font-size: 30px;
          font-weight: 950;
          line-height: 1.08;
          letter-spacing: -0.055em;
          color: #0f172a;
        }

        .about-check-list {
          display: grid;
          gap: 14px;
          margin: 30px 0 0;
          padding: 0;
          list-style: none;
        }

        .about-check-list li {
          position: relative;
          border: 1px solid rgba(15, 23, 42, 0.07);
          border-radius: 18px;
          background: rgba(248, 250, 252, 0.82);
          padding: 15px 16px 15px 44px;
          font-size: 15px;
          font-weight: 800;
          line-height: 1.5;
          color: #334155;
        }

        .about-check-list li::before {
          content: "✓";
          position: absolute;
          left: 16px;
          top: 50%;
          display: flex;
          width: 20px;
          height: 20px;
          align-items: center;
          justify-content: center;
          transform: translateY(-50%);
          border-radius: 999px;
          background: #128c7e;
          color: #ffffff;
          font-size: 12px;
          font-weight: 950;
        }

        .about-stats {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 1px;
          overflow: hidden;
          margin-top: 24px;
          border: 1px solid rgba(15, 23, 42, 0.08);
          border-radius: 30px;
          background: rgba(15, 23, 42, 0.08);
          box-shadow: 0 24px 70px rgba(15, 23, 42, 0.08);
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

        .about-cta-row {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 14px;
          margin-top: 34px;
        }

        .about-btn {
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

        .about-btn:hover {
          transform: translateY(-2px);
        }

        .about-btn-primary {
          background: linear-gradient(135deg, #128c7e, #0f766e);
          color: #ffffff;
          box-shadow: 0 18px 36px rgba(18, 140, 126, 0.24);
        }

        .about-btn-primary:hover {
          box-shadow: 0 22px 42px rgba(18, 140, 126, 0.32);
        }

        .about-btn-outline {
          border: 1px solid rgba(15, 23, 42, 0.1);
          background: rgba(255, 255, 255, 0.86);
          color: #0f172a;
          box-shadow: 0 14px 30px rgba(15, 23, 42, 0.07);
          backdrop-filter: blur(14px);
        }

        .about-btn-outline:hover {
          background: #ffffff;
          box-shadow: 0 18px 38px rgba(15, 23, 42, 0.1);
        }

        @media (max-width: 900px) {
          .about-hero {
            padding: 72px 0;
          }

          .about-grid {
            grid-template-columns: 1fr;
          }

          .about-main-card,
          .about-feature-card {
            padding: 30px;
          }

          .about-stats {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 560px) {
          .about-hero {
            padding: 56px 0;
          }

          .about-header {
            margin-bottom: 34px;
          }

          .about-header h1 {
            font-size: 38px;
          }

          .about-header p {
            font-size: 16px;
          }

          .about-main-card,
          .about-feature-card {
            border-radius: 26px;
            padding: 24px;
          }

          .about-price-box {
            align-items: flex-start;
            flex-direction: column;
          }

          .about-feature-top {
            flex-direction: column;
          }

          .about-feature-top h3 {
            font-size: 26px;
          }

          .about-stats {
            grid-template-columns: 1fr;
            border-radius: 24px;
          }

          .about-cta-row {
            flex-direction: column;
          }
            

          .about-btn {
            width: 100%;
          }
        }
      `}</style>
    </main>
  );
}