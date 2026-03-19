// app/page.tsx
// ============================================================
// MCAI MATERIALS — CONTROL AT THE MATERIAL LAYER
// Upgraded layout with hero, doctrine, visuals, and CTA
// ============================================================

import Link from "next/link";

export const metadata = {
  title: "Materials | MCAI",
  description:
    "Material platforms designed for environments where failure is silent and outcomes matter.",
  robots: { index: true, follow: true },
};

export default function HomePage() {
  return (
    <main className="bg-[#0A0F17] text-[#E9F0FA]">
      {/* ===================================================== */}
      {/* HERO */}
      {/* ===================================================== */}
      <section className="relative mx-auto max-w-6xl px-6 pt-28 pb-24">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-widest text-neutral-400">
            MCAI Materials
          </p>

          <h1 className="mt-6 text-4xl font-semibold leading-tight md:text-5xl">
            Failure is invisible.
            <br />
            Control should not be.
          </h1>

          <p className="mt-6 text-lg text-neutral-300 leading-relaxed">
            These materials operate at the layer where outcomes are determined—
            not after failure, but within the system itself.
          </p>

          <div className="mt-10 flex gap-4">
            <button className="rounded-md bg-[#F7C86A] px-6 py-3 text-sm font-medium text-black hover:opacity-90">
              Request Technical Brief
            </button>

            <a
              href="#materials"
              className="rounded-md border border-neutral-600 px-6 py-3 text-sm text-neutral-300 hover:border-neutral-400"
            >
              Explore Materials
            </a>
          </div>
        </div>
      </section>

      {/* ===================================================== */}
      {/* DESIGN PRINCIPLE */}
      {/* ===================================================== */}
      <section className="mx-auto max-w-4xl px-6 py-20 text-center">
        <p className="text-sm tracking-wide text-[#F7C86A]">
          ⚖️ Design Principle
        </p>

        <p className="mt-6 text-xl leading-relaxed text-neutral-200">
          Responsibility should not depend on perfect behavior, perfect
          maintenance, or perfect conditions.
          <br />
          <span className="text-white">
            It should exist within the system itself.
          </span>
        </p>
      </section>

      {/* ===================================================== */}
      {/* FAILURE LAYER */}
      {/* ===================================================== */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-3">
          {[
            {
              title: "Surface Contamination",
              text: "Bacterial exposure occurs continuously in food-contact environments.",
            },
            {
              title: "Moisture Accumulation",
              text: "Condensation forms in infrastructure systems where elimination is not feasible.",
            },
            {
              title: "Maintenance Dependency",
              text: "Many systems rely on repeated human intervention to remain safe.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-neutral-800 bg-[#0E1522] p-6"
            >
              <h3 className="text-lg font-medium">{item.title}</h3>
              <p className="mt-3 text-sm text-neutral-400 leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ===================================================== */}
      {/* MATERIALS */}
      {/* ===================================================== */}
      <section
        id="materials"
        className="mx-auto max-w-6xl px-6 py-20"
      >
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {/* BioSyntar */}
          <article className="flex flex-col justify-between rounded-xl border border-emerald-400/20 bg-emerald-400/5 p-10 transition hover:shadow-lg">
            <div>
              <h2 className="text-xl font-semibold text-emerald-300">
                BioSyntar™
              </h2>

              <p className="mt-4 text-sm text-emerald-200">
                Persistent antimicrobial protection at the material layer
              </p>

              <p className="mt-3 text-[11px] uppercase tracking-wider text-emerald-400">
                Status: Lab + Early Validation
              </p>

              <p className="mt-6 text-neutral-300 leading-relaxed">
                BioSyntar™ is a family of ultra-thin, biodegradable microfilms
                engineered for food-contact environments where surface-level
                bacterial exposure matters.
              </p>

              <p className="mt-4 text-neutral-400 leading-relaxed">
                Antimicrobial functionality is embedded directly into the
                material structure, allowing protection to persist throughout
                use without reliance on coatings or reactive treatments.
              </p>
            </div>

            <div className="mt-10">
              <Link
                href="/biosyntar"
                className="text-sm text-emerald-300 underline underline-offset-4 hover:text-emerald-200"
              >
                View Technical Overview →
              </Link>
            </div>
          </article>

          {/* PolyVerdia */}
          <article className="flex flex-col justify-between rounded-xl border border-sky-400/20 bg-sky-400/5 p-10 transition hover:shadow-lg">
            <div>
              <h2 className="text-xl font-semibold text-sky-300">
                PolyVerdia™
              </h2>

              <p className="mt-4 text-sm text-sky-200">
                Moisture-driven microbial risk control inside infrastructure
                systems
              </p>

              <p className="mt-3 text-[11px] uppercase tracking-wider text-sky-400">
                Status: Applied Research
              </p>

              <p className="mt-6 text-neutral-300 leading-relaxed">
                PolyVerdia™ is a moisture-active polymer platform designed for
                environments where condensation and microbial growth are
                structurally difficult to eliminate.
              </p>

              <p className="mt-4 text-neutral-400 leading-relaxed">
                It operates at the material layer—reducing reliance on recurring
                chemical treatments or procedural controls in infrastructure
                systems.
              </p>
            </div>

            <div className="mt-10">
              <Link
                href="/polyverdia"
                className="text-sm text-sky-300 underline underline-offset-4 hover:text-sky-200"
              >
                View Technical Overview →
              </Link>
            </div>
          </article>
        </div>
      </section>

      {/* ===================================================== */}
      {/* RESPONSIBILITY STACK */}
      {/* ===================================================== */}
      <section className="mx-auto max-w-4xl px-6 py-24 text-center">
        <div className="space-y-3 text-sm text-neutral-400">
          <div>Monitoring</div>
          <div>Cleaning</div>
          <div>Maintenance</div>
        </div>

        <div className="mt-6 border-t border-neutral-700 pt-6">
          <p className="text-lg text-[#F7C86A]">
            Material Behavior (Control Layer)
          </p>
        </div>

        <p className="mt-8 text-neutral-300 leading-relaxed">
          Most systems rely on behavior.
          <br />
          We place responsibility where failure cannot be deferred.
        </p>
      </section>

      {/* ===================================================== */}
      {/* WHO THIS IS FOR */}
      {/* ===================================================== */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-3">
          {[
            {
              title: "Packaging Engineers",
              text: "Reduce contamination risk without increasing process complexity.",
            },
            {
              title: "Infrastructure Operators",
              text: "Address microbial growth where moisture cannot be eliminated.",
            },
            {
              title: "R&D Partners",
              text: "Explore new material-layer control strategies for real-world systems.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-neutral-800 bg-[#0E1522] p-6"
            >
              <h3 className="text-lg font-medium">{item.title}</h3>
              <p className="mt-3 text-sm text-neutral-400 leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ===================================================== */}
      {/* FINAL CTA */}
      {/* ===================================================== */}
      <section className="text-center px-6 py-24">
        <p className="text-xl text-neutral-200 leading-relaxed">
          This is not a product catalog.
          <br />
          <span className="text-white">
            It is a shift in where responsibility is placed.
          </span>
        </p>

        <button className="mt-10 rounded-md bg-[#F7C86A] px-8 py-4 text-sm font-medium text-black hover:opacity-90">
          Explore Partnership
        </button>
      </section>

      {/* ===================================================== */}
      {/* FOOTER */}
      {/* ===================================================== */}
      <footer className="mx-auto max-w-3xl px-6 pb-20">
        <p className="text-sm text-neutral-500 leading-relaxed">
          This site presents high-level material information only. No commercial,
          regulatory, or performance claims are made. Specific suitability and
          compliance depend on application context and implementation.
        </p>
      </footer>
    </main>
  );
}
