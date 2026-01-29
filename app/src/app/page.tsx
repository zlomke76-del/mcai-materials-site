export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-black">
      <main className="mx-auto flex min-h-screen max-w-5xl flex-col justify-center gap-20 px-12 py-32">
        {/* ===================================================== */}
        {/* HERO */}
        {/* ===================================================== */}
        <section className="max-w-3xl">
          <h1 className="text-4xl font-semibold tracking-tight text-black dark:text-zinc-50">
            Materials Companies
          </h1>

          <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            This site presents two materials companies working at the intersection
            of advanced chemistry, engineering, and real-world deployment.
          </p>
        </section>

        {/* ===================================================== */}
        {/* COMPANIES */}
        {/* ===================================================== */}
        <section className="grid grid-cols-1 gap-8 sm:grid-cols-2">
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
                  Biosyntar
                </h2>

                <p className="mt-4 text-sm leading-7 text-zinc-600 dark:text-zinc-400">
                  Biosyntar develops biologically inspired synthetic materials,
                  translating principles found in natural systems into engineered
                  solutions with practical industrial applications.
                </p>
              </div>

              <div className="mt-8 text-sm font-medium text-zinc-500 transition-colors group-hover:text-black dark:text-zinc-400 dark:group-hover:text-zinc-50">
                View company →
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
                  Polyverdia
                </h2>

                <p className="mt-4 text-sm leading-7 text-zinc-600 dark:text-zinc-400">
                  Polyverdia focuses on advanced polymer systems designed for
                  performance, scalability, and manufacturability across
                  real-world applications.
                </p>
              </div>

              <div className="mt-8 text-sm font-medium text-zinc-500 transition-colors group-hover:text-black dark:text-zinc-400 dark:group-hover:text-zinc-50">
                View company →
              </div>
            </div>
          </a>
        </section>
      </main>
    </div>
  );
}
