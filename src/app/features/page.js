import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { features } from "@/data/siteData";
import { routes } from "@/lib/routes";

export const metadata = {
  title: "Qartlo Features - Ecommerce Platform",
  description:
    "Explore Qartlo features including store setup, product management, WhatsApp orders, zero transaction fees, reports, and custom domain support.",
};

export default function FeaturesPage() {
  return (
    <main className="features-page">
      <Navbar />

      <section className="features-hero">
        <div className="features-bg features-bg-one" />
        <div className="features-bg features-bg-two" />

        <div className="features-container">
          <div className="features-header">
            <div className="features-eyebrow">
              <span />
              Qartlo Features
            </div>

            <h1>
              Everything you need to run your{" "}
              <span>online store</span>
            </h1>

            <p>
              Qartlo gives your business a complete set of tools to launch,
              manage, and grow your online store with WhatsApp orders, product
              management, custom domains, and zero transaction fees.
            </p>

            <div className="features-actions">
              <a className="features-btn features-btn-primary" href={routes.signup}>
                Start Free Trial →
              </a>

              <a className="features-btn features-btn-outline" href="/pricing">
                View Pricing
              </a>
            </div>
          </div>

          <div className="features-grid">
            {features.map((feature, index) => (
              <div className="feature-card" key={feature.title}>
                <div className="feature-card-top">
                  <div className="feature-icon">{feature.icon}</div>

                  <div className="feature-number">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                </div>

                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </div>
            ))}
          </div>

          <div className="features-detail-grid">
            <div className="feature-detail-card">
              <div className="detail-icon">📦</div>

              <h2>Store management made simple</h2>

              <p>
                Add products, categories, images, descriptions, prices, and
                stock from a simple dashboard. Qartlo is designed to make daily
                store updates fast and manageable.
              </p>

              <ul>
                <li>Manage product catalog easily</li>
                <li>Update prices and stock anytime</li>
                <li>Organize products into categories</li>
                <li>Share your store link instantly</li>
              </ul>
            </div>

            <div className="feature-detail-card">
              <div className="detail-icon">💬</div>

              <h2>Orders and customers in one place</h2>

              <p>
                Receive customer orders through WhatsApp, track order activity,
                understand store performance, and manage customer information
                from one clean business dashboard.
              </p>

              <ul>
                <li>WhatsApp-based order flow</li>
                <li>Simple customer communication</li>
                <li>Store activity and business insights</li>
                <li>Mobile-first selling experience</li>
              </ul>
            </div>
          </div>

          <div className="features-stats">
            <div>
              <strong>5 min</strong>
              <span>Store setup</span>
            </div>

            <div>
              <strong>0%</strong>
              <span>Transaction fees</span>
            </div>

            <div>
              <strong>₹399</strong>
              <span>Monthly plan</span>
            </div>

            <div>
              <strong>WhatsApp</strong>
              <span>Order flow</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <style>{`
        .features-page {
          min-height: 100vh;
          background: #f8fafc;
        }

        .features-hero {
          position: relative;
          overflow: hidden;
          background:
            radial-gradient(circle at 12% 18%, rgba(18, 140, 126, 0.12), transparent 34%),
            radial-gradient(circle at 88% 22%, rgba(59, 130, 246, 0.1), transparent 32%),
            linear-gradient(180deg, #f8fafc 0%, #ffffff 50%, #eef7f5 100%);
          padding: 92px 0;
        }

        .features-bg {
          position: absolute;
          border-radius: 999px;
          filter: blur(80px);
          opacity: 0.34;
          pointer-events: none;
        }

        .features-bg-one {
          width: 340px;
          height: 340px;
          left: -140px;
          top: 80px;
          background: #14b8a6;
        }

        .features-bg-two {
          width: 360px;
          height: 360px;
          right: -150px;
          bottom: 80px;
          background: #60a5fa;
        }

        .features-container {
          position: relative;
          z-index: 1;
          width: 100%;
          max-width: 1180px;
          margin: 0 auto;
          padding: 0 16px;
        }

        .features-header {
          max-width: 840px;
          margin: 0 auto 52px;
          text-align: center;
        }

        .features-eyebrow {
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

        .features-eyebrow span {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #10b981;
          box-shadow: 0 0 0 6px rgba(16, 185, 129, 0.14);
        }

        .features-header h1 {
          margin: 22px 0 0;
          font-size: clamp(42px, 5vw, 70px);
          font-weight: 950;
          line-height: 0.98;
          letter-spacing: -0.07em;
          color: #07111f;
        }

        .features-header h1 span {
          background: linear-gradient(135deg, #128c7e, #0ea5e9);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .features-header p {
          max-width: 720px;
          margin: 24px auto 0;
          font-size: 18px;
          line-height: 1.8;
          color: #475569;
        }

        .features-actions {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 14px;
          margin-top: 34px;
        }

        .features-btn {
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

        .features-btn:hover {
          transform: translateY(-2px);
        }

        .features-btn-primary {
          background: linear-gradient(135deg, #128c7e, #0f766e);
          color: #ffffff;
          box-shadow: 0 18px 36px rgba(18, 140, 126, 0.24);
        }

        .features-btn-primary:hover {
          box-shadow: 0 22px 42px rgba(18, 140, 126, 0.32);
        }

        .features-btn-outline {
          border: 1px solid rgba(15, 23, 42, 0.1);
          background: rgba(255, 255, 255, 0.86);
          color: #0f172a;
          box-shadow: 0 14px 30px rgba(15, 23, 42, 0.07);
          backdrop-filter: blur(14px);
        }

        .features-btn-outline:hover {
          background: #ffffff;
          box-shadow: 0 18px 38px rgba(15, 23, 42, 0.1);
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 22px;
        }

        .feature-card {
          position: relative;
          min-height: 270px;
          overflow: hidden;
          border: 1px solid rgba(15, 23, 42, 0.08);
          border-radius: 30px;
          background:
            linear-gradient(180deg, rgba(255, 255, 255, 0.92), rgba(248, 250, 252, 0.92)),
            #ffffff;
          padding: 28px;
          box-shadow: 0 24px 70px rgba(15, 23, 42, 0.08);
          backdrop-filter: blur(18px);
          transition:
            transform 0.22s ease,
            box-shadow 0.22s ease,
            border-color 0.22s ease;
        }

        .feature-card::before {
          content: "";
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at top right, rgba(18, 140, 126, 0.14), transparent 36%);
          opacity: 0;
          transition: opacity 0.22s ease;
          pointer-events: none;
        }

        .feature-card:hover {
          transform: translateY(-6px);
          border-color: rgba(18, 140, 126, 0.22);
          box-shadow: 0 34px 90px rgba(15, 23, 42, 0.12);
        }

        .feature-card:hover::before {
          opacity: 1;
        }

        .feature-card-top {
          position: relative;
          z-index: 1;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 18px;
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
          font-weight: 950;
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.72);
        }

        .feature-number {
          font-size: 14px;
          font-weight: 950;
          letter-spacing: 0.12em;
          color: rgba(15, 23, 42, 0.18);
        }

        .feature-card h3 {
          position: relative;
          z-index: 1;
          margin: 26px 0 0;
          font-size: 23px;
          font-weight: 950;
          line-height: 1.15;
          letter-spacing: -0.04em;
          color: #0f172a;
        }

        .feature-card p {
          position: relative;
          z-index: 1;
          margin: 14px 0 0;
          font-size: 15.5px;
          line-height: 1.75;
          color: #475569;
        }

        .features-detail-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 24px;
          margin-top: 26px;
        }

        .feature-detail-card {
          border: 1px solid rgba(15, 23, 42, 0.08);
          border-radius: 34px;
          background:
            radial-gradient(circle at top right, rgba(18, 140, 126, 0.12), transparent 38%),
            rgba(255, 255, 255, 0.88);
          padding: 34px;
          box-shadow: 0 24px 70px rgba(15, 23, 42, 0.08);
          backdrop-filter: blur(18px);
        }

        .detail-icon {
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

        .feature-detail-card h2 {
          margin: 26px 0 0;
          font-size: 32px;
          font-weight: 950;
          line-height: 1.05;
          letter-spacing: -0.055em;
          color: #0f172a;
        }

        .feature-detail-card p {
          margin: 16px 0 0;
          font-size: 16px;
          line-height: 1.8;
          color: #475569;
        }

        .feature-detail-card ul {
          display: grid;
          gap: 12px;
          margin: 24px 0 0;
          padding: 0;
          list-style: none;
        }

        .feature-detail-card li {
          position: relative;
          border: 1px solid rgba(15, 23, 42, 0.07);
          border-radius: 16px;
          background: rgba(248, 250, 252, 0.82);
          padding: 13px 14px 13px 42px;
          font-size: 14.5px;
          font-weight: 800;
          line-height: 1.5;
          color: #334155;
        }

        .feature-detail-card li::before {
          content: "✓";
          position: absolute;
          left: 14px;
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

        .features-stats {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 1px;
          overflow: hidden;
          margin-top: 26px;
          border: 1px solid rgba(15, 23, 42, 0.08);
          border-radius: 30px;
          background: rgba(15, 23, 42, 0.08);
          box-shadow: 0 24px 70px rgba(15, 23, 42, 0.08);
        }

        .features-stats div {
          background: rgba(255, 255, 255, 0.9);
          padding: 26px 18px;
          text-align: center;
        }

        .features-stats strong {
          display: block;
          font-size: 34px;
          font-weight: 950;
          letter-spacing: -0.055em;
          color: #0f766e;
        }

        .features-stats span {
          display: block;
          margin-top: 8px;
          font-size: 14px;
          font-weight: 800;
          color: #64748b;
        }

        @media (max-width: 980px) {
          .features-hero {
            padding: 72px 0;
          }

          .features-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .features-detail-grid {
            grid-template-columns: 1fr;
          }

          .features-stats {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 640px) {
          .features-hero {
            padding: 56px 0;
          }

          .features-header {
            margin-bottom: 36px;
          }

          .features-header h1 {
            font-size: 38px;
          }

          .features-header p {
            font-size: 16px;
          }

          .features-actions {
            flex-direction: column;
          }

          .features-btn {
            width: 100%;
          }

          .features-grid {
            grid-template-columns: 1fr;
          }

          .feature-card {
            min-height: auto;
            border-radius: 24px;
            padding: 24px;
          }

          .feature-detail-card {
            border-radius: 26px;
            padding: 24px;
          }

          .feature-detail-card h2 {
            font-size: 28px;
          }

          .features-stats {
            grid-template-columns: 1fr;
            border-radius: 24px;
          }
        }
      `}</style>
    </main>
  );
}