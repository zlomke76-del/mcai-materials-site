// app/src/app/page.tsx

import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Materials | MCAI",
  description:
    "Material platforms designed for environments where failure is silent and outcomes matter.",
};

const failureDomains = [
  {
    title: "Surface Contamination",
    text: "Continuous bacterial exposure in food-contact environments.",
  },
  {
    title: "Moisture Accumulation",
    text: "Condensation persists where elimination is not feasible.",
  },
  {
    title: "Maintenance Dependency",
    text: "Safety depends on repeated human intervention.",
  },
];

const audiences = [
  {
    title: "Packaging Engineers",
    text: "Reduce contamination risk without increasing process complexity.",
  },
  {
    title: "Infrastructure Operators",
    text: "Address microbial growth where moisture cannot be eliminated.",
  },
  {
    title: "R&D Partners",
    text: "Explore material-layer control strategies for real-world systems.",
  },
];

export default function HomePage() {
  return (
    <main className="text-[#E9F0FA]">
      {/* ============================================================ */}
      {/* HERO */}
      {/* ============================================================ */}
      <section className="relative isolate overflow-hidden rounded-[28px] border border-white/8 bg-[#08111d] px-8 py-20 md:px-12 md:py-24 lg:px-16 lg:py-28">
        <div className="absolute inset-0 opacity-[0.18]">
          <Image
            src="/assets/v1/image_hero_01.png"
            alt="Material system"
            fill
            priority
            unoptimized
            className="object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_28%,rgba(126,217,163,0.16),transparent_34%),radial-gradient(circle_at_80%_26%,rgba(122,162,255,0.18),transparent_36%),radial-gradient(circle_at_52%_78%,rgba(247,200,106,0.08),transparent_24%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,17,29,0.72)_0%,rgba(8,17,29,0.82)_40%,rgba(8,17,29,0.94)_100%)]" />

        <div className="relative z-10 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.24em] text-neutral-500">
              MCAI Materials
            </p>

            <h1 className="mt-8 text-5xl font-semibold leading-[0.96] md:text-6xl xl:text-7xl">
              Failure is invisible.
              <br />
              Control should not be.
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-300 md:text-xl">
              These materials operate where outcomes are determined—not after
              failure, but within the system itself.
            </p>

            <div className="mt-12 flex flex-wrap gap-4">
              <a
                href="#inquiry"
                className="rounded-md bg-[#F7C86A] px-7 py-3 text-sm font-medium text-black transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_50px_rgba(247,200,106,0.18)]"
              >
                Request Technical Brief
              </a>

              <a
                href="#materials"
                className="rounded-md border border-neutral-600 bg-white/[0.02] px-7 py-3 text-sm text-neutral-200 transition duration-300 hover:-translate-y-0.5 hover:border-neutral-400 hover:bg-white/[0.04]"
              >
                Explore Materials
              </a>
            </div>
          </div>

          <div className="hidden lg:block" />
        </div>
      </section>

      {/* ============================================================ */}
      {/* DESIGN PRINCIPLE */}
      {/* ============================================================ */}
      <section className="px-2 py-24 text-center">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm tracking-wide text-[#F7C86A]">
            ⚖️ Design Principle
          </p>

          <p className="mx-auto mt-6 max-w-3xl text-2xl leading-relaxed text-neutral-200">
            Responsibility should not depend on perfect behavior, maintenance,
            or conditions.
            <br />
            <span className="text-white">
              It should exist within the system itself.
            </span>
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/* FAILURE DOMAINS */}
      {/* ============================================================ */}
      <section className="py-8">
        <div className="mb-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">
              Failure Domains
            </p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight md:text-4xl">
              The conditions are persistent.
              <br />
              The response cannot be procedural alone.
            </h2>
          </div>

          <p className="max-w-xl text-sm leading-7 text-neutral-400 lg:justify-self-end">
            These are not intermittent edge cases. They are structural
            environments where contamination, moisture, and operational burden
            recur unless control is placed deeper in the system.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {failureDomains.map((item) => (
            <div
              key={item.title}
              className="group relative overflow-hidden rounded-2xl border border-neutral-800 bg-[#0E1522] p-7 transition duration-300 hover:-translate-y-1 hover:border-neutral-700 hover:shadow-[0_22px_60px_rgba(0,0,0,0.45)]"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(247,200,106,0.6),transparent)] opacity-0 transition duration-300 group-hover:opacity-100" />
              <h3 className="text-lg font-medium text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-neutral-400">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ============================================================ */}
      {/* MATERIALS */}
      {/* ============================================================ */}
      <section id="materials" className="py-28">
        <div className="mb-12 grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">
              Material Platforms
            </p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight md:text-4xl">
              Two environments.
              <br />
              One control philosophy.
            </h2>
          </div>

          <p className="max-w-2xl text-sm leading-7 text-neutral-400 lg:justify-self-end">
            The platforms are differentiated by environment, failure mode, and
            material behavior—but unified by where responsibility is placed.
          </p>
        </div>

        <div className="grid gap-10 xl:grid-cols-2">
          <article className="group rounded-2xl border border-emerald-400/20 bg-[linear-gradient(180deg,rgba(16,185,129,0.07)_0%,rgba(14,21,34,0.98)_34%)] p-7 md:p-8 transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(0,0,0,0.45)]">
            <div className="overflow-hidden rounded-xl border border-emerald-300/10 bg-white/[0.02]">
              <Image
                src="/assets/v1/image_biosyntar_01.png"
                alt="BioSyntar"
                width={800}
                height={520}
                unoptimized
                className="h-auto w-full object-cover transition duration-500 group-hover:scale-[1.02]"
              />
            </div>

            <div className="mt-7">
              <h3 className="text-2xl font-semibold text-emerald-300">
                BioSyntar™
              </h3>

              <p className="mt-4 text-sm font-medium text-emerald-200">
                Persistent antimicrobial protection at the material layer
              </p>

              <p className="mt-3 text-[11px] uppercase tracking-[0.18em] text-emerald-400">
                Status: Lab + Early Validation
              </p>

              <p className="mt-7 text-base leading-8 text-neutral-300">
                Ultra-thin biodegradable microfilms engineered for food-contact
                environments where surface-level bacterial exposure matters.
              </p>

              <p className="mt-4 text-base leading-8 text-neutral-400">
                Antimicrobial functionality is embedded directly into the
                material structure, enabling persistent protection without
                reliance on coatings or reactive treatments.
              </p>

              <Link
                href="/biosyntar"
                className="mt-8 inline-flex items-center text-sm font-medium text-emerald-300 underline underline-offset-4 transition duration-300 hover:text-emerald-200"
              >
                View Technical Overview →
              </Link>
            </div>
          </article>

          <article className="group rounded-2xl border border-sky-400/20 bg-[linear-gradient(180deg,rgba(56,189,248,0.07)_0%,rgba(14,21,34,0.98)_34%)] p-7 md:p-8 transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(0,0,0,0.45)]">
            <div className="overflow-hidden rounded-xl border border-sky-300/10 bg-white/[0.02]">
              <Image
                src="/assets/v1/image_polyverdia_01.png"
                alt="PolyVerdia"
                width={800}
                height={520}
                unoptimized
                className="h-auto w-full object-cover transition duration-500 group-hover:scale-[1.02]"
              />
            </div>

            <div className="mt-7">
              <h3 className="text-2xl font-semibold text-sky-300">
                PolyVerdia™
              </h3>

              <p className="mt-4 text-sm font-medium text-sky-200">
                Moisture-driven microbial control inside infrastructure systems
              </p>

              <p className="mt-3 text-[11px] uppercase tracking-[0.18em] text-sky-400">
                Status: Applied Research
              </p>

              <p className="mt-7 text-base leading-8 text-neutral-300">
                Designed for environments where condensation and microbial
                growth are structurally difficult to eliminate.
              </p>

              <p className="mt-4 text-base leading-8 text-neutral-400">
                It operates at the material layer—reducing reliance on recurring
                chemical treatments or procedural controls inside infrastructure
                systems.
              </p>

              <Link
                href="/polyverdia"
                className="mt-8 inline-flex items-center text-sm font-medium text-sky-300 underline underline-offset-4 transition duration-300 hover:text-sky-200"
              >
                View Technical Overview →
              </Link>
            </div>
          </article>
        </div>
      </section>

      {/* ============================================================ */}
      {/* CONTROL LAYER */}
      {/* ============================================================ */}
      <section className="relative overflow-hidden py-32 text-center">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(247,200,106,0.08),transparent_26%)]" />

        <div className="relative mx-auto max-w-5xl">
          <p className="text-sm text-neutral-400">
            Most systems rely on intervention.
          </p>

          <h2 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
            We move responsibility
            <br className="hidden md:block" />
            beneath intervention.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-neutral-400">
            Monitoring, cleaning, and maintenance still matter—but they should
            not carry the full burden of protection alone.
          </p>

          <div className="mt-14 overflow-hidden rounded-2xl border border-neutral-800 bg-white/[0.02] p-4 shadow-[0_30px_80px_rgba(0,0,0,0.45)] md:p-6">
            <Image
              src="/assets/v1/image_responsibility_01.png"
              alt="Control layer"
              width={1100}
              height={700}
              unoptimized
              className="mx-auto h-auto w-full max-w-3xl rounded-xl opacity-90"
            />
          </div>

          <div className="mt-14 flex flex-col items-center gap-3 text-sm text-neutral-400">
            {["Monitoring", "Cleaning", "Maintenance"].map((i) => (
              <div
                key={i}
                className="w-full max-w-[300px] rounded-md border border-neutral-700 bg-white/[0.02] px-10 py-2.5 text-center transition duration-300 hover:border-neutral-500 hover:bg-white/[0.04]"
              >
                {i}
              </div>
            ))}

            <div className="my-4 w-full max-w-[300px] border-t border-neutral-600" />

            <div className="w-full max-w-[300px] rounded-md border border-[#F7C86A] bg-[#F7C86A]/[0.05] px-10 py-3 text-center font-medium text-[#F7C86A] shadow-[0_0_30px_rgba(247,200,106,0.07)]">
              Material Behavior (Control Layer)
            </div>
          </div>

          <p className="mx-auto mt-10 max-w-xl text-lg leading-8 text-neutral-300">
            We place responsibility where failure cannot be silently deferred.
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/* AUDIENCE */}
      {/* ============================================================ */}
      <section className="py-20">
        <div className="mb-8">
          <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">
            Designed For
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {audiences.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-neutral-800 bg-[#0E1522] p-7 transition duration-300 hover:-translate-y-1 hover:border-neutral-700 hover:shadow-[0_22px_60px_rgba(0,0,0,0.45)]"
            >
              <h3 className="text-lg font-medium text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-neutral-400">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ============================================================ */}
      {/* FINAL CLOSE */}
      {/* ============================================================ */}
      <section
        id="inquiry"
        className="relative overflow-hidden py-32 text-center"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(247,200,106,0.08),transparent_28%)]" />

        <div className="relative mx-auto max-w-4xl">
          <p className="text-3xl leading-relaxed text-neutral-200 md:text-4xl">
            This is not a product catalog.
            <br />
            <span className="text-white">
              It is a shift in where responsibility is placed.
            </span>
          </p>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-neutral-400">
            For institutional, technical, or research-driven conversations,
            begin with a materials inquiry.
          </p>

          <div className="mt-12">
            <a
              href="/contact?type=institutional"
              className="inline-flex rounded-md bg-[#F7C86A] px-10 py-4 text-sm font-medium text-black transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_50px_rgba(247,200,106,0.22)]"
            >
              Start Materials Inquiry
            </a>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* FOOTER */}
      {/* ============================================================ */}
      <footer className="mx-auto max-w-3xl pb-20 text-center md:text-left">
        <p className="text-sm leading-7 text-neutral-500">
          This site presents high-level material information only. No
          commercial, regulatory, or performance claims are made. Specific
          suitability and compliance depend on application context and
          implementation.
        </p>
      </footer>
    </main>
  );
}
