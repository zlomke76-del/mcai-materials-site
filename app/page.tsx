import Link from "next/link";
import { externalCards, internalCards } from "@/lib/site-data";

export default function Home() {
  return (
    <main
      className="page-shell"
      style={{
        backgroundImage:
          "linear-gradient(rgba(5,10,8,0.72), rgba(5,10,8,0.82)), url('/images/background_image.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        minHeight: "100vh",
      }}
    >
      <section className="hero-grid">
        <div className="hero-panel">
          <div className="kicker">MCAI Materials Site</div>

          <h1>Materials intelligence for safer systems.</h1>

          <p className="lede">
            A fresh Global GPI-inspired build for applied materials,
            filtration, antimicrobial platforms, technical textiles,
            defense pathways, and governed AI infrastructure.
          </p>

          <div className="card-grid">
            {internalCards.map((card) => (
              <Link
                className="card"
                href={card.href}
                key={card.href}
              >
                <h2>{card.title}</h2>
                <p>{card.body}</p>
              </Link>
            ))}
          </div>
        </div>

        <aside className="side-stack">
          <div className="hero-panel">
            <span className="badge">External links</span>

            <div className="side-stack">
              {externalCards.map((card) => (
                <a
                  className="side-card"
                  href={card.href}
                  target="_blank"
                  rel="noreferrer"
                  key={card.href}
                >
                  <h2>{card.title}</h2>
                  <p>{card.body}</p>
                </a>
              ))}
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
}
