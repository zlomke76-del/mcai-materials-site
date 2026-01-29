import SolacePanel from "@/components/SolacePanel";

export default function PolyVerdiaPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-24">
      {/* ===================================================== */}
      {/* HEADER */}
      {/* ===================================================== */}
      <header className="mb-12">
        <h1 className="text-3xl font-semibold tracking-tight text-black dark:text-zinc-50">
          PolyVerdia™
        </h1>

        <p className="mt-4 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          Moisture-active polymer systems designed to support infrastructure
          hygiene within HVAC environments.
        </p>
      </header>

      {/* ===================================================== */}
      {/* BODY */}
      {/* ===================================================== */}
      <section className="space-y-6 max-w-3xl">
        <p className="text-base leading-7 text-zinc-700 dark:text-zinc-300">
          PolyVerdia™ is a moisture-active polymer platform engineered to help
          reduce microbial growth inside HVAC systems at known moisture
          accumulation points, including condensate zones and air-handling
          components.
        </p>

        <p className="text-base leading-7 text-zinc-700 dark:text-zinc-300">
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
      <section className="mt-16 border-t border-zinc-200 pt-10 dark:border-zinc-800">
        <h2 className="mb-4 text-sm font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
          Reference & Clarification
        </h2>

        <p className="mb-6 max-w-2xl text-sm leading-6 text-zinc-600 dark:text-zinc-400">
          Solace provides limited, informational responses related to PolyVerdia™
          materials. It does not provide operational guidance, maintenance
          procedures, or regulatory advice.
        </p>

        <SolacePanel context="PolyVerdia™ materials overview" />
      </section>
    </main>
  );
}
