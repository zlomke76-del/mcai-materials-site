import SolacePanel from "@/components/SolacePanel";

export default function BioSyntarPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-24">
      {/* ===================================================== */}
      {/* HEADER / REGIME ENTRY */}
      {/* ===================================================== */}
      <header className="mb-16 max-w-3xl">
        <h1 className="text-3xl font-semibold tracking-tight text-emerald-900 dark:text-emerald-100">
          BioSyntar™
        </h1>

        <div className="mt-5 h-px w-24 bg-emerald-400 dark:bg-emerald-700" />

        <p className="mt-4 text-xs font-medium uppercase tracking-widest text-emerald-700 dark:text-emerald-400">
          Problem domain: food-contact surface contamination
        </p>

        <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-700 dark:text-zinc-300">
          BioSyntar™ is designed where responsibility cannot be deferred — at the
          material layer where food safety outcomes are shaped long before
          handling, labeling, or policy can intervene.
        </p>

        <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-800 dark:text-zinc-200">
          Biologically inspired synthetic microfilms engineered for food-contact
          packaging and protective applications.
        </p>
      </header>

      {/* ===================================================== */}
      {/* BODY */}
      {/* ===================================================== */}
      <section className="max-w-3xl space-y-7">
        <p className="text-base leading-7 text-zinc-800 dark:text-zinc-200">
          BioSyntar™ is a family of ultra-thin, biodegradable antibacterial
          microfilms developed for use in food-contact packaging, including
          wraps, liners, and protective films used in fresh and refrigerated
          foods.
        </p>

        <p className="text-base leading-7 text-zinc-800 dark:text-zinc-200">
          Antibacterial functionality is embedded directly into the material
          structure. The platform does not rely on surface coatings, heavy
          metals, or leaching chemistries to achieve protective performance.
        </p>

        <p className="text-base leading-7 text-zinc-700 dark:text-zinc-300">
          The material is engineered to maintain clarity, flexibility, and
          mechanical integrity during use, while breaking down responsibly at
          end of life — supporting safer food handling and reduced environmental
          persistence.
        </p>
      </section>

      {/* ===================================================== */}
      {/* SOLACE (SECONDARY / GOVERNED) */}
      {/* ===================================================== */}
      <section className="mt-24 border-t border-emerald-200 pt-12 dark:border-emerald-800">
        <h2 className="mb-4 text-xs font-medium uppercase tracking-widest text-emerald-700 dark:text-emerald-400">
          Reference & Clarification
        </h2>

        <p className="mb-8 max-w-2xl text-sm leading-6 text-zinc-600 dark:text-zinc-400">
          Solace provides limited, informational responses related to BioSyntar™
          materials. It does not offer product recommendations, regulatory
          determinations, or usage instructions.
        </p>

        <div className="rounded-xl border border-emerald-200 bg-emerald-50/70 p-5 dark:border-emerald-800 dark:bg-emerald-900/25">
          <SolacePanel context="BioSyntar™ materials overview" />
        </div>
      </section>
    </main>
  );
}
