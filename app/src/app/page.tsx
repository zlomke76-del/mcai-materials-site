// app/page.tsx
// ============================================================
// MATERIALS INDEX — MCAI Materials Site
// Color-forward, serious, high-consequence materials
// ============================================================

import Link from "next/link";

export const metadata = {
  title: "Materials | MCAI",
  description:
    "Advanced material platforms designed for environments where safety, durability, and end-of-life behavior have real consequences.",
  robots: { index: true, follow: true },
};

export default function HomePage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-20">
      {/* ===================================================== */}
      {/* HEADER */}
      {/* ===================================================== */}
      <header className="mb-20 max-w-3xl">
        <h1 className="text-3xl font-semibold tracking-tight text-neutral-900">
          Materials
        </h1>

        <div className="mt-6 h-px w-20 bg-neutral-400" />

        <p className="mt-8 text-base leading-relaxed text-neutral-800">
          These materials exist because conventional materials fail silently —
          in food systems, building infrastructure, and the environments people
          rely on every day.
        </p>

        <p className="mt-4 text-base leading-relaxed text-neutral-600">
          The focus is not novelty. It is control at the material level: how
          surfaces behave, how moisture interacts, how long materials persist,
          and what happens when their useful life ends.
        </p>

        {/* === MATERIALS DOCTRINE === */}
        <p className="mt-6 text-base leading-relaxed text-neutral-700">
          These materials are designed where responsibility cannot be deferred —
          at the layer where physical systems shape human outcomes.
        </p>
      </header>

      {/* ===================================================== */}
      {/* MATERIAL CARDS */}
      {/* ===================================================== */}
      <section className="grid grid-cols-1 gap-12 md:grid-cols-2">
        {/* ------------------------------------------------- */}
        {/* BioSyntar */}
        {/* ------------------------------------------------- */}
        <article className="flex h-full flex-col justify-between rounded-xl border border-emerald-200 bg-emerald-50/60 p-10 shadow-sm transition hover:shadow-md">
          <div>
            <h2 className="text-xl font-semibold text-emerald-900">
              BioSyntar™
            </h2>

            <p className="mt-3 text-sm font-medium tracking-wide text-emerald-800">
              Biodegradable antibacterial microfilms
            </p>

            <p className="mt-3 text-[11px] uppercase tracking-wider text-emerald-700">
              Problem domain: food-contact surface contamination
            </p>

            <p className="mt-7 text-base leading-relaxed text-neutral-800">
              BioSyntar™ is a family of ultra-thin, biodegradable microfilms
              engineered specifically for food-contact environments where
              surface-level bacterial exposure matters.
            </p>

            <p className="mt-4 text-base leading-relaxed text-neutral-700">
              Rather than relying on coatings or reactive treatments,
              antibacterial functionality is built directly into the material
              structure, allowing protection to persist throughout use while
              maintaining clarity, flexibility, and mechanical performance.
            </p>

            <p className="mt-4 text-base leading-relaxed text-neutral-600">
              Designed from renewable feedstocks, BioSyntar™ materials are
              intended to perform during use and degrade responsibly at
              end-of-life — addressing food safety and environmental persistence
              as a single design problem.
            </p>
          </div>

          <div className="mt-10">
            <Link
              href="/biosyntar"
              className="inline-flex items-center text-sm font-medium text-emerald-900 underline underline-offset-4 hover:text-emerald-700"
            >
              BioSyntar™ — technical overview
            </Link>
          </div>
        </article>

        {/* ------------------------------------------------- */}
        {/* PolyVerdia */}
        {/* ------------------------------------------------- */}
        <article className="flex h-full flex-col justify-between rounded-xl border border-sky-200 bg-sky-50/60 p-10 shadow-sm transition hover:shadow-md">
          <div>
            <h2 className="text-xl font-semibold text-sky-900">
              PolyVerdia™
            </h2>

            <p className="mt-3 text-sm font-medium tracking-wide text-sky-800">
              Moisture-active polymer protection
            </p>

            <p className="mt-3 text-[11px] uppercase tracking-wider text-sky-700">
              Problem domain: moisture-driven microbial growth in infrastructure
            </p>

            <p className="mt-7 text-base leading-relaxed text-neutral-800">
              PolyVerdia™ is a moisture-active polymer platform designed for
              infrastructure environments where condensation and microbial
              growth are structurally difficult to eliminate.
            </p>

            <p className="mt-4 text-base leading-relaxed text-neutral-700">
              By targeting known moisture accumulation zones inside HVAC systems
              and related infrastructure, PolyVerdia™ operates at the material
              layer — reducing reliance on recurring chemical treatments or
              procedural controls.
            </p>

            <p className="mt-4 text-base leading-relaxed text-neutral-600">
              The intent is not intervention after failure, but reduction of
              microbial risk through material behavior itself, in environments
              where maintenance alone is insufficient.
            </p>
          </div>

          <div className="mt-10">
            <Link
              href="/polyverdia"
              className="inline-flex items-center text-sm font-medium text-sky-900 underline underline-offset-4 hover:text-sky-700"
            >
              PolyVerdia™ — technical overview
            </Link>
          </div>
        </article>
      </section>

      {/* ===================================================== */}
      {/* FOOTNOTE */}
      {/* ===================================================== */}
      <footer className="mt-24 max-w-3xl border-t border-neutral-200 pt-8">
        <p className="text-sm leading-relaxed text-neutral-500">
          This site presents high-level material information only. No commercial,
          regulatory, or performance claims are made. Specific suitability and
          compliance depend on application context and implementation.
        </p>
      </footer>
    </main>
  );
}
