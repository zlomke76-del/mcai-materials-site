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

export default function MaterialsSolaceRuntime({
  context,
  pageLabel,
}: Props) {
  const [mode, setMode] = useState<SolaceMode>("intro");
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState<string | null>(null);
  const [email, setEmail] = useState("");

  function handleSubmitQuestion() {
    // GOVERNED PLACEHOLDER RESPONSE
    // This makes the system honest and visible until a real Solace backend is connected.
    setAnswer(
      `Based on the information published on this site, ${pageLabel} is positioned as a material-level approach to addressing moisture-associated conditions that can contribute to microbial growth in infrastructure environments.

I can help explain the intent, scope, and boundaries of the material platform, but I can’t assess suitability for a specific installation, provide performance guarantees, or offer operational guidance.`
    );
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
              I can’t provide instructions, regulatory advice, or guarantees —
              but I can help explain intent, scope, and boundaries.
            </p>
          </>
        )}

        {mode === "explain" && (
          <p>
            Ask your question below. I’ll stay within the published material
            scope.
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
            Leave an email address and someone from the materials team can follow
            up.
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
