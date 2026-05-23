import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Terms and Conditions - Qartlo",
  description:
    "Read the Qartlo terms and conditions for using the website, platform, and ecommerce services.",
};

export default function TermsPage() {
  return (
    <main className="page-shell">
      <Navbar />

      <section className="section">
        <div className="container">
          <div className="legal-wrap">
            <div className="eyebrow">Terms and Conditions</div>

            <h1>Terms and Conditions</h1>

            <p className="legal-updated">Last updated: May 2026</p>

            <p>
              These Terms and Conditions govern your access to and use of
              Qartlo, including our website, platform, dashboard, storefront
              tools, and related services.
            </p>

            <h2>1. Acceptance of terms</h2>

            <p>
              By using Qartlo, you agree to these Terms and Conditions. If you
              do not agree, you should not use the platform or related services.
            </p>

            <h2>2. Use of the platform</h2>

            <p>
              Qartlo provides tools for businesses to create online stores,
              manage products, receive orders, connect payments, and manage
              store operations. You agree to use the platform only for lawful
              business purposes.
            </p>

            <h2>3. Account responsibility</h2>

            <p>
              You are responsible for maintaining the confidentiality of your
              account credentials and for all activities that occur under your
              account.
            </p>

            <h2>4. Store content</h2>

            <p>
              You are responsible for the products, images, descriptions,
              prices, policies, customer communications, and other content you
              upload or publish through your Qartlo store.
            </p>

            <h2>5. Prohibited use</h2>

            <p>
              You must not use Qartlo for illegal, fraudulent, harmful,
              misleading, abusive, or unauthorized activities. Qartlo may suspend
              or restrict access if platform misuse is detected.
            </p>

            <h2>6. Payments and subscriptions</h2>

            <p>
              Paid plans, subscriptions, and payment processing may be handled
              through third-party payment providers. Fees, renewals,
              cancellations, and payment confirmations are subject to the
              applicable plan and payment provider terms.
            </p>

            <h2>7. Availability</h2>

            <p>
              We aim to keep Qartlo reliable and available, but we do not
              guarantee uninterrupted or error-free service. Maintenance,
              updates, outages, or third-party service issues may affect
              availability.
            </p>

            <h2>8. Limitation of liability</h2>

            <p>
              To the maximum extent permitted by law, Qartlo will not be liable
              for indirect, incidental, special, consequential, or business
              losses arising from use of the platform.
            </p>

            <h2>9. Changes to terms</h2>

            <p>
              We may update these Terms and Conditions from time to time.
              Continued use of Qartlo after updates means you accept the revised
              terms.
            </p>

            <h2>10. Contact</h2>

            <p>
              For questions about these terms, contact us at{" "}
              <a href="mailto:support@qartlo.com">support@qartlo.com</a>.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}