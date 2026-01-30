"use client";

import { useState } from "react";

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

/* ===================================================== */
/* PRE-APPROVED ANSWER PATHS (REVIEWED CONTENT) */
/* ===================================================== */

type AnswerPath = {
  id: string;
  match: (q: string) => boolean;
  response: string;
};

const ANSWER_PATHS: AnswerPath[] = [
  {
    id: "what-it-is",
    match: (q) =>
      /what is|what does|overview|define|purpose/i.test(q),
    response: `Based on the information published on this site, ${pageLabel} is a moisture-active polymer platform designed to address conditions associated with microbial growth in infrastructure environments.

It operates at the material layer, where outcomes are shaped before maintenance schedules, chemical treatments, or human intervention can respond.`,
  },
  {
    id: "how-it-works",
    match: (q) =>
      /how does|how it works|mechanism|function/i.test(q),
    response: `${pageLabel} focuses on material-level behavior rather than active treatment.

The material is engineered to perform consistently within moisture-prone environments, supporting infrastructure hygiene without relying on dosing, schedules, or user-initiated action.`,
  },
  {
    id: "where-used",
    match: (q) =>
      /where|use|used|hvac|environment|application/i.test(q),
    response: `The material platform is intended for integration within infrastructure environments where moisture accumulation is known to occur, such as HVAC condensate zones and internal air-handling components.

Specific installation details or suitability assessments require human review.`,
  },
  {
    id: "boundaries",
    match: (q) =>
      /safe|safety|regulatory|approved|guarantee|performance/i.test(q),
    response: `${pageLabel} does not provide performance guarantees, regulatory guidance, or operational instructions.

I can help explain scope and intent, but questions involving compliance, efficacy claims, or deployment decisions require human oversight.`,
  },
];

/* ===================================================== */
/* COMPONENT */
/* ===================================================== */

export default function MaterialsSolaceRuntime({
  context,
  pageLabel,
}: Props) {
  const [mode, setMode] = useState<SolaceMode>("intro");
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState<string | null>(null);
  const [email, setEmail] = useState("");

  function handleSubmitQuestion() {
    const normalized = question.trim();

    const matchedPath = ANSWER_PATHS.find((path) =>
      path.match(normalized)
    );

    if (matchedPath) {
      setAnswer(matchedPath.response);
    } else {
      setAnswer(
        `I don’t have a published answer for that question.

Your question may involve site-specific conditions, operational decisions, or factors that require human review.`
      );
    }

    setMode("answer");
  }

  return (
    <div className="space-y-5">
      {/* ===================================================== */}
      {/* SOLACE VOICE */}
      {/* ===================================================== */}
      <div className="text-sm leading-6 text-zinc-700 dark:text-zinc-300">
        {mode === "intro" && (
          <>
            <p className="font-medium text-zinc-900 dark:text-zinc-100">
              I’m Solace.
            </p>
            <p className="mt-2">
              I can answer general questions about{" "}
              <span className="font-medium">{pageLabel}</span> using only the
              information published on this site.
            </p>
            <p className="mt-2 text-zinc-600 dark:text-zinc-400">
              I don’t infer, speculate, or provide operational guidance.
            </p>
          </>
        )}

        {mode === "explain" && (
          <p>
            Ask your question below. I’ll respond using approved,
            page-scoped material only.
          </p>
        )}

        {mode === "answer" && answer && (
          <>
            <p className="font-medium text-zinc-900 dark:text-zinc-100">
              Here’s what I can share:
            </p>
            <div className="mt-3 rounded-md border border-zinc-200 bg-white p-4 text-sm dark:border-zinc-700 dark:bg-zinc-900">
              <p className="whitespace-pre-line">{answer}</p>
            </div>
          </>
        )}

        {mode === "qualify" && (
          <p>
            Some questions require human review. I can help route that if you’d
            like.
          </p>
        )}

        {mode === "email" && (
          <p>
            Leave an email address and someone from the materials team can
            follow up.
          </p>
        )}

        {mode === "complete" && (
          <p>
            Thank you. Your information has been noted.
            <br />
            A member of the materials team may reach out if appropriate.
          </p>
        )}
      </div>

      {/* ===================================================== */}
      {/* INPUT ZONE */}
      {/* ===================================================== */}
      {mode === "intro" && (
        <button
          className="text-sm font-medium underline underline-offset-4 text-emerald-900 dark:text-emerald-300"
          onClick={() => setMode("explain")}
        >
          Ask a question
        </button>
      )}

      {mode === "explain" && (
        <>
          <textarea
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder={`Ask about ${pageLabel}…`}
            className="w-full rounded-md border border-zinc-300 bg-white p-3 text-sm dark:border-zinc-700 dark:bg-zinc-900"
          />

          <div className="flex gap-4">
            <button
              className="text-sm font-medium text-emerald-900 dark:text-emerald-300"
              onClick={handleSubmitQuestion}
              disabled={!question.trim()}
            >
              Ask Solace
            </button>

            <button
              className="text-sm text-zinc-500"
              onClick={() => setMode("intro")}
            >
              Cancel
            </button>
          </div>
        </>
      )}

      {mode === "answer" && (
        <div className="flex gap-4">
          <button
            className="text-sm font-medium text-emerald-900 dark:text-emerald-300"
            onClick={() => setMode("qualify")}
          >
            Continue with human review
          </button>

          <button
            className="text-sm text-zinc-500"
            onClick={() => setMode("intro")}
          >
            Done
          </button>
        </div>
      )}

      {mode === "qualify" && (
        <button
          className="text-sm font-medium underline underline-offset-4 text-emerald-900 dark:text-emerald-300"
          onClick={() => setMode("email")}
        >
          Contact materials team
        </button>
      )}

      {mode === "email" && (
        <>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@company.com"
            className="w-full rounded-md border border-zinc-300 bg-white p-3 text-sm dark:border-zinc-700 dark:bg-zinc-900"
          />

          <button
            className="text-sm font-medium text-emerald-900 dark:text-emerald-300"
            onClick={() => setMode("complete")}
            disabled={!email}
          >
            Submit
          </button>
        </>
      )}
    </div>
  );
}
