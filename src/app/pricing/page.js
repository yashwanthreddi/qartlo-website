import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { routes } from "@/lib/routes";

export const metadata = {
  title: "Qartlo Pricing - Online Store Plans",
  description:
    "Choose a Qartlo monthly plan to create your online store, manage products, receive WhatsApp orders, and grow your business.",
};

const plans = [
  {
    key: "starter",
    name: "Starter",
    price: "₹499",
    duration: "/month",
    tag: "Starter",
    description: "Best for small businesses starting their online store.",
    features: [
      "Online store setup",
      "Product and category management",
      "WhatsApp order flow",
      "Mobile-first storefront",
      "Zero transaction fees",
    ],
    cta: "Start Starter Plan",
    href: routes.signup,
  },
  {
    key: "pro",
    name: "Pro",
    price: "₹599",
    duration: "/month",
    tag: "Most Popular",
    description: "Best for growing businesses that need more flexibility.",
    features: [
      "Everything in Starter",
      "Custom domain support",
      "Advanced store settings",
      "Customer management",
      "Reports and insights",
      "Priority platform improvements",
    ],
    cta: "Start Pro Plan",
    href: routes.signup,
    highlighted: true,
  },
  {
    key: "custom",
    name: "Custom",
    price: "Custom",
    duration: "plan",
    tag: "For Teams",
    description:
      "Best for businesses that need custom setup, support, or advanced requirements.",
    features: [
      "Custom onboarding support",
      "Custom domain assistance",
      "Store setup guidance",
      "Priority support",
      "Tailored plan based on your needs",
    ],
    cta: "Contact Sales",
    href: "/contact",
    custom: true,
  },
];

