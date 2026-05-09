"use client";

import { FormEvent, useState } from "react";

type SubmitState = "idle" | "sending" | "success" | "error";

export default function ContactPage() {
  const [submitState, setSubmitState] = useState<SubmitState>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitState("sending");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") || "").trim(),
      company: String(formData.get("company") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      phone: String(formData.get("phone") || "").trim(),
      message: String(formData.get("message") || "").trim(),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Contact request failed");
      }

      setSubmitState("success");
      form.reset();
    } catch (error) {
      console.error(error);
      setSubmitState("error");
    }
  }

  return (
    <main className="contact-page-v2">
      <section className="contact-v2-hero">
        <div className="contact-v2-bg" />

        <div className="contact-v2-container">
          <div className="contact-v2-copy">
            <span className="contact-v2-kicker">Global GPI</span>

            <h1>
              Let’s Build the Future of Materials.
            </h1>

            <p>
              Connect with Global GPI regarding advanced materials partnerships,
              commercial deployment, licensing, manufacturing collaboration,
              sustainability initiatives, and strategic opportunities.
            </p>

            <div className="contact-v2-proof-grid">
              <article className="contact-v2-proof-card primary">
                <span>Direct Contact</span>
                <h2>Email Charlie</h2>
                <a href="mailto:craymond@global-gpi.com">
                  craymond@global-gpi.com
                </a>
              </article>

              <article className="contact-v2-proof-card">
                <span>Collaboration Areas</span>
                <ul>
                  <li>Advanced materials development</li>
                  <li>Food-contact packaging systems</li>
                  <li>Sustainable plastics deployment</li>
                  <li>Industrial and commercial partnerships</li>
                </ul>
              </article>
            </div>
          </div>

          <aside className="contact-v2-panel" aria-label="Contact form">
            <div className="contact-v2-panel-header">
              <span>Partnership Inquiry</span>
              <h2>Start the Conversation</h2>
              <p>
                Share the application, market, or materials challenge you want
                to discuss.
              </p>
            </div>

            <form className="contact-v2-form" onSubmit={handleSubmit}>
              <div className="contact-v2-form-grid">
                <label className="contact-v2-field">
                  <span>Name</span>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your name"
                    autoComplete="name"
                  />
                </label>

                <label className="contact-v2-field">
                  <span>Company</span>
                  <input
                    type="text"
                    name="company"
                    placeholder="Company name"
                    autoComplete="organization"
                  />
                </label>
              </div>

              <div className="contact-v2-form-grid">
                <label className="contact-v2-field">
                  <span>Email</span>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="you@company.com"
                    autoComplete="email"
                  />
                </label>

                <label className="contact-v2-field">
                  <span>Phone</span>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Optional"
                    autoComplete="tel"
                  />
                </label>
              </div>

              <label className="contact-v2-field full">
                <span>Message</span>
                <textarea
                  name="message"
                  required
                  rows={7}
                  placeholder="Tell us about your project, partnership interest, or material application."
                />
              </label>

              <button
                className="contact-v2-submit"
                type="submit"
                disabled={submitState === "sending"}
              >
                {submitState === "sending" ? "Sending..." : "Submit Inquiry"}
              </button>

              {submitState === "success" && (
                <p className="contact-v2-status success">
                  Inquiry sent. The Global GPI team will follow up directly.
                </p>
              )}

              {submitState === "error" && (
                <p className="contact-v2-status error">
                  Something went wrong. Please email charlie@global-gpi.com directly.
                </p>
              )}
            </form>
          </aside>
        </div>
      </section>
    </main>
  );
}
