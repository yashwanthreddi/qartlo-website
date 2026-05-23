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
    <main className="page-shell">
      <Navbar />

      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="eyebrow">About Qartlo</div>

            <h1 className="section-title">
              Helping businesses sell online with confidence
            </h1>

            <p className="section-sub">
              Qartlo is built for businesses that want a clean, simple, and
              scalable way to create online stores, manage products, receive
              orders, and grow digitally.
            </p>
          </div>

          <div className="about-grid">
            <div className="card about-card">
              <h3>What is Qartlo?</h3>

              <p>
                Qartlo is an all-in-one ecommerce platform that helps merchants
                launch online stores without complicated technical setup. It
                brings product management, order management, customer data,
                payments, reports, and store settings into one dashboard.
              </p>

              <p>
                The goal is to make online selling faster, cleaner, and easier
                for businesses of all sizes.
              </p>
            </div>

            <div className="card about-feature-card">
              <div className="big-mark">Q</div>

              <h4>Built for modern business owners</h4>

              <ul className="check-list">
                <li>Simple setup for non-technical users</li>
                <li>Clean storefront and checkout experience</li>
                <li>Admin dashboard for daily business operations</li>
                <li>Custom domain support for branded selling</li>
                <li>Scalable structure for growing businesses</li>
              </ul>
            </div>
          </div>

          <div className="page-cta-row">
            <a className="btn btn-primary btn-lg" href={routes.signup}>
              Create Your Store →
            </a>

            <a className="btn btn-outline btn-lg" href="/features">
              Explore Features
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}