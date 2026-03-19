import MaterialsSolaceRuntime from "@/components/materials/MaterialsSolaceRuntime";

export default function BioSyntarPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-20 text-[#E9F0FA]">
      {/* ===================================================== */}
      {/* HEADER / REGIME ENTRY */}
      {/* ===================================================== */}
      <header className="relative overflow-hidden rounded-[28px] border border-emerald-400/15 bg-[linear-gradient(180deg,rgba(16,185,129,0.08)_0%,rgba(8,17,29,0.96)_34%)] px-8 py-14 md:px-10 md:py-16">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_24%,rgba(126,217,163,0.14),transparent_32%),radial-gradient(circle_at_80%_28%,rgba(126,217,163,0.08),transparent_30%)]" />

        <div className="relative max-w-3xl">
          <p className="text-xs uppercase tracking-[0.22em] text-neutral-500">
            MCAI Materials
          </p>

          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-emerald-300 md:text-5xl">
            BioSyntar™
          </h1>

          <div className="mt-5 h-px w-24 bg-emerald-400/70" />

          <p className="mt-4 text-xs font-medium uppercase tracking-[0.18em] text-emerald-400">
            Problem domain: food-contact surface contamination
          </p>

          <p className="mt-7 max-w-2xl text-base leading-8 text-neutral-300">
            BioSyntar™ is designed where responsibility cannot be deferred — at
            the material layer where food safety outcomes are shaped long before
            handling, labeling, or policy can intervene.
          </p>

          <p className="mt-5 max-w-2xl text-xl leading-9 text-white">
            Biologically inspired synthetic microfilms engineered for
            food-contact packaging and protective applications.
          </p>
        </div>
      </header>

      {/* ===================================================== */}
      {/* BODY */}
      {/* ===================================================== */}
      <section className="mt-14 grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-start">
        <div className="space-y-7">
          <div className="rounded-2xl border border-neutral-800 bg-[#0E1522] p-7">
            <p className="text-base leading-8 text-neutral-200">
              BioSyntar™ is a family of ultra-thin, biodegradable antibacterial
              microfilms developed for use in food-contact packaging, including
              wraps, liners, and protective films used in fresh and refrigerated
              foods.
            </p>

            <p className="mt-6 text-base leading-8 text-neutral-300">
              Antibacterial functionality is embedded directly into the material
              structure. The platform does not rely on surface coatings, heavy
              metals, or leaching chemistries to achieve protective performance.
            </p>

            <p className="mt-6 text-base leading-8 text-neutral-400">
              The material is engineered to maintain clarity, flexibility, and
              mechanical integrity during use, while breaking down responsibly
              at end of life — supporting safer food handling and reduced
              environmental persistence.
            </p>
          </div>
        </div>

        {/* ===================================================== */}
        {/* KEY ATTRIBUTES */}
        {/* ===================================================== */}
        <aside className="rounded-2xl border border-emerald-400/15 bg-[linear-gradient(180deg,rgba(16,185,129,0.06)_0%,rgba(14,21,34,0.98)_38%)] p-7">
          <p className="text-xs uppercase tracking-[0.18em] text-emerald-400">
            Platform Profile
          </p>

          <div className="mt-6 space-y-5">
            <div className="rounded-xl border border-white/8 bg-white/[0.02] p-5">
              <p className="text-sm font-medium text-white">Primary Environment</p>
              <p className="mt-2 text-sm leading-7 text-neutral-400">
                Food-contact packaging, wraps, liners, and protective films.
              </p>
            </div>

            <div className="rounded-xl border border-white/8 bg-white/[0.02] p-5">
              <p className="text-sm font-medium text-white">Material Logic</p>
              <p className="mt-2 text-sm leading-7 text-neutral-400">
                Antibacterial functionality embedded directly into the material
                structure rather than added as a coating.
              </p>
            </div>

            <div className="rounded-xl border border-white/8 bg-white/[0.02] p-5">
              <p className="text-sm font-medium text-white">Design Intention</p>
              <p className="mt-2 text-sm leading-7 text-neutral-400">
                Support safer food handling during use while reducing
                environmental persistence at end of life.
              </p>
            </div>
          </div>
        </aside>
      </section>

      {/* ===================================================== */}
      {/* SOLACE — GOVERNED EXPLAINER → HUMAN REVIEW BOUNDARY */}
      {/* ===================================================== */}
      <section className="mt-20 rounded-[28px] border border-emerald-400/15 bg-[linear-gradient(180deg,rgba(16,185,129,0.05)_0%,rgba(8,17,29,0.96)_34%)] px-8 py-10 md:px-10 md:py-12">
        <h2 className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-emerald-400">
          Ask Solace
        </h2>

        <p className="mb-6 max-w-3xl text-sm leading-7 text-neutral-300">
          Solace is a governed AI explainer. She can answer high-level questions
          about BioSyntar™ using only the information published on this page.
        </p>

        <p className="mb-8 max-w-3xl text-sm leading-7 text-neutral-500">
          She cannot provide operational instructions, regulatory advice, or
          performance guarantees.
        </p>

        <div className="rounded-2xl border border-emerald-400/20 bg-[#0E1522] p-6">
          <MaterialsSolaceRuntime
            context="BioSyntar™ materials overview"
            pageLabel="BioSyntar™"
          />
        </div>

        {/* ===================================================== */}
        {/* HUMAN REVIEW HANDOFF */}
        {/* ===================================================== */}
        <div className="mt-8 max-w-3xl text-sm leading-7 text-neutral-400">
          <p>
            Some questions require human review. If you’d like to reach the
            Moral Clarity team, you can submit an inquiry.
          </p>

          <p className="mt-3">
            <a
              href="/contact?type=institutional"
              className="font-medium text-emerald-300 underline underline-offset-4 transition hover:text-emerald-200"
            >
              Submit an institutional or governance inquiry
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}
