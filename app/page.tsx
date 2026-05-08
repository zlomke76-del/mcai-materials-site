export default function Page() {
  return (
    <main className="global-gpi-poster">
      <img
        src="/images/background-composite.jpg"
        alt="Global GPI"
        className="global-gpi-image"
      />

      <section className="hero-top">
        <img
          src="/images/logo.png"
          alt="Global GPI"
          className="hero-logo"
        />

        <h1 className="hero-title">
          Engineering <span className="green">Safer</span> Materials.
          <br />
          Empowering <span className="blue">Intelligent</span> Systems.
        </h1>

        <p className="hero-subtitle">
          Two Pillars. One Purpose. A Sustainable Future.
        </p>
      </section>

      <section className="materials-panel">
        <div className="materials-header">
          <div className="materials-icon">◌</div>
          <h2>SUSTAINABLE MATERIALS</h2>
          <p>
            Advanced materials engineered for cleaner infrastructure,
            safer packaging, and measurable environmental impact.
          </p>
        </div>

        <div className="material-card">
          <img src="/images/biosyntar.jpg" alt="BioSyntar" />
          <div>
            <h3>BioSyntar</h3>
            <p>
              Biodegradable antibacterial microfilms for food safety
              and food-contact packaging.
            </p>
          </div>
        </div>

        <div className="material-card">
          <img src="/images/polyverdia.jpg" alt="PolyVerdia" />
          <div>
            <h3>PolyVerdia</h3>
            <p>
              Moisture-active protection for HVAC systems that helps
              reduce microbial growth where it starts.
            </p>
          </div>
        </div>

        <div className="material-card">
          <img src="/images/plastics.jpg" alt="Single Use Plastics" />
          <div>
            <h3>Single-Use Plastics</h3>
            <p>
              Biodegradable and recyclable performance materials designed
              for modern consumer and industrial use.
            </p>
          </div>
        </div>

        <div className="material-card phantom-card">
          <img src="/images/phantomfiber.jpg" alt="PhantomFiber" />
          <div>
            <h3>PhantomFiber™</h3>
            <p>
              Proprietary platform technology delivering embedded
              antibacterial performance directly at the material level.
            </p>
          </div>
        </div>
      </section>

      <section className="earth-video-wrap">
        <video
          className="earth-video"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/videos/earth.mp4" type="video/mp4" />
        </video>

        <img
          src="/images/earth-overlay.png"
          alt="Overlay"
          className="earth-overlay"
        />
      </section>

      <section className="ai-panel">
        <div className="ai-header">
          <h2>AI SYSTEMS</h2>
          <p>
            Execution-time AI systems built for accountability,
            governance, operational trust, and measurable outcomes.
          </p>
        </div>

        <div className="ai-card">
          <div className="ai-image-placeholder" />
          <div>
            <h3>SolaceMed</h3>
            <p>
              Intelligent systems for healthcare operations,
              compliance workflows, and patient-centered infrastructure.
            </p>
          </div>
        </div>

        <div className="ai-card">
          <div className="ai-image-placeholder" />
          <div>
            <h3>SolaceLegal</h3>
            <p>
              AI systems for legal operations, research,
              governance review, and document intelligence.
            </p>
          </div>
        </div>

        <div className="ai-card">
          <div className="ai-image-placeholder" />
          <div>
            <h3>SolaceTrade</h3>
            <p>
              AI-driven systems for trade intelligence,
              risk analysis, valuation workflows, and commercial operations.
            </p>
          </div>
        </div>

        <div className="governance-card">
          <h3>Built on Moral Clarity</h3>
          <p>
            Not what AI recommends — what AI is allowed to do.
            Ethical. Transparent. Aligned.
          </p>
        </div>
      </section>

      <div className="footer-band">
        <p>
          MATERIAL SCIENCE. INTELLIGENT SYSTEMS. MEASURABLE IMPACT.
        </p>
      </div>
    </main>
  )
}
