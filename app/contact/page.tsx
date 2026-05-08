export default function ContactPage() {
  return (
    <main className="contact-page">
      <section className="contact-hero">
        <div className="contact-overlay" />

        <div className="contact-container">
          <div className="contact-copy">
            <span className="contact-kicker">
              Global GPI
            </span>

            <h1>
              Let’s Build the
              Future of Materials.
            </h1>

            <p>
              Connect with Global GPI regarding
              advanced materials partnerships,
              commercial deployment, licensing,
              manufacturing collaboration,
              sustainability initiatives, and
              strategic opportunities.
            </p>

            <div className="contact-details">
              <div className="contact-detail-card">
                <h3>Email</h3>
                <a href="mailto:charlie@global-gpi.com">
                  charlie@global-gpi.com
                </a>
              </div>

              <div className="contact-detail-card">
                <h3>Focus Areas</h3>

                <ul>
                  <li>Advanced Materials</li>
                  <li>Food Packaging</li>
                  <li>Sustainable Plastics</li>
                  <li>Industrial Applications</li>
                  <li>Commercial Partnerships</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="contact-form-wrap">
            <form
              className="contact-form"
              action="/api/contact"
              method="POST"
            >
              <div className="contact-form-grid">
                <div className="contact-field">
                  <label>Name</label>

                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your name"
                  />
                </div>

                <div className="contact-field">
                  <label>Company</label>

                  <input
                    type="text"
                    name="company"
                    placeholder="Company name"
                  />
                </div>
              </div>

              <div className="contact-form-grid">
                <div className="contact-field">
                  <label>Email</label>

                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="you@company.com"
                  />
                </div>

                <div className="contact-field">
                  <label>Phone</label>

                  <input
                    type="tel"
                    name="phone"
                    placeholder="Optional"
                  />
                </div>
              </div>

              <div className="contact-field">
                <label>Message</label>

                <textarea
                  name="message"
                  required
                  rows={8}
                  placeholder="Tell us about your project, partnership interest, or material application."
                />
              </div>

              <button
                type="submit"
                className="contact-submit"
              >
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
