export default function PolyVerdiaPage() {
  const applications = [
    {
      title: "Air-Handling Units",
      image: "/images/polyverdia/polyverdia_hvac_01.png",
      bullets: [
        "Protects internal surfaces from moisture accumulation",
        "Helps reduce conditions that support microbial growth",
        "Supports long-term HVAC system hygiene",
      ],
    },
    {
      title: "Condensate Pans",
      image: "/images/polyverdia/polyverdia_hvac_02.png",
      bullets: [
        "Targets standing-water accumulation zones",
        "Helps reduce microbial proliferation risk",
        "Supports cleaner pan environments",
      ],
    },
    {
      title: "HVAC Drain Zones",
      image: "/images/polyverdia/polyverdia_hvac_03.png",
      bullets: [
        "Designed for moisture-prone drain-line areas",
        "Helps limit biofilm-supporting conditions",
        "Supports improved drainage performance",
      ],
    },
    {
      title: "Cooling Coils",
      image: "/images/polyverdia/polyverdia_hvac_04.png",
      bullets: [
        "Helps manage moisture on coil-adjacent surfaces",
        "Supports reduced microbial risk conditions",
        "Contributes to cleaner coil operation",
      ],
    },
    {
      title: "Filter Housings",
      image: "/images/polyverdia/polyverdia_hvac_05.png",
      bullets: [
        "Protects areas prone to moisture buildup",
        "Helps reduce microbial growth on surfaces",
        "Supports longer service intervals",
      ],
    },
    {
      title: "Commercial Building Systems",
      image: "/images/polyverdia/polyverdia_hvac_06.png",
      bullets: [
        "Supports healthier indoor environments",
        "Helps reduce maintenance requirements",
        "Ideal for hospitals, hotels, offices, and institutional facilities",
      ],
    },
  ];

  const technicalCards = [
    "/images/polyverdia/polyverdia_technical_01.png",
    "/images/polyverdia/polyverdia_technical_02.png",
    "/images/polyverdia/polyverdia_technical_03.png",
    "/images/polyverdia/polyverdia_technical_04.png",
    "/images/polyverdia/polyverdia_technical_05.png",
    "/images/polyverdia/polyverdia_technical_06.png",
  ];

  const industrialCards = [
    "/images/polyverdia/polyverdia_industrial_01.png",
    "/images/polyverdia/polyverdia_industrial_02.png",
    "/images/polyverdia/polyverdia_industrial_03.png",
    "/images/polyverdia/polyverdia_industrial_04.png",
    "/images/polyverdia/polyverdia_industrial_05.png",
  ];

  return (
    <main className="polyverdia-page">
      <section className="polyverdia-hero">
        <div className="polyverdia-hero-grid">
          <div className="polyverdia-image-wrap">
            <img
              src="/images/polyverdia_hero.png"
              alt="PolyVerdia moisture-active HVAC protection"
              className="polyverdia-hero-image"
            />
          </div>

          <div className="polyverdia-copy">
            <span className="polyverdia-kicker">
              Sustainable Materials
            </span>

            <h1>PolyVerdia™</h1>

            <h2>
              Moisture-Active Protection
              for HVAC Systems
            </h2>

            <p>
              PolyVerdia™ is a moisture-active polymer platform designed to help
              reduce microbial growth within HVAC systems, including air-handling
              units, condensate zones, cooling coils, filter housings, and other
              moisture-prone components.
            </p>

            <p>
              By protecting known moisture accumulation points inside HVAC
              infrastructure, PolyVerdia™ helps address conditions associated with
              Legionella proliferation, reducing risk at the material level rather
              than relying only on reactive chemical treatments or ongoing
              maintenance interventions.
            </p>

            <p>
              The platform is designed for integration into real HVAC operating
              environments, supporting cleaner systems, longer equipment life, and
              more reliable building performance.
            </p>

            <div className="polyverdia-actions">
              <a href="#applications">
                Explore Applications
              </a>

              <a href="#technical">
                Technical Overview
              </a>

              <a href="#deployment">
                Deployment Pathways
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="polyverdia-section">
        <div className="polyverdia-container">
          <div className="polyverdia-heading">
            <span>Lifecycle Protection</span>

            <h2>
              Targets Moisture Where
              Microbial Risk Begins.
            </h2>

            <p>
              PolyVerdia™ is designed to operate at known HVAC moisture
              accumulation points, helping reduce conditions that support microbial
              proliferation while preserving normal system performance.
            </p>
          </div>

          <img
            src="/images/polyverdia/polyverdia_lifecycle_01.png"
            alt="PolyVerdia protection lifecycle"
            className="polyverdia-full-image"
          />
        </div>
      </section>

      <section
        className="polyverdia-section polyverdia-alt"
        id="applications"
      >
        <div className="polyverdia-container">
          <div className="polyverdia-heading center">
            <span>HVAC Applications</span>

            <h2>
              Engineered for Critical
              HVAC Environments
            </h2>

            <p>
              PolyVerdia™ is designed for the hidden environments where moisture,
              airflow, surface exposure, and maintenance realities intersect.
            </p>
          </div>

          <div className="polyverdia-applications-grid">
            {applications.map((application) => (
              <div
                className="polyverdia-application-card"
                key={application.title}
              >
                <img
                  src={application.image}
                  alt={application.title}
                />

                <div className="polyverdia-card-content">
                  <h3>{application.title}</h3>

                  <ul>
                    {application.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="polyverdia-banner-section">
        <img
          src="/images/polyverdia/polyverdia_hvac_headbanner_01.png"
          alt="PolyVerdia moisture-active protection banner"
          className="polyverdia-banner-image"
        />
      </section>

      <section
        className="polyverdia-section"
        id="technical"
      >
        <div className="polyverdia-container">
          <div className="polyverdia-heading">
            <span>Research & Validation</span>

            <h2>
              Technical Materials
              Development
            </h2>

            <p>
              PolyVerdia™ development focuses on moisture interaction, surface
              performance, HVAC material compatibility, and validation under
              realistic operating conditions.
            </p>
          </div>

          <img
            src="/images/polyverdia/polyverdia_technical_01.png"
            alt="PolyVerdia technical materials development"
            className="polyverdia-full-image"
          />

          <div className="polyverdia-technical-grid">
            {technicalCards.map((card) => (
              <img
                key={card}
                src={card}
                alt="PolyVerdia technical validation"
              />
            ))}
          </div>
        </div>
      </section>

      <section
        className="polyverdia-section polyverdia-industrial"
        id="deployment"
      >
        <div className="polyverdia-container">
          <div className="polyverdia-heading center light">
            <span>Industrial Deployment</span>

            <h2>
              Built for Real-World
              HVAC Systems.
            </h2>

            <p>
              Designed for integration across rooftop units, mechanical rooms,
              facility maintenance programs, and commercial building environments.
            </p>
          </div>

          <img
            src="/images/polyverdia/polyverdia_industrial_banner.png"
            alt="PolyVerdia industrial deployment"
            className="polyverdia-full-image"
          />

          <div className="polyverdia-industrial-grid">
            {industrialCards.map((card) => (
              <img
                key={card}
                src={card}
                alt="PolyVerdia HVAC deployment"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="polyverdia-cta">
        <div className="polyverdia-cta-box">
          <span>HVAC Materials Collaboration</span>

          <h2>
            Protecting Performance.
            Preserving Systems.
          </h2>

          <p>
            Discuss PolyVerdia™ integration for HVAC equipment, condensate zones,
            commercial facilities, and moisture-prone building systems.
          </p>

          <div className="polyverdia-actions center">
            <a href="/contact">
              Request Technical Discussion
            </a>

            <a href="/contact">
              Explore Deployment Partnership
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
