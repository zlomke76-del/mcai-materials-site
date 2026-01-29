import MaterialsSolaceRuntime from "@/components/materials/MaterialsSolaceRuntime";

export default function PolyVerdiaPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-24">
      {/* ===================================================== */}
      {/* HEADER / REGIME ENTRY */}
      {/* ===================================================== */}
      <header className="mb-16 max-w-3xl">
        <h1 className="text-3xl font-semibold tracking-tight text-sky-900 dark:text-sky-100">
          PolyVerdia™
        </h1>

        <div className="mt-5 h-px w-24 bg-sky-400 dark:bg-sky-700" />

        <p className="mt-4 text-xs font-medium uppercase tracking-widest text-sky-700 dark:text-sky-400">
          Problem domain: moisture-driven microbial growth in infrastructure
        </p>

        <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-700 dark:text-zinc-300">
          PolyVerdia™ is designed where responsibility cannot be deferred — at
          the material layer where infrastructure hygiene outcomes are shaped
          long before maintenance schedules, chemical treatments, or human
          intervention can respond.
        </p>

        <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-800 dark:text-zinc-200">
          Moisture-active polymer systems engineered for persistent protection
          within HVAC and related infrastructure environments.
        </p>
      </header>

      {/* ===================================================== */}
      {/* BODY */}
      {/* ===================================================== */}
      <section className="max-w-3xl space-y-7">
        <p className="text-base leading-7 text-zinc-800 dark:text-zinc-200">
          PolyVerdia™ is a moisture-active polymer platform engineered to help
          reduce microbial growth inside HVAC systems at known moisture
          accumulation points, including condensate zones and air-handling
          components.
        </p>

        <p className="text-base leading-7 text-zinc-800 dark:text-zinc-200">
          The approach focuses on material-level intervention rather than
          reactive chemical treatments or continuous maintenance cycles,
          enabling passive, always-on protection within system interiors.
        </p>

        <p className="text-base leading-7 text-zinc-700 dark:text-zinc-300">
          By addressing conditions associated with microbial proliferation,
          PolyVerdia™ supports infrastructure hygiene through stable material
          behavior integrated directly into HVAC components.
        </p>
      </section>

      {/* ===================================================== */}
      {/* SOLACE — GOVERNED MATERIALS RUNTIME */}
      {/* ===================================================== */}
      <section className="mt-24 max-w-3xl rounded-xl border border-sky-200 bg-sky-50/60 p-8 dark:border-sky-800 dark:bg-sky-900/25">
        <h2 className="mb-3 text-xs font-medium uppercase tracking-widest text-sky-700 dark:text-sky-400">
          Ask Solace
        </h2>

        <p className="mb-6 text-sm leading-6 text-zinc-700 dark:text-zinc-300">
          Solace is a governed AI explainer that can help answer general
          questions about PolyVerdia™ materials using only the information
          published on this site.
        </p>

        <p className="mb-6 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
          Solace cannot provide operational instructions, maintenance guidance,
          performance guarantees, or regulatory advice.
        </p>

        <MaterialsSolaceRuntime
          context="PolyVerdia™ materials overview"
          pageLabel="PolyVerdia™"
        />
      </section>
    </main>
  );
}
