import { routes } from "@/lib/routes";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-card">
          <div className="footer-top">
            <div>
              <div className="footer-brand">
                <div className="logo-mark">Q</div>
                <span>Qartlo</span>
              </div>

              <p className="footer-brand-p">
                Qartlo is an all-in-one eCommerce platform that helps
                businesses create, manage, and grow online stores with a clean
                and modern experience.
              </p>
            </div>

            <div>
              <div className="footer-title">Company</div>

              <ul className="footer-links">
                <li>
                  <a href="/about">About</a>
                </li>
                <li>
                  <a href="/features">Features</a>
                </li>
                <li>
                  <a href="/pricing">Pricing</a>
                </li>
                <li>
                  <a href="/contact">Contact</a>
                </li>
              </ul>
            </div>

            <div>
              <div className="footer-title">Platform</div>

              <ul className="footer-links">
                <li>
                  <a href="/#features">Home Features</a>
                </li>
                <li>
                  <a href="/#how">How It Works</a>
                </li>
                <li>
                  <a href="/#faq">FAQ</a>
                </li>
                <li>
                  <a href={routes.login}>Sign In</a>
                </li>
                <li>
                  <a href={routes.signup}>Create Account</a>
                </li>
              </ul>
            </div>

            <div>
              <div className="footer-title">Legal</div>

              <ul className="footer-links">
                <li>
                  <a href="/privacy-policy">Privacy Policy</a>
                </li>
                <li>
                  <a href="/terms">Terms & Conditions</a>
                </li>
                <li>
                  <a href="/contact">Support</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="footer-copy">
              © {new Date().getFullYear()} Qartlo. All rights reserved.
            </div>

            <div className="footer-seo">
              Qartlo · online store builder · eCommerce platform · create
              online shop · sell products online
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}