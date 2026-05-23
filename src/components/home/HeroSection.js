import { routes } from "@/lib/routes";

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div>
          <div className="hero-badge">
            ✨ Modern eCommerce platform for growing businesses
          </div>

          <h1 className="hero-title">
            Build your online store with <span className="accent">Qartlo</span>
          </h1>

          <p className="hero-sub">
            Create your store, manage products, receive orders, connect
            payments, and grow your business from one clean and simple
            dashboard.
          </p>

          <div className="hero-ctas">
            <a className="btn btn-primary btn-lg" href={routes.signup}>
              Start Your Store Today →
            </a>

            <a className="btn btn-outline btn-lg" href={routes.login}>
              Sign In to Dashboard
            </a>
          </div>

          <div className="hero-trust">
            <span className="trust-pill">⚡ Quick setup</span>
            <span className="trust-pill">🌐 Custom domain ready</span>
            <span className="trust-pill">📱 Mobile friendly</span>
          </div>
        </div>

        <div className="hero-card">
          <div className="dashboard-card">
            <div className="dashboard-top">
              <div className="dash-dots">
                <span className="dot" />
                <span className="dot" />
                <span className="dot" />
              </div>
              <div className="dash-label">Admin Dashboard</div>
            </div>

            <div className="dashboard-body">
              <div className="dash-welcome">
                <div>
                  <h3>Welcome to Qartlo</h3>
                  <p>
                    Manage products, orders, customers, and store settings in
                    one place.
                  </p>
                </div>
                <div className="dash-icon">🛍️</div>
              </div>

              <div className="metric-grid">
                <div className="metric-card">
                  <span>Total Sales</span>
                  <strong>₹2.4L</strong>
                </div>

                <div className="metric-card">
                  <span>Orders</span>
                  <strong>1,245</strong>
                </div>

                <div className="metric-card">
                  <span>Customers</span>
                  <strong>892</strong>
                </div>
              </div>

              <div className="chart-box">
                <div className="chart-head">
                  <strong>Store Growth</strong>
                  <span>+18.4%</span>
                </div>

                <div className="fake-chart" aria-hidden="true">
                  <svg viewBox="0 0 500 150" preserveAspectRatio="none">
                    <path
                      d="M0,105 C60,90 75,48 135,68 C190,86 210,124 270,72 C325,24 350,56 390,44 C430,32 455,24 500,18"
                      fill="none"
                      stroke="#198f7d"
                      strokeWidth="6"
                      strokeLinecap="round"
                    />
                    <path
                      d="M0,105 C60,90 75,48 135,68 C190,86 210,124 270,72 C325,24 350,56 390,44 C430,32 455,24 500,18 L500,150 L0,150 Z"
                      fill="rgba(25, 143, 125, 0.11)"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}