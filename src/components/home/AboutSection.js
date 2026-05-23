export default function AboutSection() {
  return (
    <section className="section">
      <div className="container">
        <div className="about-grid">
          <div className="card about-card">
            <div className="eyebrow">About Qartlo</div>

            <h3>The smarter way to sell online</h3>

            <p>
              Qartlo is a modern eCommerce platform that helps businesses
              create and manage online stores with ease. It brings products,
              orders, customers, payments, and store settings into one clean
              system.
            </p>

            <p>
              Whether you are starting your first store or managing a growing
              business, Qartlo gives you a faster and simpler way to sell online
              with confidence.
            </p>
          </div>

          <div className="card about-feature-card">
            <div className="big-mark">Q</div>

            <h4>Everything your store needs. Clean, modern, and built to scale.</h4>

            <ul className="check-list">
              <li>Simple and user-friendly admin interface</li>
              <li>Product, category, customer, and order management</li>
              <li>Custom domain support for branded store links</li>
              <li>Mobile-ready storefront and checkout experience</li>
              <li>Secure and scalable platform for growing businesses</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}