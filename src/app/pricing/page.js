import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { routes } from "@/lib/routes";

export const metadata = {
  title: "Qartlo Pricing - Online Store Plans",
  description:
    "Choose a Qartlo plan to create your online store, manage products, receive orders, and grow your business.",
};

const plans = [
  {
    name: "Monthly",
    price: "₹999",
    duration: "/month",
    description: "Best for businesses that want to start selling online quickly.",
    features: [
      "Online store setup",
      "Product and category management",
      "Order management",
      "Customer management",
      "Custom domain support",
      "Admin dashboard",
    ],
    cta: "Start Monthly Plan",
  },
  {
    name: "Yearly",
    price: "₹9,999",
    duration: "/year",
    description: "Best value for growing businesses planning long-term selling.",
    features: [
      "Everything in Monthly",
      "Better yearly value",
      "Online payments ready",
      "Reports and insights",
      "Custom domain support",
      "Priority platform improvements",
    ],
    cta: "Start Yearly Plan",
    highlighted: true,
  },
];

export default function PricingPage() {
  return (
    <main className="page-shell">
      <Navbar />

      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="eyebrow">Pricing</div>

            <h1 className="section-title">
              Simple pricing for growing businesses
            </h1>

            <p className="section-sub">
              Choose the plan that works for your business and start building
              your online store with Qartlo.
            </p>
          </div>

          <div className="pricing-grid">
            {plans.map((plan) => (
              <div
                className={`card pricing-card ${
                  plan.highlighted ? "pricing-card-highlighted" : ""
                }`}
                key={plan.name}
              >
                {plan.highlighted ? (
                  <div className="pricing-badge">Best Value</div>
                ) : null}

                <h2>{plan.name}</h2>

                <p className="pricing-description">{plan.description}</p>

                <div className="pricing-price">
                  <strong>{plan.price}</strong>
                  <span>{plan.duration}</span>
                </div>

                <ul className="check-list">
                  {plan.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>

                <a
                  className={`btn btn-lg ${
                    plan.highlighted ? "btn-primary" : "btn-outline"
                  } pricing-button`}
                  href={routes.signup}
                >
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>

          <div className="pricing-note">
            Need help choosing a plan? Contact the Qartlo team and we will guide
            you based on your business needs.
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}