import { routes } from "@/lib/routes";

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div>
          

          <h1 className="hero-title">
            Launch a professional <span className="accent">online store</span> for your business in minutes
         
          </h1>

          <p className="hero-sub">
            Qartlo helps businesses create a professional online catalog, manage
            products, accept customer orders, and share a store link instantly —
            all from one simple dashboard.
          </p>

          <div className="hero-ctas">
            <a className="btn btn-primary btn-lg" href={routes.signup}>
              Start Free Trial →
            </a>

            <a className="btn btn-outline btn-lg" href={routes.login}>
              Sign In to Dashboard
            </a>
          </div>

          <div className="hero-trust">
            <span className="trust-pill">⚡ Setup in minutes</span>
            <span className="trust-pill">📱 Mobile-first storefront</span>
            <span className="trust-pill">🌐 Custom domain ready</span>
            <span className="trust-pill">💬 WhatsApp order flow</span>
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

              <div className="dash-label">Live Store Dashboard</div>
            </div>

            <div className="dashboard-body">
              <div className="dash-welcome">
                <div>
                  <h3>Ambica Fashion Store</h3>
                  <p>
                    Track orders, products, customers, and store activity from
                    one clean admin panel.
                  </p>
                </div>

                <div className="dash-icon">🛍️</div>
              </div>

              <div className="metric-grid">
                <div className="metric-card">
                  <span>Today’s Orders</span>
                  <strong>42</strong>
                </div>

                <div className="metric-card">
                  <span>Products</span>
                  <strong>318</strong>
                </div>

                <div className="metric-card">
                  <span>Revenue</span>
                  <strong>₹68.4K</strong>
                </div>
              </div>

              <div className="chart-box">
                <div className="chart-head">
                  <strong>Weekly Store Growth</strong>
                  <span>+18.4%</span>
                </div>

                <div className="fake-chart" aria-hidden="true">
                  <svg viewBox="0 0 500 150" preserveAspectRatio="none">
                    <path
                      d="M0,105 C60,90 75,48 135,68 C190,86 210,124 270,72 C325,24 350,56 390,44 C430,32 455,24 500,18"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="6"
                      strokeLinecap="round"
                    />
                    <path
                      d="M0,105 C60,90 75,48 135,68 C190,86 210,124 270,72 C325,24 350,56 390,44 C430,32 455,24 500,18 L500,150 L0,150 Z"
                      fill="currentColor"
                      opacity="0.1"
                    />
                  </svg>
                </div>
              </div>

              <div className="hero-mini-flow">
                <div>
                  <span>01</span>
                  <strong>Add products</strong>
                </div>

                <div>
                  <span>02</span>
                  <strong>Share store link</strong>
                </div>

                <div>
                  <span>03</span>
                  <strong>Receive orders</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}