"use client";

import { useEffect, useRef } from "react";

export default function Home() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.45;
    }
  }, []);

  return (
    <main className="global-gpi-poster">
      <img
        src="/images/background_image.png"
        alt="Global GPI Background"
        className="global-gpi-image"
      />

      <section className="hero-content" aria-label="Global GPI hero">
        <img src="/images/logo.png" alt="Global GPI" className="hero-logo" />

        <h1 className="hero-title">
          Engineering <span>Safer</span> Materials.
          <br />
          Empowering <strong>Intelligent</strong> Systems.
        </h1>

        <p className="hero-subtitle">
          Two Pillars. One Purpose. A Sustainable Future.
        </p>
      </section>

      <section className="materials-panel" aria-label="Sustainable materials">
        <div className="materials-header">
          <div className="materials-icon">◌</div>
          <h2>SUSTAINABLE MATERIALS</h2>
          <p>Advanced materials for a cleaner, healthier world.</p>
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
          <img src="/images/single_use_hero.png" alt="Single-Use Plastics" />
          <div>
            <h3>Single-Use Plastics</h3>
            <p>
              Designed for performance in use and rapid end-of-life.
              Biodegradable or recyclable solutions.
            </p>
          </div>
        </a>

        <a className="material-card phantom-card" href="/materials/phantomfiber">
          <img src="/images/phantomfiber_hero.png" alt="PhantomFiber" />
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

        <img src="/images/overlay_video.png" alt="" className="earth-overlay" />
      </div>

      <section className="ai-panel" aria-label="AI systems">
        <div className="ai-header">
          <div className="ai-icon">⌬</div>
          <h2>AI SYSTEMS</h2>
          <p>Powered by Moral Clarity</p>
          <small>Execution-time AI. Controlled. Trusted. Accountable.</small>
        </div>

        <a className="ai-card" href="/ai/solacemed">
          <div className="ai-image-placeholder" aria-hidden="true">
            <span>IMAGE</span>
          </div>
          <div>
            <h3>SolaceMed</h3>
            <p>
              Intelligent systems for healthcare operations, compliance, and
              patient outcomes.
            </p>
          </div>
        </a>

        <a className="ai-card" href="/ai/solacelegal">
          <div className="ai-image-placeholder" aria-hidden="true">
            <span>IMAGE</span>
          </div>
          <div>
            <h3>SolaceLegal</h3>
            <p>
              AI systems for legal workflows, research, compliance, and
              document intelligence.
            </p>
          </div>
        </a>

        <a className="ai-card" href="/ai/solacetrade">
          <div className="ai-image-placeholder" aria-hidden="true">
            <span>IMAGE</span>
          </div>
          <div>
            <h3>SolaceTrade</h3>
            <p>
              AI solutions for trade intelligence, risk analysis, valuation,
              and commercial operations.
            </p>
          </div>
        </a>

        <div className="moral-clarity-card">
          <div className="shield-placeholder" aria-hidden="true">✓</div>
          <div>
            <h3>Built on Moral Clarity</h3>
            <p>
              Not what AI recommends — what AI is allowed to do. Ethical.
              Transparent. Aligned.
            </p>
          </div>
        </div>
      </section>

      <section className="solutions-strip" aria-label="Solutions for the real world">
        <div className="solutions-title">
          <span />
          <h2>SOLUTIONS FOR THE REAL WORLD</h2>
          <span />
        </div>

        <div className="solution-items">
          <div>FOOD SAFETY &amp;<br />PACKAGING</div>
          <div>AIR QUALITY &amp;<br />HVAC SYSTEMS</div>
          <div>HEALTHCARE<br />INFRASTRUCTURE</div>
          <div>INDUSTRIAL &amp;<br />MANUFACTURING</div>
          <div>CONSUMER &amp;<br />EVERYDAY USE</div>
          <div>ENVIRONMENTAL<br />STEWARDSHIP</div>
        </div>
      </section>

      <div className="footer-band">
        <p>MATERIAL SCIENCE. INTELLIGENT SYSTEMS. MEASURABLE IMPACT.</p>
      </div>
    </main>
  );
}