export default function PricingPage() {
  return (
    <main className="pricing-page">
      <Navbar />

      <section className="pricing-section">
        <div className="pricing-bg pricing-bg-one" />
        <div className="pricing-bg pricing-bg-two" />

        <div className="pricing-container">
          <div className="pricing-header">
          

            <h1>
              Simple monthly pricing for <span>growing businesses</span>
            </h1>

            <p>
              Choose the right Qartlo plan for your business. Start your online
              store, receive WhatsApp orders, and grow without transaction fees.
            </p>
          </div>

          <div className="pricing-grid">
            {plans.map((plan) => (
              <div
                className={`pricing-card ${
                  plan.highlighted ? "pricing-card-highlighted" : ""
                } ${plan.custom ? "pricing-card-custom" : ""}`}
                key={plan.key}
              >
                {plan.highlighted ? (
                  <div className="pricing-badge">Recommended</div>
                ) : null}

                <div className="pricing-content">
                  <div className="pricing-card-top">
                    <span className="pricing-tag">{plan.tag}</span>
                    <h2>{plan.name}</h2>
                  </div>

                  <p className="pricing-description">{plan.description}</p>

                  <div className="pricing-price">
                    <strong className={plan.custom ? "custom-price" : ""}>
                      {plan.price}
                    </strong>
                    <span>{plan.duration}</span>
                  </div>

                  <div className="pricing-sub-note">
                    {plan.custom
                      ? "Talk to us for a tailored plan."
                      : "No lock-in. Upgrade anytime."}
                  </div>

                  <ul className="pricing-features">
                    {plan.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <a
                  className={`pricing-button ${
                    plan.highlighted
                      ? "pricing-button-primary"
                      : "pricing-button-outline"
                  }`}
                  href={plan.href}
                >
                  {plan.cta} →
                </a>
              </div>
            ))}
          </div>

          <div className="pricing-note">
            <div className="pricing-note-icon">💡</div>
            <p>
              <strong>Need help choosing a plan?</strong> Contact the Qartlo
              team and we will guide you based on your business needs.
            </p>
          </div>
        </div>
      </section>

      <Footer />

      <style>{`
        .pricing-page {
          min-height: 100vh;
          background: #f8fafc;
        }

        .pricing-section {
          position: relative;
          overflow: hidden;
          background:
            radial-gradient(circle at 12% 18%, rgba(18, 140, 126, 0.1), transparent 34%),
            radial-gradient(circle at 88% 22%, rgba(59, 130, 246, 0.09), transparent 32%),
            linear-gradient(180deg, #f8fafc 0%, #ffffff 52%, #eef7f5 100%);
          padding: 118px 0 92px;
        }

        .pricing-bg {
          position: absolute;
          border-radius: 999px;
          filter: blur(80px);
          opacity: 0.34;
          pointer-events: none;
        }

        .pricing-bg-one {
          width: 340px;
          height: 340px;
          left: -140px;
          top: 80px;
          background: #14b8a6;
        }

        .pricing-bg-two {
          width: 360px;
          height: 360px;
          right: -150px;
          bottom: 80px;
          background: #60a5fa;
        }

        .pricing-container {
          position: relative;
          z-index: 1;
          width: 100%;
          max-width: 1240px;
          margin: 0 auto;
          padding: 0 16px;
        }

        .pricing-header {
          max-width: 840px;
          margin: 0 auto 46px;
          text-align: center;
        }

        .pricing-eyebrow {
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

        .pricing-eyebrow span {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #10b981;
          box-shadow: 0 0 0 6px rgba(16, 185, 129, 0.14);
        }

        .pricing-header h1 {
          margin: 22px 0 0;
          font-size: clamp(42px, 5vw, 68px);
          font-weight: 950;
          line-height: 0.98;
          letter-spacing: -0.07em;
          color: #07111f;
        }

        .pricing-header h1 span {
          background: linear-gradient(135deg, #128c7e, #0ea5e9);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .pricing-header p {
          max-width: 720px;
          margin: 22px auto 0;
          font-size: 18px;
          line-height: 1.8;
          color: #475569;
        }

        .pricing-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 22px;
          align-items: stretch;
        }

        .pricing-card {
          position: relative;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          border: 1px solid rgba(15, 23, 42, 0.08);
          border-radius: 28px;
          background:
            linear-gradient(180deg, rgba(255, 255, 255, 0.96), rgba(248, 250, 252, 0.94)),
            #ffffff;
          padding: 26px;
          box-shadow: 0 22px 60px rgba(15, 23, 42, 0.07);
          backdrop-filter: blur(18px);
          transition:
            transform 0.22s ease,
            box-shadow 0.22s ease,
            border-color 0.22s ease;
        }

        .pricing-card:hover {
          transform: translateY(-6px);
          border-color: rgba(18, 140, 126, 0.22);
          box-shadow: 0 34px 90px rgba(15, 23, 42, 0.12);
        }

        .pricing-card-highlighted {
          border-color: rgba(18, 140, 126, 0.28);
          background:
            radial-gradient(circle at top right, rgba(18, 140, 126, 0.14), transparent 38%),
            rgba(255, 255, 255, 0.96);
          box-shadow: 0 30px 85px rgba(18, 140, 126, 0.13);
        }

        .pricing-card-custom {
          background:
            radial-gradient(circle at top right, rgba(59, 130, 246, 0.13), transparent 38%),
            rgba(255, 255, 255, 0.96);
        }

        .pricing-content {
          display: flex;
          flex: 1;
          flex-direction: column;
        }

        .pricing-badge {
          position: absolute;
          top: 18px;
          right: 18px;
          border-radius: 999px;
          background: linear-gradient(135deg, #128c7e, #0f766e);
          padding: 8px 12px;
          color: #ffffff;
          font-size: 10px;
          font-weight: 950;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          box-shadow: 0 12px 28px rgba(18, 140, 126, 0.2);
        }

        .pricing-card-top {
          min-height: 82px;
        }

        .pricing-tag {
          display: inline-flex;
          border-radius: 999px;
          background: rgba(18, 140, 126, 0.1);
          padding: 7px 10px;
          color: #0f766e;
          font-size: 12px;
          font-weight: 950;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .pricing-card h2 {
          margin: 16px 0 0;
          font-size: 30px;
          font-weight: 950;
          line-height: 1.05;
          letter-spacing: -0.055em;
          color: #0f172a;
        }

        .pricing-description {
          min-height: 62px;
          margin: 14px 0 0;
          font-size: 15px;
          line-height: 1.65;
          color: #475569;
        }

        .pricing-price {
          display: flex;
          align-items: flex-end;
          gap: 7px;
          margin-top: 22px;
        }

        .pricing-price strong {
          font-size: 44px;
          font-weight: 950;
          line-height: 1;
          letter-spacing: -0.075em;
          color: #07111f;
        }

        .pricing-price strong.custom-price {
          font-size: 40px;
          letter-spacing: -0.055em;
        }

        .pricing-price span {
          padding-bottom: 6px;
          font-size: 15px;
          font-weight: 800;
          color: #64748b;
        }

        .pricing-sub-note {
          min-height: 30px;
          margin-top: 10px;
          padding-bottom: 22px;
          border-bottom: 1px solid rgba(15, 23, 42, 0.08);
          color: #64748b;
          font-size: 13px;
          font-weight: 800;
          line-height: 1.5;
        }

        .pricing-features {
          display: grid;
          gap: 12px;
          margin: 22px 0 24px;
          padding: 0;
          list-style: none;
        }

        .pricing-features li {
          position: relative;
          padding-left: 30px;
          font-size: 15px;
          font-weight: 750;
          line-height: 1.5;
          color: #334155;
        }

        .pricing-features li::before {
          content: "✓";
          position: absolute;
          left: 0;
          top: 1px;
          display: flex;
          width: 20px;
          height: 20px;
          align-items: center;
          justify-content: center;
          border-radius: 999px;
          background: rgba(18, 140, 126, 0.12);
          color: #0f766e;
          font-size: 12px;
          font-weight: 950;
        }

        .pricing-button {
          display: inline-flex;
          width: 90%;
          height: 56px;
          min-height: 56px;
          max-height: 56px;
          flex-shrink: 0;
          align-items: center;
          justify-content: center;
          margin-top: auto;
          border-radius: 999px;
          padding: 0 18px;
          font-size: 14px;
          font-weight: 900;
          line-height: 1;
          text-decoration: none;
          white-space: nowrap;
          transition:
            transform 0.2s ease,
            box-shadow 0.2s ease,
            background 0.2s ease;
        }

        .pricing-button:hover {
          transform: translateY(-2px);
        }

        .pricing-button-primary {
          background: linear-gradient(135deg, #128c7e, #0f766e);
          color: #ffffff;
          box-shadow: 0 16px 34px rgba(18, 140, 126, 0.22);
        }

        .pricing-button-primary:hover {
          box-shadow: 0 22px 42px rgba(18, 140, 126, 0.32);
        }

        .pricing-button-outline {
          border: 1px solid rgba(15, 23, 42, 0.1);
          background: #ffffff;
          color: #0f172a;
          box-shadow: 0 12px 28px rgba(15, 23, 42, 0.06);
        }

        .pricing-button-outline:hover {
          background: #ffffff;
          box-shadow: 0 18px 38px rgba(15, 23, 42, 0.1);
        }

        .pricing-note {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          max-width: 820px;
          margin: 28px auto 0;
          border: 1px solid rgba(15, 23, 42, 0.08);
          border-radius: 24px;
          background: rgba(255, 255, 255, 0.88);
          padding: 20px 22px;
          box-shadow: 0 18px 46px rgba(15, 23, 42, 0.07);
          backdrop-filter: blur(18px);
        }

        .pricing-note-icon {
          display: flex;
          width: 42px;
          height: 42px;
          flex: 0 0 auto;
          align-items: center;
          justify-content: center;
          border-radius: 14px;
          background: rgba(18, 140, 126, 0.1);
        }

        .pricing-note p {
          margin: 0;
          font-size: 15px;
          line-height: 1.7;
          color: #475569;
        }

        .pricing-note strong {
          color: #0f172a;
        }

        @media (max-width: 1100px) {
          .pricing-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 760px) {
          .pricing-section {
            padding: 92px 0 56px;
          }

          .pricing-header {
            margin-bottom: 36px;
          }

          .pricing-header h1 {
            font-size: 38px;
          }

          .pricing-header p {
            font-size: 16px;
          }

          .pricing-grid {
            grid-template-columns: 1fr;
          }

          .pricing-card {
            border-radius: 24px;
            padding: 24px;
          }

          .pricing-card-top,
          .pricing-description {
            min-height: auto;
          }

          .pricing-price strong {
            font-size: 42px;
          }

          .pricing-price strong.custom-price {
            font-size: 38px;
          }

          .pricing-button {
            height: 54px;
            min-height: 54px;
            max-height: 54px;
          }

          .pricing-badge {
            position: static;
            width: fit-content;
            margin-bottom: 16px;
          }

          .pricing-note {
            flex-direction: column;
            border-radius: 22px;
          }
        }
      `}</style>
    </main>
  );
}