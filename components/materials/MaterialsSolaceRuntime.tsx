"use client";

import { useState } from "react";
import SolacePanel from "@/components/SolacePanel";

/* ============================================================
   Solace Materials Funnel — Authoritative Runtime
   ============================================================ */

type SolaceMode =
  | "explainer"
  | "interest-gate"
  | "sales"
  | "closed";

type Props = {
  context: string;
  pageLabel: string; // e.g. "PolyVerdia™"
};

/* ------------------------------------------------------------
   Conservative access-intent detector
------------------------------------------------------------ */
function detectAccessIntent(text: string): boolean {
  const t = text.toLowerCase();
  return (
    t.includes("buy") ||
    t.includes("purchase") ||
    t.includes("available") ||
    t.includes("pricing") ||
    t.includes("use this") ||
    t.includes("deploy") ||
    t.includes("who sells") ||
    t.includes("next step") ||
    t.includes("contact")
  );
}

/* ============================================================
   MAIN
============================================================ */
export default function MaterialsSolaceRuntime({
  context,
  pageLabel,
}: Props) {
  const [mode, setMode] = useState<SolaceMode>("explainer");
  const [email, setEmail] = useState("");
  const [locked, setLocked] = useState(false);

  /* ----------------------------------------------------------
     Mode guards
  ---------------------------------------------------------- */
  const allowInput = mode !== "interest-gate" && mode !== "closed";

  /* ----------------------------------------------------------
     Event hooks passed into Solace
     (non-invasive, message-level interception)
  ---------------------------------------------------------- */
  function handleUserMessage(text: string) {
    if (mode === "explainer" && detectAccessIntent(text)) {
      setMode("interest-gate");
      return false; // block Solace send
    }
    return true;
  }

  /* ----------------------------------------------------------
     Email submission
  ---------------------------------------------------------- */
  function submitEmail() {
    if (!email.trim()) return;

    // Minimal, audit-safe handoff
    console.log("SOLACE MATERIALS HANDOFF", {
      email,
      page: pageLabel,
      source: "solace-materials",
      timestamp: Date.now(),
    });

    setLocked(true);
    setMode("closed");
  }

  /* ============================================================
     RENDER
  ============================================================ */
  return (
    <div className="space-y-6">
      {/* ===================== EXPLAINER ===================== */}
      {mode === "explainer" && (
        <>
          <p className="text-sm leading-6 text-zinc-700 dark:text-zinc-300">
            I can help explain these materials at a high level using only the
            information published on this page.
            <br />
            <br />
            I can’t provide operational instructions, performance guarantees,
            regulatory determinations, or comparative claims.
          </p>

          <SolacePanel
            context={context}
            allowSend={allowInput}
            onBeforeSend={handleUserMessage}
            modeHint="materials-explainer"
          />
        </>
      )}

      {/* ================== INTEREST GATE ================== */}
      {mode === "interest-gate" && (
        <div className="rounded-lg border border-amber-300 bg-amber-50 p-4 dark:border-amber-700 dark:bg-amber-900/20">
          <p className="mb-4 text-sm leading-6 text-zinc-800 dark:text-zinc-200">
            I can continue explaining the material at a high level, or I can
            switch to an access and interest discussion.
            <br />
            <br />
            The access discussion involves sales follow-up and human review.
            <br />
            <br />
            Which would you prefer?
          </p>

          <div className="flex gap-3">
            <button
              onClick={() => setMode("explainer")}
              className="rounded-md border border-zinc-300 px-4 py-2 text-sm dark:border-zinc-700"
            >
              Continue explanation
            </button>

            <button
              onClick={() => setMode("sales")}
              className="rounded-md bg-amber-500 px-4 py-2 text-sm font-medium text-black"
            >
              Discuss access / availability
            </button>
          </div>
        </div>
      )}

      {/* ===================== SALES ===================== */}
      {mode === "sales" && (
        <div className="rounded-lg border border-sky-300 bg-sky-50 p-5 dark:border-sky-700 dark:bg-sky-900/25">
          <p className="mb-4 text-sm leading-6 text-zinc-800 dark:text-zinc-200">
            I’m switching from explainer mode to an access and interest
            discussion.
            <br />
            <br />
            In this mode, I may ask a small number of questions and may collect
            contact information so a human team can follow up.
          </p>

          <p className="mb-3 text-sm leading-6 text-zinc-700 dark:text-zinc-300">
            If you’d like to continue, you may leave an email address below.
          </p>

          <p className="mb-4 text-xs text-zinc-600 dark:text-zinc-400">
            Your email will be used only to respond to this inquiry.
            <br />
            No marketing or automated outreach.
          </p>

          <div className="flex gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@company.com"
              className="w-full rounded-md border border-zinc-300 px-3 py-2 text-sm dark:border-zinc-700"
            />

            <button
              onClick={submitEmail}
              className="rounded-md bg-sky-500 px-4 py-2 text-sm font-medium text-black"
            >
              Submit
            </button>
          </div>
        </div>
      )}

      {/* ===================== CLOSED ===================== */}
      {mode === "closed" && (
        <div className="rounded-lg border border-zinc-300 bg-zinc-50 p-4 dark:border-zinc-700 dark:bg-zinc-900/40">
          <p className="text-sm leading-6 text-zinc-700 dark:text-zinc-300">
            Thank you. A human team member will review your inquiry and follow up
            if appropriate.
            <br />
            <br />
            This conversation is now closed.
          </p>
        </div>
      )}
    </div>
  );
}
