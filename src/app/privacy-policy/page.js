import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Privacy Policy - Qartlo",
  description:
    "Read the Qartlo privacy policy to understand how information is collected, used, and protected.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="page-shell">
      <Navbar />

      <section className="section">
        <div className="container">
          <div className="legal-wrap">
            <div className="eyebrow">Privacy Policy</div>

            <h1>Privacy Policy</h1>

            <p className="legal-updated">Last updated: May 2026</p>

            <p>
              This Privacy Policy explains how Qartlo collects, uses, stores,
              and protects information when businesses and users access our
              website, platform, and related services.
            </p>

            <h2>1. Information we collect</h2>

            <p>
              We may collect information such as name, business name, email
              address, phone number, store details, product information, order
              information, payment-related references, and usage data required
              to provide the Qartlo platform.
            </p>

            <h2>2. How we use information</h2>

            <p>
              We use information to create and manage accounts, provide store
              services, process orders, support payment flows, improve platform
              performance, provide customer support, and communicate important
              service updates.
            </p>

            <h2>3. Store and customer data</h2>

            <p>
              Businesses using Qartlo may upload product, customer, and order
              information. Such data is used to operate the store and provide
              platform functionality to the business owner and their customers.
            </p>

            <h2>4. Payments</h2>

            <p>
              Qartlo may use third-party payment providers to process payments.
              Payment information is handled according to the policies and
              security practices of the respective payment provider.
            </p>

            <h2>5. Data security</h2>

            <p>
              We take reasonable technical and organizational measures to
              protect information from unauthorized access, misuse, loss, or
              disclosure. However, no online system can be guaranteed to be
              completely secure.
            </p>

            <h2>6. Cookies and analytics</h2>

            <p>
              We may use cookies, analytics, or similar technologies to improve
              website experience, understand usage patterns, and enhance
              platform performance.
            </p>

            <h2>7. Data sharing</h2>

            <p>
              We do not sell personal information. We may share information with
              trusted service providers only when required to operate the
              platform, provide support, process payments, comply with law, or
              protect Qartlo and its users.
            </p>

            <h2>8. User rights</h2>

            <p>
              Users may contact us to request access, correction, or deletion of
              their information, subject to legal, contractual, and operational
              requirements.
            </p>

            <h2>9. Changes to this policy</h2>

            <p>
              We may update this Privacy Policy from time to time. Updated
              versions will be posted on this page with a revised date.
            </p>

            <h2>10. Contact</h2>

            <p>
              For privacy-related questions, contact us at{" "}
              <a href="mailto:support@qartlo.com">support@qartlo.com</a>.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}