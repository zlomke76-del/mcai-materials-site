"use client";

import { useEffect, useRef, useState } from "react";

export default function Home() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.65;
    }
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      setStatus("sending");

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed");
      }

      setStatus("success");

      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (err) {
      setStatus("error");
    }
  }

  return (
    <main className="global-gpi-poster">
      <img
        src="/images/background_image.png"
        alt="Global GPI Background"
        className="global-gpi-image"
      />

      <section className="hero-top" aria-label="Global GPI hero message">
        <img src="/images/logo.png" alt="Global GPI" className="hero-logo" />

        <h1 className="hero-title">
          Engineering <span className="green">Safer</span> Materials.
          <br />
          Empowering <span className="blue">Intelligent</span> Systems.
        </h1>

        <p className="hero-subtitle">
          Two Pillars. One Purpose. A Sustainable Future.
        </p>
      </section>

      <section className="materials-panel" aria-label="Sustainable materials">
        <div className="materials-header">
          <div className="materials-icon" aria-hidden="true">
            ◌
          </div>

          <h2>SUSTAINABLE MATERIALS</h2>

          <p>
            Advanced materials for a cleaner, healthier world.
          </p>
        </div>

        <a className="material-card" href="/materials/biosyntar">
          <img src="/images/biosyntar_hero.png" alt="BioSyntar" />

          <div>
            <h3>BioSyntar</h3>

            <p>
              Biodegradable antibacterial microfilms for food safety and
              food-contact packaging.
            </p>
          </div>
        </a>

        <a className="material-card" href="/materials/polyverdia">
          <img src="/images/polyverdia_hero.png" alt="PolyVerdia" />

          <div>
            <h3>PolyVerdia</h3>

            <p>
              Moisture-active protection for HVAC systems. Helps reduce
              microbial growth where it starts.
            </p>
          </div>
        </a>

        <a className="material-card" href="/materials/single-use-plastics">
          <img
            src="/images/single_use_hero.png"
            alt="Single-Use Plastics"
          />

          <div>
            <h3>Single-Use Plastics</h3>

            <p>
              Designed for performance in use and rapid end-of-life.
              Biodegradable or recyclable solutions.
            </p>
          </div>
        </a>

        <a
          className="material-card phantom-card"
          href="https://neuroviaapplieddefense.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/images/phantomfiber_hero.png"
            alt="PhantomFiber"
          />

          <div>
            <h3>PhantomFiber™</h3>

            <p>
              Proprietary platform technology that delivers embedded
              antibacterial performance at the material level.
            </p>
          </div>
        </a>
      </section>

      <div className="earth-video-wrap" aria-hidden="true">
        <video
          ref={videoRef}
          className="earth-video"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/video/earth_01.mp4" type="video/mp4" />
        </video>

        <img
          src="/images/overlay_video.png"
          alt=""
          className="earth-overlay"
        />
      </div>

      <section className="ai-panel" aria-label="AI systems">
        <div className="ai-header">
          <div className="ai-icon" aria-hidden="true">
            ⬡
          </div>

          <h2>
            AI SYSTEMS
            <span>Powered by Moral Clarity</span>
          </h2>

          <p>
            Execution-time AI. Controlled. Trusted. Accountable.
          </p>
        </div>

        <a
          className="ai-card"
          href="https://www.solacemed.ai"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/images/solacemed_hero.png"
            alt="SolaceMed"
            className="ai-card-image"
          />

          <div>
            <h3>SolaceMed</h3>

            <p>
              Intelligent systems for healthcare operations,
              compliance, and patient outcomes.
            </p>
          </div>
        </a>

        <a
          className="ai-card"
          href="https://www.solacelegal.ai"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/images/solacelegal_hero.png"
            alt="SolaceLegal"
            className="ai-card-image"
          />

          <div>
            <h3>SolaceLegal</h3>

            <p>
              AI systems for legal workflows, research,
              compliance, and document intelligence.
            </p>
          </div>
        </a>

        <a
          className="ai-card"
          href="https://www.solacetrade.ai"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/images/solacetrade_hero.png"
            alt="SolaceTrade"
            className="ai-card-image"
          />

          <div>
            <h3>SolaceTrade</h3>

            <p>
              AI solutions for trade intelligence, risk analysis,
              valuation, and commercial operations.
            </p>
          </div>
        </a>

        <div className="governance-card">
          <div className="governance-mark" aria-hidden="true">
            ✓
          </div>

          <div>
            <h3>Built on Moral Clarity</h3>

            <p>
              Not what AI recommends — what AI is allowed to do.
              Ethical. Transparent. Aligned.
            </p>
          </div>
        </div>
      </section>

      <section className="contact-form-panel" aria-label="Contact Global GPI">
        <h2>Contact Us</h2>

        <p>
          Connect directly with Charlie and the Global GPI team.
        </p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Full Name"
            required
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
          />

          <input
            type="text"
            placeholder="Company"
            value={formData.company}
            onChange={(e) =>
              setFormData({ ...formData, company: e.target.value })
            }
          />

          <input
            type="email"
            placeholder="Email Address"
            required
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />

          <input
            type="tel"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
          />

          <textarea
            placeholder="Tell us about your project, partnership interest, or inquiry..."
            required
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
          />

          <button type="submit">
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>

          {status === "success" && (
            <div className="contact-success">
              Message sent successfully.
            </div>
          )}

          {status === "error" && (
            <div className="contact-error">
              Unable to send message. Please try again.
            </div>
          )}
        </form>
      </section>

      <div
        className="footer-band"
        aria-label="Global GPI mission statement"
      >
        <p>
          MATERIAL SCIENCE. INTELLIGENT SYSTEMS. MEASURABLE IMPACT.
        </p>
      </div>
    </main>
  );
}
