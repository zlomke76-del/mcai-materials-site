import SolacePanel from "@/components/SolacePanel";

export default function PolyVerdiaPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-24">
      {/* ===================================================== */}
      {/* HEADER */}
      {/* ===================================================== */}
      <header className="mb-14 max-w-3xl">
        <h1 className="text-3xl font-semibold tracking-tight text-sky-900 dark:text-sky-100">
          PolyVerdia™
        </h1>

        <div className="mt-5 h-px w-20 bg-sky-300 dark:bg-sky-700" />

        <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-700 dark:text-zinc-300">
          Moisture-active polymer systems designed to support infrastructure
          hygiene within HVAC environments.
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
      {/* SOLACE (SECONDARY / GOVERNED) */}
      {/* ===================================================== */}
      <section className="mt-20 border-t border-sky-200 pt-10 dark:border-sky-800">
        <h2 className="mb-4 text-xs font-medium uppercase tracking-widest text-sky-700 dark:text-sky-400">
          Reference & Clarification
        </h2>

        <p className="mb-6 max-w-2xl text-sm leading-6 text-zinc-600 dark:text-zinc-400">
          Solace provides limited, informational responses related to PolyVerdia™
          materials. It does not provide operational guidance, maintenance
          procedures, or regulatory advice.
        </p>

        <div className="rounded-xl border border-sky-200 bg-sky-50/60 p-4 dark:border-sky-800 dark:bg-sky-900/20">
          <SolacePanel context="PolyVerdia™ materials overview" />
        </div>
      </section>
    </main>
  );
}
