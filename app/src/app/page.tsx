import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16 space-y-6">
      <h1 className="text-3xl font-semibold">
        Governed Materials, Explained With Restraint
      </h1>

      <p className="text-neutral-700">
        This site presents sustainable material technologies alongside a
        governed AI explainer powered by Moral Clarity AI.
      </p>

      <p className="text-neutral-700">
        Solace answers questions strictly from published material and approved
        explanations. When a question exceeds scope, she will decline.
      </p>

      <p className="text-neutral-700">This is intentional.</p>

      <div className="pt-4 text-sm">
        <ul className="space-y-2">
          <li>
            <Link
              href="/biosyntar"
              className="text-neutral-800 underline hover:text-black"
            >
              → BioSyntar™ — food-contact microfilms
            </Link>
          </li>
          <li>
            <Link
              href="/polyverdia"
              className="text-neutral-800 underline hover:text-black"
            >
              → PolyVerdia™ — moisture-active HVAC materials
            </Link>
          </li>
        </ul>
      </div>
    </main>
  );
}
