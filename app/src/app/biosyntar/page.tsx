import SolacePanel from "@/components/SolacePanel";

export default function BioSyntarPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16 space-y-6">
      <h1 className="text-2xl font-semibold">BioSyntar™</h1>

      <p className="text-neutral-700">
        BioSyntar™ is a family of ultra-thin, biodegradable antibacterial
        microfilms designed for food-contact packaging, including wraps,
        liners, and protective films used in fresh and refrigerated foods.
      </p>

      <p className="text-neutral-700">
        Antibacterial protection is embedded directly into the material
        structure. No surface coatings, heavy metals, or leaching chemistries
        are required.
      </p>

      <p className="text-neutral-700">
        The material is engineered to perform during use and break down
        responsibly at end-of-life, supporting safer food handling while
        reducing environmental persistence.
      </p>

      <SolacePanel context="BioSyntar™ materials" />
    </main>
  );
}
