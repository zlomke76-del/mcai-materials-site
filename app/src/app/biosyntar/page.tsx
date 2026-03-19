import Image from "next/image";
import MaterialsSolaceRuntime from "@/components/materials/MaterialsSolaceRuntime";

export default function BioSyntarPage() {
  return (
    <main className="mx-auto w-full max-w-7xl px-6 py-20 text-[#E9F0FA]">
      {/* ===================================================== */}
      {/* HERO — SPLIT REGIME ENTRY */}
      {/* ===================================================== */}
      <section className="grid items-center gap-12 lg:grid-cols-2">
        {/* LEFT */}
        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-neutral-500">
            MCAI Materials
          </p>

          <h1 className="mt-6 text-5xl font-semibold tracking-tight text-emerald-300">
            BioSyntar™
          </h1>

          <div className="mt-5 h-px w-24 bg-emerald-400/70" />

          <p className="mt-4 text-xs font-medium uppercase tracking-[0.18em] text-emerald-400">
            Problem domain: food-contact surface contamination
          </p>

          <p className="mt-7 max-w-xl text-base leading-8 text-neutral-300">
            BioSyntar™ is designed where responsibility cannot be deferred — at
            the material layer where food safety outcomes are shaped long before
            handling, labeling, or policy can intervene.
          </p>

          <p className="mt-6 max-w-xl text-xl leading-9 text-white">
            Biologically inspired synthetic microfilms engineered for
            food-contact packaging and protective applications.
          </p>
        </div>

        {/* RIGHT — HERO IMAGE */}
        <div className="relative">
          <div className="overflow-hidden rounded-2xl border border-emerald-400/20 bg-[#0B111C]">
            <Image
              src="/assets/v1/image_biosyntar_hero_01.png"
              alt="BioSyntar boundary layer visualization"
              width={900}
              height={700}
              className="h-full w-full object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* ===================================================== */}
      {/* MECHANISM STRIP */}
      {/* ===================================================== */}
      <section className="mt-20">
        <div className="overflow-hidden rounded-2xl border border-emerald-400/20 bg-[#0B111C]">
          <Image
            src="/assets/v1/image_mechanism_01.png"
            alt="BioSyntar mechanism visualization"
            width={1400}
            height={400}
            className="w-full object-cover"
          />
        </div>
      </section>

      {/* ===================================================== */}
      {/* BODY + PROFILE */}
      {/* ===================================================== */}
      <section className="mt-16 grid gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        {/* LEFT CONTENT */}
        <div className="space-y-7 rounded-2xl border border-neutral-800 bg-[#0E1522] p-8">
          <p className="text-base leading-8 text-neutral-200">
            BioSyntar™ is a family of ultra-thin, biodegradable antibacterial
            microfilms developed for use in food-contact packaging, including
            wraps, liners, and protective films used in fresh and refrigerated
            foods.
          </p>

          <p className="text-base leading-8 text-neutral-300">
            Antibacterial functionality is embedded directly into the material
            structure. The platform does not rely on surface coatings, heavy
            metals, or leaching chemistries to achieve protective performance.
          </p>

          <p className="text-base leading-8 text-neutral-400">
            The material is engineered to maintain clarity, flexibility, and
            mechanical integrity during use, while breaking down responsibly at
            end of life — supporting safer food handling and reduced
            environmental persistence.
          </p>
        </div>

        {/* RIGHT PROFILE */}
        <aside className="rounded-2xl border border-emerald-400/15 bg-[linear-gradient(180deg,rgba(16,185,129,0.06)_0%,rgba(14,21,34,0.98)_38%)] p-7">
          <p className="text-xs uppercase tracking-[0.18em] text-emerald-400">
            Platform Profile
          </p>

          <div className="mt-6 space-y-5">
            <div className="rounded-xl border border-white/10 p-5">
              <p className="text-sm font-medium text-white">
                Primary Environment
              </p>
              <p className="mt-2 text-sm text-neutral-400">
                Food-contact packaging, wraps, liners, and protective films.
              </p>
            </div>

            <div className="rounded-xl border border-white/10 p-5">
              <p className="text-sm font-medium text-white">
                Material Logic
              </p>
              <p className="mt-2 text-sm text-neutral-400">
                Antibacterial functionality embedded directly into the material
                structure rather than added as a coating.
              </p>
            </div>

            <div className="rounded-xl border border-white/10 p-5">
              <p className="text-sm font-medium text-white">
                Design Intention
              </p>
              <p className="mt-2 text-sm text-neutral-400">
                Support safer food handling during use while reducing
                environmental persistence at end of life.
              </p>
            </div>
          </div>
        </aside>
      </section>

      {/* ===================================================== */}
      {/* APPLICATIONS */}
      {/* ===================================================== */}
      <section className="mt-20">
        <div className="overflow-hidden rounded-2xl border border-emerald-400/20 bg-[#0B111C]">
          <Image
            src="/assets/v1/image_applications_01.png"
            alt="BioSyntar application environments"
            width={1400}
            height={600}
            className="w-full object-cover"
          />
        </div>
      </section>

      {/* ===================================================== */}
      {/* SOLACE */}
      {/* ===================================================== */}
      <section className="mt-20 rounded-2xl border border-emerald-400/20 bg-[#0B111C] p-10">
        <h2 className="mb-4 text-xs uppercase tracking-[0.18em] text-emerald-400">
          Ask Solace
        </h2>

        <p className="mb-6 max-w-3xl text-sm text-neutral-300">
          Solace is a governed AI explainer. She can answer high-level questions
          about BioSyntar™ using only the information published on this page.
        </p>

        <p className="mb-8 max-w-3xl text-sm text-neutral-500">
          She cannot provide operational instructions, regulatory advice, or
          performance guarantees.
        </p>

        <div className="rounded-xl border border-emerald-400/20 bg-[#0E1522] p-6">
          <MaterialsSolaceRuntime
            context="BioSyntar™ materials overview"
            pageLabel="BioSyntar™"
          />
        </div>

        <div className="mt-8 text-sm text-neutral-400">
          <p>
            Some questions require human review. If you’d like to reach the Moral
            Clarity team, you can submit an inquiry.
          </p>

          <a
            href="/contact?type=institutional"
            className="mt-3 inline-block text-emerald-300 underline underline-offset-4 hover:text-emerald-200"
          >
            Submit an institutional or governance inquiry
          </a>
        </div>
      </section>
    </main>
  );
}
