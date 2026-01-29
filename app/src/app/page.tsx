export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-black">
      <main className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center gap-24 px-12 py-32">
        {/* ===================================================== */}
        {/* HERO */}
        {/* ===================================================== */}
        <section className="max-w-3xl">
          <h1 className="text-4xl font-semibold tracking-tight text-black dark:text-zinc-50">
            Sustainable Materials Platforms
          </h1>

          <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Advanced materials companies developing protection-focused solutions
            for food safety, environmental health, and infrastructure resilience.
          </p>
        </section>

        {/* ===================================================== */}
        {/* COMPANIES */}
        {/* ===================================================== */}
        <section className="grid grid-cols-1 gap-10 sm:grid-cols-2">
          {/* ================= BIOSYNTAR ================= */}
          <a
            href="/biosyntar"
            className="
              group relative overflow-hidden rounded-2xl
              border border-zinc-200 bg-white p-8
              transition-all duration-300
              hover:-translate-y-1 hover:border-zinc-300 hover:shadow-xl
              dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-700
            "
          >
            <div className="flex h-full flex-col justify-between">
              <div>
                <h2 className="text-2xl font-medium text-black dark:text-zinc-50">
                  BioSyntar™
                </h2>

                <p className="mt-4 text-sm leading-7 text-zinc-600 dark:text-zinc-400">
                  BioSyntar™ develops ultra-thin, biodegradable antibacterial
                  microfilms for food-contact packaging, including wraps, liners,
                  and protective films used in fresh and refrigerated foods.
                </p>

                <p className="mt-4 text-sm leading-7 text-zinc-600 dark:text-zinc-400">
                  The material delivers permanent antibacterial protection
                  without coatings, heavy metals, or leaching chemistries—helping
                  reduce surface-level contamination while maintaining clarity,
                  flexibility, and mechanical performance.
                </p>
              </div>

              <div className="mt-8 text-sm font-medium text-zinc-500 transition-colors group-hover:text-black dark:text-zinc-400 dark:group-hover:text-zinc-50">
                View BioSyntar →
              </div>
            </div>
          </a>

          {/* ================= POLYVERDIA ================= */}
          <a
            href="/polyverdia"
            className="
              group relative overflow-hidden rounded-2xl
              border border-zinc-200 bg-white p-8
              transition-all duration-300
              hover:-translate-y-1 hover:border-zinc-300 hover:shadow-xl
              dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-700
            "
          >
            <div className="flex h-full flex-col justify-between">
              <div>
                <h2 className="text-2xl font-medium text-black dark:text-zinc-50">
                  PolyVerdia™
                </h2>

                <p className="mt-4 text-sm leading-7 text-zinc-600 dark:text-zinc-400">
                  PolyVerdia™ is a moisture-active polymer platform designed to
                  help reduce microbial growth within HVAC systems, including
                  air-handling units, condensate zones, and other moisture-prone
                  components.
                </p>

                <p className="mt-4 text-sm leading-7 text-zinc-600 dark:text-zinc-400">
                  By protecting known moisture accumulation points inside HVAC
                  infrastructure, PolyVerdia™ addresses conditions associated
                  with Legionella proliferation at the material level—without
                  relying on reactive chemical treatments or ongoing maintenance
                  interventions.
                </p>
              </div>

              <div className="mt-8 text-sm font-medium text-zinc-500 transition-colors group-hover:text-black dark:text-zinc-400 dark:group-hover:text-zinc-50">
                View PolyVerdia →
              </div>
            </div>
          </a>
        </section>
      </main>
    </div>
  );
}
