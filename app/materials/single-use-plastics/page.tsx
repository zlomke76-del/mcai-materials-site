export default function SingleUsePlasticsPage() {
  const applications = [
    {
      title: "Food Service Packaging",
      image: "/images/single_use_plastics/application_grid_01.png",
      bullets: [
        "Food-safe disposable containers",
        "Short-lifecycle packaging systems",
        "Engineered for clean end-of-life pathways",
      ],
    },
    {
      title: "Retail Carry Systems",
      image: "/images/single_use_plastics/application_grid_01.png",
      bullets: [
        "Shopping bags and lightweight carriers",
        "High usability during deployment",
        "Reduced long-term persistence goals",
      ],
    },
    {
      title: "Medical / Sanitary Systems",
      image: "/images/single_use_plastics/application_grid_01.png",
      bullets: [
        "Controlled-use disposables",
        "Contamination-sensitive environments",
        "Reliable performance under real conditions",
      ],
    },
    {
      title: "Agricultural Films",
      image: "/images/single_use_plastics/application_grid_01.png",
      bullets: [
        "Row covers and greenhouse systems",
        "Seasonal deployment materials",
        "Reduced environmental carry-forward",
      ],
    },
    {
      title: "Industrial Packaging",
      image: "/images/single_use_plastics/application_grid_01.png",
      bullets: [
        "Protective wraps and liners",
        "Logistics-ready material systems",
        "Built for scalable manufacturing",
      ],
    },
    {
      title: "Consumer Goods Packaging",
      image: "/images/single_use_plastics/application_grid_01.png",
      bullets: [
        "Flexible commercial packaging",
        "Supports sustainability initiatives",
        "Designed for broad deployment",
      ],
    },
  ];

  const technicalCards = [
    "/images/single_use_plastics/technical_01.png",
    "/images/single_use_plastics/technical_02.png",
    "/images/single_use_plastics/technical_03.png",
    "/images/single_use_plastics/technical_04.png",
    "/images/single_use_plastics/technical_05.png",
  ];

  const industrialCards = [
    "/images/single_use_plastics/industrial_01.png",
    "/images/single_use_plastics/industrial_02.png",
    "/images/single_use_plastics/industrial_03.png",
    "/images/single_use_plastics/industrial_04.png",
    "/images/single_use_plastics/industrial_05.png",
    "/images/single_use_plastics/industrial_06.png",
  ];

  return (
    <main className="single-use-page">
      {/* HERO */}
      <section className="single-use-hero">
        <div className="single-use-hero-grid">
          <div className="single-use-image-wrap">
            <img
              src="/images/single_use_hero.png"
              alt="Single-Use Plastics"
              className="single-use-hero-image"
            />
          </div>

          <div className="single-use-copy">
            <span className="single-use-kicker">
              Sustainable Materials
            </span>

            <h1>Single-Use Plastics</h1>

            <h2>
              Designed for Rapid End-of-Life
            </h2>

            <p>
              Our single-use plastic materials are
              engineered to remain fully functional
              during use, while enabling rapid
              biodegradation or recyclability after
              disposal.
            </p>

            <p>
              Typical applications include shopping
              bags, food-service packaging,
              protective wraps, disposable liners,
              and other everyday single-use items,
              with end-of-life pathways that support
              accelerated breakdown in industrial
              composting environments and reduced
              persistence in landfill conditions.
            </p>

            <p>
              These systems are designed to address
              the primary environmental failure point
              of conventional single-use plastics while
              maintaining practical usability during
              deployment.
            </p>

            <div className="single-use-actions">
              <a href="#applications">
                Explore Applications
              </a>

              <a href="#technical">
                Technical Overview
              </a>

              <a href="#deployment">
                Industrial Deployment
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* LIFECYCLE */}
      <section className="single-use-section">
        <div className="single-use-container">
          <div className="section-heading">
            <span>Lifecycle Engineering</span>

            <h2>
              Engineered for Use.
              Designed for Exit.
            </h2>

            <p>
              These systems are designed to maintain
              performance during deployment while
              supporting accelerated end-of-life
              reduction pathways after disposal.
            </p>
          </div>

          <img
            src="/images/single_use_plastics/lifecycle_01.png"
            alt="Single-use plastics lifecycle"
            className="single-use-full-image"
          />
        </div>
      </section>

      {/* APPLICATIONS */}
      <section
        className="single-use-section alt"
        id="applications"
      >
        <div className="single-use-container">
          <div className="section-heading center">
            <span>Commercial Applications</span>

            <h2>
              Applications Across
              Critical Industries
            </h2>

            <p>
              Designed for broad compatibility across
              packaging, logistics, medical,
              agricultural, and commercial deployment
              environments.
            </p>
          </div>

          <div className="applications-grid">
            {applications.map((app) => (
              <div
                className="application-card"
                key={app.title}
              >
                <img
                  src={app.image}
                  alt={app.title}
                />

                <div className="application-content">
                  <h3>{app.title}</h3>

                  <ul>
                    {app.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MATERIALS BANNER */}
      <section className="materials-banner-section">
        <img
          src="/images/single_use_plastics/materials_banner_01.png"
          alt="Engineered materials banner"
          className="materials-banner-image"
        />
      </section>

      {/* TECHNICAL */}
      <section
        className="single-use-section"
        id="technical"
      >
        <div className="single-use-container">
          <div className="section-heading">
            <span>Research & Validation</span>

            <h2>
              Technical Materials
              Development
            </h2>

            <p>
              Our materials programs focus on
              performance stability, deployment
              reliability, and engineered end-of-life
              reduction pathways across real-world
              operating conditions.
            </p>
          </div>

          <img
            src="/images/single_use_plastics/technical_banner.png"
            alt="Technical laboratory"
            className="single-use-full-image"
          />

          <div className="technical-grid">
            {technicalCards.map((card) => (
              <img
                key={card}
                src={card}
                alt="Technical materials research"
              />
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIAL */}
      <section
        className="single-use-section industrial-section"
        id="deployment"
      >
        <div className="single-use-container">
          <div className="section-heading center light">
            <span>Industrial Deployment</span>

            <h2>
              Built for Scalable
              Manufacturing
            </h2>

            <p>
              Designed for integration with modern
              packaging, manufacturing, and logistics
              systems while supporting evolving
              environmental requirements.
            </p>
          </div>

          <img
            src="/images/single_use_plastics/industrial_banner.png"
            alt="Industrial deployment"
            className="single-use-full-image"
          />

          <div className="industrial-grid">
            {industrialCards.map((card) => (
              <img
                key={card}
                src={card}
                alt="Industrial materials deployment"
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="single-use-cta">
        <div className="single-use-cta-box">
          <span>
            Materials Collaboration
          </span>

          <h2>
            Interested in Sustainable
            Materials Integration?
          </h2>

          <p>
            Discuss commercial deployment,
            packaging systems, industrial
            integration, and advanced material
            collaboration opportunities.
          </p>

          <div className="single-use-actions center">
            <a href="/contact">
              Request Technical Discussion
            </a>

            <a href="/contact">
              Explore Partnership Opportunities
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
