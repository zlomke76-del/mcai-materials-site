export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-4xl flex-col items-center justify-center gap-16 py-32 px-16 bg-white dark:bg-black sm:items-start">
        {/* ===================================================== */}
        {/* INTRO */}
        {/* ===================================================== */}
        <section className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-2xl text-3xl font-semibold leading-tight tracking-tight text-black dark:text-zinc-50">
            Materials Reference Index
          </h1>

          <p className="max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            This site hosts reference pages for independent materials companies.
            <br />
            <br />
            The material descriptions provided here are informational only and
            do not imply ownership, authorship, or operational control.
          </p>
        </section>

        {/* ===================================================== */}
        {/* MATERIALS INDEX */}
        {/* ===================================================== */}
        <section className="w-full">
          <h2 className="mb-6 text-sm font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
            Hosted Companies
          </h2>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {/* ---------------- BIOSYNTAR ---------------- */}
            <a
              href="/biosyntar"
              className="
                group rounded-xl border border-zinc-200 bg-zinc-50 p-6
                transition-colors hover:bg-zinc-100
                dark:border-zinc-800 dark:bg-zinc-900 dark:hover:bg-zinc-800
              "
            >
              <h3 className="mb-2 text-lg font-medium text-black dark:text-zinc-50">
                Biosyntar
              </h3>

              <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                An independent materials company founded by Charlie, focused on
                biologically inspired synthetic systems.
                <br />
                <br />
                This page is hosted for reference purposes only.
              </p>

              <div className="mt-4 text-xs font-medium text-zinc-500 dark:text-zinc-400">
                View site →
              </div>
            </a>

            {/* ---------------- POLYVERDIA ---------------- */}
            <a
              href="/polyverdia"
              className="
                group rounded-xl border border-zinc-200 bg-zinc-50 p-6
                transition-colors hover:bg-zinc-100
                dark:border-zinc-800 dark:bg-zinc-900 dark:hover:bg-zinc-800
              "
            >
              <h3 className="mb-2 text-lg font-medium text-black dark:text-zinc-50">
                Polyverdia
              </h3>

              <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                An independently operated polymer materials company founded by
                Charlie.
                <br />
                <br />
                Content is presented here as a hosted informational resource.
              </p>

              <div className="mt-4 text-xs font-medium text-zinc-500 dark:text-zinc-400">
                View site →
              </div>
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
