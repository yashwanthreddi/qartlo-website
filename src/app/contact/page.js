import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { routes } from "@/lib/routes";

export const metadata = {
  title: "Contact Qartlo - Online Store Builder",
  description:
    "Contact Qartlo for ecommerce store setup, online store support, custom domain help, and business enquiries.",
};

export default function ContactPage() {
  return (
    <main className="page-shell">
      <Navbar />

      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="eyebrow">Contact Us</div>

            <h1 className="section-title">Talk to the Qartlo team</h1>

            <p className="section-sub">
              Have questions about launching your online store? Contact us and
              our team will help you get started with Qartlo.
            </p>
          </div>

          <div className="contact-grid">
            <div className="card contact-card">
              <h2>Get in touch</h2>

              <p>
                Whether you need help setting up your store, connecting your
                domain, understanding features, or choosing the right plan, we
                are here to help.
              </p>

              <div className="contact-info">
                <div>
                  <span>Email</span>
                  <a href="mailto:support@qartlo.com">support@qartlo.com</a>
                </div>

                <div>
                  <span>Website</span>
                  <a href="https://qartlo.com">qartlo.com</a>
                </div>

                <div>
                  <span>Dashboard</span>
                  <a href={routes.login}>Sign in to Qartlo</a>
                </div>
              </div>
            </div>

            <div className="card contact-card">
              <h2>Start your store</h2>

              <p>
                Create your Qartlo account and start building your online store
                with products, categories, checkout, payments, and custom domain
                support.
              </p>

              <div className="contact-actions">
                <a className="btn btn-primary btn-lg" href={routes.signup}>
                  Create Account →
                </a>

                <a className="btn btn-outline btn-lg" href={routes.login}>
                  Sign In
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}