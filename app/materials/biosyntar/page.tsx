const applications = [
  {
    title: "Fresh Seafood Packaging",
    image: "/images/biosyntar/biosyntar_applications_01.png",
    bullets: [
      "Helps inhibit bacterial growth on seafood-contact surfaces",
      "Maintains color, texture, and refrigerated freshness",
      "Supports extended shelf-life performance",
    ],
  },
  {
    title: "Produce Packaging",
    image: "/images/biosyntar/biosyntar_applications_02.png",
    bullets: [
      "Protects delicate produce surfaces",
      "Reduces spoilage and microbial growth conditions",
      "Supports freshness from farm to table",
    ],
  },
  {
    title: "Ready-to-Eat Packaging",
    image: "/images/biosyntar/biosyntar_applications_03.png",
    bullets: [
      "Helps reduce surface contamination risk",
      "Supports food safety for prepared meals",
      "Maintains quality and consumer confidence",
    ],
  },
  {
    title: "Dairy & Refrigerated Products",
    image: "/images/biosyntar/biosyntar_applications_04.png",
    bullets: [
      "Designed for chilled food-contact packaging",
      "Supports freshness, clarity, and product quality",
      "Useful for dairy, cheese, and refrigerated foods",
    ],
  },
  {
    title: "Flexible Film Systems",
    image: "/images/biosyntar/biosyntar_applications_05.png",
    bullets: [
      "Integrated protection in wraps, liners, and sealing films",
      "Maintains flexibility, transparency, and handling performance",
      "Designed for broad food-packaging formats",
    ],
  },
  {
    title: "Commercial Food Distribution",
    image: "/images/biosyntar/biosyntar_applications_06.png",
    bullets: [
      "Supports cold-chain protection from production to delivery",
      "Reduces risk during transport and handling",
      "Designed for scale across commercial food systems",
    ],
  },
];

const technicalImages = [
  "/images/biosyntar/biosyntar_technical_01.png",
  "/images/biosyntar/biosyntar_technical_02.png",
  "/images/biosyntar/biosyntar_technical_03.png",
  "/images/biosyntar/biosyntar_technical_04.png",
  "/images/biosyntar/biosyntar_technical_05.png",
  "/images/biosyntar/biosyntar_technical_06.png",
  "/images/biosyntar/biosyntar_technical_07.png",
  "/images/biosyntar/biosyntar_technical_08.png",
];

const industryImages = [
  "/images/biosyntar/biosyntar_industry_01.png",
  "/images/biosyntar/biosyntar_industry_02.png",
  "/images/biosyntar/biosyntar_industry_03.png",
  "/images/biosyntar/biosyntar_industry_04.png",
  "/images/biosyntar/biosyntar_industry_05.png",
  "/images/biosyntar/biosyntar_industry_06.png",
];

export default function BioSyntarPage() {
  return (
    <main className="biosyntar-page">
      <section className="biosyntar-hero">
        <div className="biosyntar-hero-grid">
          <div className="biosyntar-image-wrap">
            <img
              src="/images/biosyntar_hero.png"
              alt="BioSyntar food-contact packaging"
              className="biosyntar-hero-image"
            />
          </div>

          <div className="biosyntar-copy">
            <span className="biosyntar-kicker">Sustainable Materials</span>

            <h1>BioSyntar™</h1>

            <h2>
              Biodegradable Antibacterial Microfilms
              for Food Safety
            </h2>

            <p>
              BioSyntar™ is a family of ultra-thin, biodegradable antibacterial
              microfilms designed specifically for food-contact packaging,
              including wraps, liners, and protective films used in fresh and
              refrigerated foods.
            </p>

            <p>
              Engineered to help reduce bacterial contamination at the surface
              level, BioSyntar™ delivers permanent antibacterial protection
              without coatings, heavy metals, or leaching chemistries,
              supporting safer food handling while maintaining clarity,
              flexibility, and mechanical performance.
            </p>

            <p>
              Made from renewable feedstocks, BioSyntar™ microfilms are designed
              to perform during use and break down responsibly at end-of-life,
              helping improve food safety outcomes while reducing environmental
              impact.
            </p>

            <div className="biosyntar-actions">
              <a href="#applications">Explore Applications</a>
              <a href="#science">Technical Validation</a>
              <a href="#industry">Industrial Deployment</a>
            </div>
          </div>
        </div>
      </section>

      <section className="biosyntar-section">
        <div className="biosyntar-container">
          <div className="biosyntar-heading">
            <span>Lifecycle Engineering</span>
            <h2>Advanced Protection. Responsible by Design.</h2>
            <p>
              BioSyntar™ microfilms are engineered to protect food-contact
              surfaces during use, support refrigerated freshness, and provide a
              responsible end-of-life pathway after disposal.
            </p>
          </div>

          <img
            src="/images/biosyntar/biosyntar_lifecycle_01.png"
            alt="BioSyntar lifecycle graphic"
            className="biosyntar-full-image"
          />
        </div>
      </section>

      <section className="biosyntar-section biosyntar-alt" id="applications">
        <div className="biosyntar-container">
          <div className="biosyntar-heading center">
            <span>Food-Contact Applications</span>
            <h2>Protection Across Every Point of Food Contact</h2>
            <p>
              Designed for fresh, chilled, wrapped, sealed, and distributed food
              systems where antibacterial surface performance and biodegradable
              material strategy both matter.
            </p>
          </div>

          <div className="biosyntar-applications-grid">
            {applications.map((application) => (
              <article className="biosyntar-application-card" key={application.title}>
                <img src={application.image} alt={application.title} />

                <div className="biosyntar-card-content">
                  <h3>{application.title}</h3>
                  <ul>
                    {application.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="biosyntar-banner-section">
        <img
          src="/images/biosyntar/biosyntar_applications_headbanner_01.png"
          alt="BioSyntar food safety applications banner"
          className="biosyntar-banner-image"
        />
      </section>

      <section className="biosyntar-section" id="science">
        <div className="biosyntar-container">
          <div className="biosyntar-heading">
          />

          <div className="biosyntar-technical-grid">
            {technicalImages.slice(1).map((image) => (
              <img key={image} src={image} alt="BioSyntar technical validation" />
            ))}
          </div>
        </div>
      </section>

      <section className="biosyntar-section biosyntar-industrial" id="industry">
        <div className="biosyntar-container">
          <div className="biosyntar-heading center light">
            <span>Industrial Deployment</span>
            <h2>Built for Industry. Deployed at Scale.</h2>
            <p>
              BioSyntar™ is designed for integration into commercial packaging,
              cold-chain logistics, food processing lines, and retail-ready
              distribution systems.
            </p>
          </div>

          <img
            src="/images/biosyntar/biosyntar_industry_headbanner_01.png"
            alt="BioSyntar industrial food packaging deployment"
            className="biosyntar-full-image"
          />

          <div className="biosyntar-industrial-grid">
            {industryImages.map((image) => (
              <img key={image} src={image} alt="BioSyntar industrial deployment" />
            ))}
          </div>
        </div>
      </section>

      <section className="biosyntar-cta">
        <div className="biosyntar-cta-box">
          <span>Food Safety Materials Collaboration</span>
          <h2>Ready to Explore Antibacterial Food Packaging?</h2>
          <p>
            Discuss packaging integration, technical validation, pilot programs,
            and commercial deployment opportunities for BioSyntar™ microfilms.
          </p>

          <div className="biosyntar-actions center">
            <a href="/contact">Request Technical Discussion</a>
            <a href="/contact">Explore Partnership Opportunities</a>
          </div>
        </div>
      </section>
    </main>
  );
}
