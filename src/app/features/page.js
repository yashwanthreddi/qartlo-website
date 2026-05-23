import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { features } from "@/data/siteData";
import { routes } from "@/lib/routes";

export const metadata = {
  title: "Qartlo Features - Ecommerce Platform",
  description:
    "Explore Qartlo features including store setup, product management, checkout, online payments, reports, and custom domain support.",
};

export default function FeaturesPage() {
  return (
    <main className="page-shell">
      <Navbar />

      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="eyebrow">Qartlo Features</div>

            <h1 className="section-title">
              Everything you need to run your online store
            </h1>

            <p className="section-sub">
              Qartlo gives your business a complete set of tools to create,
              manage, and grow your online store from one clean dashboard.
            </p>
          </div>

          <div className="feature-grid">
            {features.map((feature) => (
              <div className="feature-card" key={feature.title}>
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </div>
            ))}
          </div>

          <div className="section-spacer" />

          <div className="about-grid">
            <div className="card about-card">
              <h3>Store management</h3>

              <p>
                Add products, categories, images, descriptions, prices, and
                stock from a simple admin dashboard. Qartlo is designed to make
                regular store updates quick and manageable.
              </p>
            </div>

            <div className="card about-card">
              <h3>Orders and customers</h3>

              <p>
                Track customer orders, view order status, manage customer
                information, and understand how your store is performing through
                clear business insights.
              </p>
            </div>
          </div>

          <div className="page-cta-row">
            <a className="btn btn-primary btn-lg" href={routes.signup}>
              Start Using Qartlo →
            </a>

            <a className="btn btn-outline btn-lg" href="/pricing">
              View Pricing
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}