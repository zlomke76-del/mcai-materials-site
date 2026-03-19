// app/src/app/page.tsx

import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Materials | MCAI",
  description:
    "Material platforms designed for environments where failure is silent and outcomes matter.",
};

export default function HomePage() {
  return (
    <main className="bg-[#0A0F17] text-[#E9F0FA]">

      {/* ============================================================ */}
      {/* HERO — IMMERSIVE ENTRY */}
      {/* ============================================================ */}
      <section className="relative overflow-hidden px-6 pt-32 pb-32">
        <div className="absolute inset-0 opacity-[0.18]">
          <Image
            src="/assets/v1/image_hero_01.png"
            alt="Material system"
            fill
            priority
            className="object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(126,217,163,0.15),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(122,162,255,0.15),transparent_40%)]" />

        <div className="absolute inset-0 bg-[#0A0F17]/80" />

        <div className="relative mx-auto max-w-5xl">
          <p className="text-xs uppercase tracking-widest text-neutral-500">
            MCAI MATERIALS
          </p>

          <h1 className="mt-8 text-5xl md:text-6xl font-semibold leading-tight">
            Failure is invisible.
            <br />
            Control should not be.
          </h1>

          <p className="mt-8 text-xl text-neutral-300 max-w-2xl">
            These materials operate where outcomes are determined—not after
            failure, but within the system itself.
          </p>

          <div className="mt-12 flex gap-4">
            <button className="bg-[#F7C86A] text-black px-7 py-3 rounded-md font-medium">
              Request Technical Brief
            </button>

            <a
              href="#materials"
              className="border border-neutral-600 px-7 py-3 rounded-md text-neutral-300"
            >
              Explore Materials
            </a>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* DESIGN PRINCIPLE */}
      {/* ============================================================ */}
      <section className="px-6 py-24 text-center">
        <p className="text-sm text-[#F7C86A] tracking-wide">
          ⚖️ Design Principle
        </p>

        <p className="mt-6 text-2xl leading-relaxed text-neutral-200 max-w-3xl mx-auto">
          Responsibility should not depend on perfect behavior,
          maintenance, or conditions.
          <br />
          <span className="text-white">
            It should exist within the system itself.
          </span>
        </p>
      </section>

      {/* ============================================================ */}
      {/* FAILURE DOMAINS — STRONGER */}
      {/* ============================================================ */}
      <section className="px-6 py-16 max-w-6xl mx-auto">
        <div className="grid gap-8 md:grid-cols-3">
          {[
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
          ].map((item) => (
            <div
              key={item.title}
              className="border border-neutral-800 bg-[#0E1522] p-7 rounded-xl hover:shadow-xl transition"
            >
              <h3 className="text-lg font-medium">{item.title}</h3>
              <p className="mt-3 text-sm text-neutral-400">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ============================================================ */}
      {/* MATERIALS — CLEAR DISTINCTION */}
      {/* ============================================================ */}
      <section id="materials" className="px-6 py-24 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16">

          {/* BioSyntar */}
          <article className="bg-emerald-400/5 border border-emerald-400/20 p-10 rounded-xl">
            <Image
              src="/assets/v1/image_biosyntar_01.png"
              alt="BioSyntar"
              width={600}
              height={400}
              className="rounded-md mb-6"
            />

            <h2 className="text-xl text-emerald-300 font-semibold">
              BioSyntar™
            </h2>

            <p className="mt-4 text-emerald-200 text-sm">
              Persistent antimicrobial protection at the material layer
            </p>

            <p className="mt-6 text-neutral-300">
              Ultra-thin biodegradable microfilms engineered for
              food-contact environments.
            </p>

            <Link
              href="/biosyntar"
              className="mt-8 inline-block text-emerald-300 underline"
            >
              View Technical Overview →
            </Link>
          </article>

          {/* PolyVerdia */}
          <article className="bg-sky-400/5 border border-sky-400/20 p-10 rounded-xl">
            <Image
              src="/assets/v1/image_polyverdia_01.png"
              alt="PolyVerdia"
              width={600}
              height={400}
              className="rounded-md mb-6"
            />

            <h2 className="text-xl text-sky-300 font-semibold">
              PolyVerdia™
            </h2>

            <p className="mt-4 text-sky-200 text-sm">
              Moisture-driven microbial control inside infrastructure
            </p>

            <p className="mt-6 text-neutral-300">
              Designed for environments where condensation cannot be
              eliminated.
            </p>

            <Link
              href="/polyverdia"
              className="mt-8 inline-block text-sky-300 underline"
            >
              View Technical Overview →
            </Link>
          </article>
        </div>
      </section>

      {/* ============================================================ */}
      {/* CONTROL LAYER — CENTERPIECE */}
      {/* ============================================================ */}
      <section className="px-6 py-32 text-center">
        <p className="text-neutral-400 text-sm mb-6">
          Most systems rely on intervention.
        </p>

        <h2 className="text-3xl font-semibold mb-12">
          We move responsibility beneath intervention.
        </h2>

        <Image
          src="/assets/v1/image_responsiblity_01.png"
          alt="Control layer"
          width={700}
          height={400}
          className="mx-auto opacity-80 mb-16"
        />

        <div className="flex flex-col items-center gap-3 text-sm text-neutral-400">
          {["Monitoring", "Cleaning", "Maintenance"].map((i) => (
            <div
              key={i}
              className="border border-neutral-700 px-10 py-2 rounded-md"
            >
              {i}
            </div>
          ))}

          <div className="w-72 border-t border-neutral-600 my-4" />

          <div className="border border-[#F7C86A] text-[#F7C86A] px-10 py-3 rounded-md font-medium">
            Material Behavior (Control Layer)
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* AUDIENCE */}
      {/* ============================================================ */}
      <section className="px-6 py-20 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              title: "Packaging Engineers",
              text: "Reduce contamination risk without increasing complexity.",
            },
            {
              title: "Infrastructure Operators",
              text: "Address microbial growth where moisture persists.",
            },
            {
              title: "R&D Partners",
              text: "Explore material-layer control strategies.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="border border-neutral-800 bg-[#0E1522] p-6 rounded-xl"
            >
              <h3 className="text-lg">{item.title}</h3>
              <p className="mt-3 text-sm text-neutral-400">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ============================================================ */}
      {/* FINAL CLOSE */}
      {/* ============================================================ */}
      <section className="px-6 py-32 text-center">
        <p className="text-2xl text-neutral-200 leading-relaxed">
          This is not a product catalog.
          <br />
          <span className="text-white">
            It is a shift in where responsibility is placed.
          </span>
        </p>

        <button className="mt-12 bg-[#F7C86A] text-black px-10 py-4 rounded-md font-medium">
          Request Technical Brief
        </button>
      </section>

      {/* ============================================================ */}
      {/* FOOTER */}
      {/* ============================================================ */}
      <footer className="px-6 pb-20 max-w-3xl mx-auto">
        <p className="text-sm text-neutral-500">
          This site presents high-level material information only. No
          regulatory or performance claims are made.
        </p>
      </footer>
    </main>
  );
}
