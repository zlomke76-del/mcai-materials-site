import SolacePanel from "@/components/SolacePanel";

export default function BioSyntarPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-24">
      {/* ===================================================== */}
      {/* HEADER */}
      {/* ===================================================== */}
      <header className="mb-12">
        <h1 className="text-3xl font-semibold tracking-tight text-black dark:text-zinc-50">
          BioSyntar™
        </h1>

        <p className="mt-4 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          Biologically inspired synthetic microfilms designed for food-contact
          packaging and protective applications.
        </p>
      </header>

      {/* ===================================================== */}
      {/* BODY */}
      {/* ===================================================== */}
      <section className="space-y-6 max-w-3xl">
        <p className="text-base leading-7 text-zinc-700 dark:text-zinc-300">
          BioSyntar™ is a family of ultra-thin, biodegradable antibacterial
          microfilms developed for use in food-contact packaging, including
          wraps, liners, and protective films used in fresh and refrigerated
          foods.
        </p>

        <p className="text-base leading-7 text-zinc-700 dark:text-zinc-300">
          Antibacterial functionality is embedded directly into the material
          structure. The platform does not rely on surface coatings, heavy
          metals, or leaching chemistries to achieve protective performance.
        </p>

        <p className="text-base leading-7 text-zinc-700 dark:text-zinc-300">
          The material is engineered to maintain clarity, flexibility, and
          mechanical integrity during use, while breaking down responsibly at
          end of life—supporting safer food handling and reduced environmental
          persistence.
        </p>
      </section>

      {/* ===================================================== */}
      {/* SOLACE (SECONDARY / GOVERNED) */}
      {/* ===================================================== */}
      <section className="mt-16 border-t border-zinc-200 pt-10 dark:border-zinc-800">
        <h2 className="mb-4 text-sm font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
          Reference & Clarification
        </h2>

        <p className="mb-6 max-w-2xl text-sm leading-6 text-zinc-600 dark:text-zinc-400">
          Solace provides limited, informational responses related to BioSyntar™
          materials. It does not offer product recommendations, regulatory
          determinations, or usage instructions.
        </p>

        <SolacePanel context="BioSyntar™ materials overview" />
      </section>
    </main>
  );
}
