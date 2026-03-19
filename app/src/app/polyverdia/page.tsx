import Image from "next/image";
import MaterialsSolaceRuntime from "@/components/materials/MaterialsSolaceRuntime";

export default function PolyVerdiaPage() {
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

          <h1 className="mt-6 text-5xl font-semibold tracking-tight text-sky-300">
            PolyVerdia™
          </h1>

          <div className="mt-5 h-px w-24 bg-sky-400/70" />

          <p className="mt-4 text-xs font-medium uppercase tracking-[0.18em] text-sky-400">
            Problem domain: moisture-driven microbial growth in infrastructure
          </p>

          <p className="mt-7 max-w-xl text-base leading-8 text-neutral-300">
            PolyVerdia™ is designed where responsibility cannot be deferred — at
            the material layer where infrastructure hygiene outcomes are shaped
            long before maintenance schedules, chemical treatments, or human
            intervention can respond.
          </p>

          <p className="mt-6 max-w-xl text-xl leading-9 text-white">
            Moisture-active polymer systems engineered for persistent protection
            within HVAC and related infrastructure environments.
          </p>
        </div>

        {/* RIGHT — HERO IMAGE */}
        <div className="relative">
          <div className="overflow-hidden rounded-2xl border border-sky-400/20 bg-[#0B111C]">
            <Image
              src="/assets/v1/image_polyverdia_hero_01.png"
              alt="PolyVerdia material control visualization"
              width={900}
              height={700}
              className="h-full w-full object-cover"
              priority
              unoptimized
            />
          </div>
        </div>
      </section>

      {/* ===================================================== */}
      {/* MECHANISM STRIP */}
      {/* ===================================================== */}
      <section className="mt-20">
        <div className="overflow-hidden rounded-2xl border border-sky-400/20 bg-[#0B111C]">
          <Image
            src="/assets/v1/image_polyverdia_mechanism_01.png"
            alt="PolyVerdia mechanism visualization"
            width={1400}
            height={400}
            className="w-full object-cover"
            unoptimized
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
            PolyVerdia™ is a moisture-active polymer platform engineered to help
            reduce microbial growth inside HVAC systems at known moisture
            accumulation points, including condensate zones and air-handling
            components.
          </p>

          <p className="text-base leading-8 text-neutral-300">
            The approach focuses on material-level intervention rather than
            reactive chemical treatments or continuous maintenance cycles,
            enabling passive, always-on protection within system interiors.
          </p>

          <p className="text-base leading-8 text-neutral-400">
            By addressing conditions associated with microbial proliferation,
            PolyVerdia™ supports infrastructure hygiene through stable material
            behavior integrated directly into HVAC components.
          </p>
        </div>

        {/* RIGHT PROFILE */}
        <aside className="rounded-2xl border border-sky-400/15 bg-[linear-gradient(180deg,rgba(56,189,248,0.06)_0%,rgba(14,21,34,0.98)_38%)] p-7">
          <p className="text-xs uppercase tracking-[0.18em] text-sky-400">
            Platform Profile
          </p>

          <div className="mt-6 space-y-5">
            <div className="rounded-xl border border-white/10 p-5">
              <p className="text-sm font-medium text-white">
                Primary Environment
              </p>
              <p className="mt-2 text-sm text-neutral-400">
                HVAC systems, condensate zones, air-handling components, and
                related infrastructure interiors.
              </p>
            </div>

            <div className="rounded-xl border border-white/10 p-5">
              <p className="text-sm font-medium text-white">
                Material Logic
              </p>
              <p className="mt-2 text-sm text-neutral-400">
                Moisture-active polymer behavior integrated directly into the
                material layer rather than relying on recurring treatments.
              </p>
            </div>

            <div className="rounded-xl border border-white/10 p-5">
              <p className="text-sm font-medium text-white">
                Design Intention
              </p>
              <p className="mt-2 text-sm text-neutral-400">
                Support infrastructure hygiene through always-on material
                behavior in environments where moisture persists.
              </p>
            </div>
          </div>
        </aside>
      </section>

      {/* ===================================================== */}
      {/* APPLICATIONS */}
      {/* ===================================================== */}
      <section className="mt-20">
        <div className="overflow-hidden rounded-2xl border border-sky-400/20 bg-[#0B111C]">
          <Image
            src="/assets/v1/image_polyverdia_applications_01.png"
            alt="PolyVerdia application environments"
            width={1400}
            height={600}
            className="w-full object-cover"
            unoptimized
          />
        </div>
      </section>

      {/* ===================================================== */}
      {/* SOLACE */}
      {/* ===================================================== */}
      <section className="mt-20 rounded-2xl border border-sky-400/20 bg-[#0B111C] p-10">
        <h2 className="mb-4 text-xs uppercase tracking-[0.18em] text-sky-400">
          Ask Solace
        </h2>

        <p className="mb-6 max-w-3xl text-sm text-neutral-300">
          Solace is a governed AI explainer that can answer high-level
          questions about PolyVerdia™ materials using only the information
          published on this page.
        </p>

        <p className="mb-8 max-w-3xl text-sm text-neutral-500">
          Solace cannot provide operational instructions, maintenance guidance,
          performance guarantees, or regulatory advice.
        </p>

        <div className="rounded-xl border border-sky-400/20 bg-[#0E1522] p-6">
          <MaterialsSolaceRuntime
            context="PolyVerdia™ materials overview"
            pageLabel="PolyVerdia™"
          />
        </div>

        <div className="mt-8 text-sm text-neutral-400">
          <p>
            Some questions require human review. If you’d like to reach the
            Moral Clarity team, you can submit an inquiry.
          </p>

          <a
            href="/inquiry"
            className="mt-3 inline-block text-sky-300 underline underline-offset-4 hover:text-sky-200"
          >
            Submit an institutional or governance inquiry
          </a>
        </div>
      </section>
    </main>
  );
}
