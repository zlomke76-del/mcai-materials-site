"use client";

import { useMemo, useState } from "react";

type SolaceMode =
  | "intro"
  | "explain"
  | "answer"
  | "qualify"
  | "email"
  | "complete";

interface Props {
  context: string;
  pageLabel: string;
}

function buildGovernedAnswer(pageLabel: string, context: string): string {
  const lower = `${pageLabel} ${context}`.toLowerCase();

  if (
    lower.includes("polyverdia") ||
    lower.includes("moisture") ||
    lower.includes("hvac") ||
    lower.includes("infrastructure")
  ) {
    return `Based on the information published on this site, ${pageLabel} is presented as a material-level approach to addressing moisture-associated conditions that can contribute to microbial growth in infrastructure environments.

It is described as a moisture-active polymer system intended for persistent protection within HVAC and related infrastructure settings, especially where moisture accumulation is difficult to eliminate through maintenance alone.

I can help explain the platform’s intent, scope, and boundaries, but I can’t assess suitability for a specific installation, provide performance guarantees, or offer operational guidance.`;
  }

  return `Based on the information published on this site, ${pageLabel} is presented as a material-level approach to addressing food-contact surface contamination through embedded antibacterial functionality.

It is described as a family of ultra-thin biodegradable microfilms designed for food-contact packaging and protective applications, with antibacterial function built into the material structure rather than added as a coating.

I can help explain the platform’s intent, scope, and boundaries, but I can’t provide regulatory advice, performance guarantees, or operational instructions.`;
}

