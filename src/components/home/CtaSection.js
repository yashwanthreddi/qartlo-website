import { routes } from "@/lib/routes";

export default function CtaSection() {
  return (
    <section className="section">
      <div className="container">
        <div className="cta-box">
          <h2>Start your online business with Qartlo today</h2>

          <p>
            Build your store, manage products, receive orders, and grow faster
            with a platform made for modern businesses.
          </p>

          <div className="cta-actions">
            <a className="btn btn-primary btn-lg" href={routes.signup}>
              Create Your Account →
            </a>

            <a className="btn btn-outline btn-lg" href={routes.login}>
              Already have an account? Sign In
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}