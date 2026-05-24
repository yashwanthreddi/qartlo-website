import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { routes } from "@/lib/routes";

const appFeatures = [
  {
    icon: "📲",
    title: "Install on Phone",
    description: "Add Qartlo to your home screen like a native mobile app.",
  },
  {
    icon: "📦",
    title: "Manage Products",
    description: "Add, edit, and manage your product catalog from anywhere.",
  },
  {
    icon: "📊",
    title: "Real-time Analytics",
    description: "Track store views, orders, products, and performance.",
  },
];

const androidSteps = [
  {
    number: "1",
    title: "Login to Qartlo",
    description: "Visit your Qartlo dashboard and sign in to your account.",
  },
  {
    number: "2",
    title: "Tap Install App",
    description: "If your browser shows the install banner, tap Install App.",
  },
  {
    number: "3",
    title: "Confirm installation",
    description: "Tap Install when your browser asks for confirmation.",
  },
];

const iphoneSteps = [
  {
    number: "1",
    title: "Open in Safari",
    description: "Open your Qartlo dashboard using Safari browser.",
  },
  {
    number: "2",
    title: "Tap Share button",
    description: "Tap the share icon at the bottom of your Safari screen.",
  },
  {
    number: "3",
    title: "Add to Home Screen",
    description: "Scroll and select Add to Home Screen.",
  },
];

export default function QartloAppPage() {
  return (
    <main className="page-shell">
      <Navbar />

      <section className="section section-soft">
        <div className="container">
          <div className="section-header">
            <div className="eyebrow">Mobile PWA App</div>

            <h1 className="section-title">
              Manage your store from anywhere
            </h1>

            <p className="section-sub">
              Install Qartlo on your phone and manage your business on the go.
              Add products, track analytics, and share your store directly from
              your mobile device.
            </p>

            <div className="page-cta-row">
              <a className="btn btn-primary btn-lg" href={routes.signup}>
                Get Started →
              </a>

              <a className="btn btn-outline btn-lg" href="/pricing">
                View Plans
              </a>
            </div>
          </div>

          <div className="feature-grid">
            {appFeatures.map((feature) => (
              <div className="feature-card" key={feature.title}>
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section why-band">
        <div className="container">
          <div className="section-header">
            <div className="eyebrow">How to Install</div>

            <h2 className="section-title">
              No app store needed. Install directly from your browser.
            </h2>

            <p className="section-sub">
              Add Qartlo to your phone home screen and open your dashboard like
              a native mobile app.
            </p>
          </div>

          <div className="install-grid">
            <div className="card install-card">
              <div className="install-icon">𖠌</div>

              <h3>Android & Chrome</h3>

              <div className="install-steps">
                {androidSteps.map((step) => (
                  <div className="install-step" key={step.number}>
                    <span>{step.number}</span>

                    <div>
                      <strong>{step.title}</strong>
                      <p>{step.description}</p>
                    </div>
                  </div>
                ))}

                <div className="install-success">
                  ✓ Open Qartlo from your home screen.
                </div>
              </div>
            </div>

            <div className="card install-card">
              <div className="install-icon">‮</div>

              <h3>iPhone & Safari</h3>

              <div className="install-steps">
                {iphoneSteps.map((step) => (
                  <div className="install-step" key={step.number}>
                    <span>{step.number}</span>

                    <div>
                      <strong>{step.title}</strong>
                      <p>{step.description}</p>
                    </div>
                  </div>
                ))}

                <div className="install-success">
                  ✓ Qartlo icon will appear on your home screen.
                </div>
              </div>
            </div>
          </div>

          <div className="pro-tip-card">
            <strong>Pro Tip:</strong> Once installed, Qartlo opens like a mobile
            app with quick access from your home screen. It is ideal for store
            owners who want to manage products, orders, and store sharing on the
            go.
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta-box">
            <h2>Ready to go mobile with Qartlo?</h2>

            <p>
              Login to your Qartlo account and install the app to start managing
              your business from your phone.
            </p>

            <div className="cta-actions">
              <a className="btn btn-primary btn-lg" href={routes.signup}>
                Get Started →
              </a>

              <a className="btn btn-outline btn-lg" href={routes.login}>
                Already have an account? Sign In
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}