export default function MaterialsSolaceRuntime({
  context,
  pageLabel,
}: Props) {
  const [mode, setMode] = useState<SolaceMode>("intro");
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState<string | null>(null);
  const [email, setEmail] = useState("");

  const accentClasses = useMemo(() => {
    const lower = `${pageLabel} ${context}`.toLowerCase();
    const isPolyVerdia =
      lower.includes("polyverdia") ||
      lower.includes("moisture") ||
      lower.includes("hvac") ||
      lower.includes("infrastructure");

    return isPolyVerdia
      ? {
          accentText: "text-sky-300",
          accentTextSoft: "text-sky-400",
          accentBorder: "border-sky-400/20",
          accentBorderStrong: "border-sky-400/35",
          accentBg: "bg-sky-400/[0.06]",
          focusBorder: "focus:border-sky-400/50",
          buttonText: "text-sky-300 hover:text-sky-200",
          secondaryText: "text-emerald-400 hover:text-emerald-300",
        }
      : {
          accentText: "text-emerald-300",
          accentTextSoft: "text-emerald-400",
          accentBorder: "border-emerald-400/20",
          accentBorderStrong: "border-emerald-400/35",
          accentBg: "bg-emerald-400/[0.06]",
          focusBorder: "focus:border-emerald-400/50",
          buttonText: "text-emerald-300 hover:text-emerald-200",
          secondaryText: "text-sky-300 hover:text-sky-200",
        };
  }, [context, pageLabel]);

  function handleSubmitQuestion() {
    setAnswer(buildGovernedAnswer(pageLabel, context));
    setMode("answer");
  }

  return (
    <div className="space-y-6">
      {/* ===================================================== */}
      {/* GOVERNED HEADER */}
      {/* ===================================================== */}
      <div className="rounded-xl border border-white/8 bg-white/[0.02] p-4">
        <div className="flex flex-wrap items-center gap-3 text-[11px] uppercase tracking-[0.18em] text-neutral-500">
          <span className={`${accentClasses.accentTextSoft}`}>Governed explainer</span>
          <span>Published-scope only</span>
          <span>No operational guidance</span>
        </div>

        <p className="mt-3 text-sm leading-7 text-neutral-300">
          Solace stays within the material boundaries published on this page.
          She can clarify intent, scope, and framing, but not provide
          instructions, guarantees, regulatory advice, or suitability decisions.
        </p>
      </div>

      {/* ===================================================== */}
      {/* SOLACE VOICE */}
      {/* ===================================================== */}
      <div className="text-sm leading-7 text-neutral-300">
        {mode === "intro" && (
          <>
            <p className="font-medium text-white">I’m Solace.</p>
            <p className="mt-2">
              I can answer high-level questions about{" "}
              <span className={`font-medium ${accentClasses.accentText}`}>
                {pageLabel}
              </span>{" "}
              using only the information published on this site.
            </p>
            <p className="mt-2 text-neutral-500">
              I can help explain intent, scope, and boundaries. I can’t provide
              instructions, regulatory advice, performance guarantees, or
              installation-specific guidance.
            </p>
          </>
        )}

        {mode === "explain" && (
          <div className="rounded-xl border border-white/8 bg-white/[0.02] p-4">
            <p className="text-neutral-400">
              Ask your question below. I’ll stay within the published material
              scope for <span className="text-white">{pageLabel}</span>.
            </p>
          </div>
        )}

        {mode === "answer" && answer && (
          <div className="space-y-4">
            <p className="font-medium text-white">Governed response</p>

            <div
              className={`rounded-xl border ${accentClasses.accentBorder} ${accentClasses.accentBg} p-5`}
            >
              <div className="mb-3 text-[11px] uppercase tracking-[0.18em] text-neutral-500">
                Final
              </div>
              <p className="whitespace-pre-line text-sm leading-7 text-neutral-200">
                {answer}
              </p>
            </div>

            <div className="rounded-xl border border-white/8 bg-white/[0.02] p-4">
              <div className="mb-2 text-[11px] uppercase tracking-[0.18em] text-neutral-500">
                Boundary note
              </div>
              <p className="text-sm leading-7 text-neutral-400">
                This response is constrained to published site content. Human
                review is required for installation-specific, regulatory,
                commercial, or performance-sensitive questions.
              </p>
            </div>
          </div>
        )}

        {mode === "qualify" && (
          <div className="rounded-xl border border-white/8 bg-white/[0.02] p-4">
            <p className="text-neutral-400">
              Some questions require human review. I can help route your inquiry
              to the materials team.
            </p>
          </div>
        )}

        {mode === "email" && (
          <div className="rounded-xl border border-white/8 bg-white/[0.02] p-4">
            <p className="text-neutral-400">
              Leave an email address and someone from the materials team may
              follow up if appropriate.
            </p>
          </div>
        )}

        {mode === "complete" && (
          <div className="rounded-xl border border-white/8 bg-white/[0.02] p-4">
            <p className="text-neutral-300">
              Thank you. Your information has been noted.
              <br />
              A member of the materials team may reach out if appropriate.
            </p>
          </div>
        )}
      </div>

      {/* ===================================================== */}
      {/* INPUT ZONE */}
      {/* ===================================================== */}
      {mode === "intro" && (
        <button
          className={`text-sm font-medium transition ${accentClasses.buttonText}`}
          onClick={() => setMode("explain")}
        >
          Ask a question →
        </button>
      )}

      {mode === "explain" && (
        <div className="space-y-4">
          <div className="rounded-xl border border-white/8 bg-white/[0.02] p-4">
            <label className="mb-3 block text-xs uppercase tracking-[0.18em] text-neutral-500">
              Your question
            </label>

            <textarea
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder={`Ask about ${pageLabel}…`}
              rows={4}
              className={`w-full rounded-xl border ${accentClasses.accentBorder} bg-[#0B111C] p-4 text-sm text-neutral-200 placeholder:text-neutral-500 outline-none transition ${accentClasses.focusBorder}`}
            />
          </div>

          <div className="flex gap-4">
            <button
              className={`text-sm font-medium transition disabled:opacity-30 ${accentClasses.secondaryText}`}
              onClick={handleSubmitQuestion}
              disabled={!question.trim()}
            >
              Ask Solace
            </button>

            <button
              className="text-sm text-neutral-500 transition hover:text-neutral-300"
              onClick={() => {
                setQuestion("");
                setMode("intro");
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {mode === "answer" && (
        <div className="flex gap-4">
          <button
            className={`text-sm font-medium transition ${accentClasses.buttonText}`}
            onClick={() => setMode("qualify")}
          >
            Continue with human review
          </button>

          <button
            className="text-sm text-neutral-500 transition hover:text-neutral-300"
            onClick={() => {
              setQuestion("");
              setAnswer(null);
              setMode("intro");
            }}
          >
            Done
          </button>
        </div>
      )}

      {mode === "qualify" && (
        <button
          className={`text-sm font-medium transition ${accentClasses.buttonText}`}
          onClick={() => setMode("email")}
        >
          Contact materials team →
        </button>
      )}

      {mode === "email" && (
        <div className="space-y-4">
          <div className="rounded-xl border border-white/8 bg-white/[0.02] p-4">
            <label className="mb-3 block text-xs uppercase tracking-[0.18em] text-neutral-500">
              Email address
            </label>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@company.com"
              className={`w-full rounded-xl border ${accentClasses.accentBorder} bg-[#0B111C] p-4 text-sm text-neutral-200 placeholder:text-neutral-500 outline-none transition ${accentClasses.focusBorder}`}
            />
          </div>

          <button
            className={`text-sm font-medium transition disabled:opacity-30 ${accentClasses.secondaryText}`}
            onClick={() => setMode("complete")}
            disabled={!email.trim()}
          >
            Submit
          </button>
        </div>
      )}
    </div>
  );
}
