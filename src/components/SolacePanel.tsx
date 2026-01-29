interface SolacePanelProps {
  context: string;
}

export default function SolacePanel({ context }: SolacePanelProps) {
  return (
    <section className="mt-10 rounded-lg border border-neutral-200 bg-neutral-50 p-6">
      <h2 className="text-lg font-medium">Ask Solace</h2>

      <p className="mt-2 text-sm text-neutral-600">
        Solace is a governed AI explainer powered by Moral Clarity AI.
      </p>

      <p className="mt-2 text-sm text-neutral-600">
        On this page, Solace will answer questions strictly from the published
        material and approved explanations related to <strong>{context}</strong>.
      </p>

      <p className="mt-2 text-sm text-neutral-600">
        Questions that exceed scope, request performance guarantees, or require
        regulatory or medical claims will be declined.
      </p>

      <div className="mt-4 rounded-md bg-neutral-100 px-4 py-3 text-sm text-neutral-500">
        Solace is not active on this page yet.
      </div>
    </section>
  );
}
