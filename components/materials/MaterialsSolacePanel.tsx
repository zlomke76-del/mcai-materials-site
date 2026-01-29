"use client";

import { useEffect, useRef, useState } from "react";

type Message = {
  role: "user" | "assistant";
  content: string;
};

type Props = {
  context: string;
};

export default function MaterialsSolacePanel({ context }: Props) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [streaming, setStreaming] = useState(false);

  const transcriptRef = useRef<HTMLDivElement | null>(null);

  // ------------------------------------------------------------
  // Initial greeting (mirrors D&D non-authoritative tone)
  // ------------------------------------------------------------
  useEffect(() => {
    if (messages.length === 0) {
      setMessages([
        {
          role: "assistant",
          content:
            "I can help answer general questions about this material based on the information published on this page.",
        },
      ]);
    }
  }, [messages.length]);

  // ------------------------------------------------------------
  // Auto-scroll
  // ------------------------------------------------------------
  useEffect(() => {
    if (!transcriptRef.current) return;
    transcriptRef.current.scrollTo({
      top: transcriptRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages]);

  // ------------------------------------------------------------
  // Send
  // ------------------------------------------------------------
  async function send() {
    if (!input.trim() || streaming) return;

    const userMsg = input.trim();
    setInput("");
    setStreaming(true);
    setMessages((m) => [...m, { role: "user", content: userMsg }]);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: userMsg,
          modeHint: "Materials",
          context,
        }),
      });

      const data = await res.json();

      if (typeof data?.response === "string") {
        setMessages((m) => [
          ...m,
          { role: "assistant", content: data.response },
        ]);
      } else {
        setMessages((m) => [
          ...m,
          {
            role: "assistant",
            content:
              "I’m unable to answer that within the informational scope of this page.",
          },
        ]);
      }
    } catch {
      setMessages((m) => [
        ...m,
        {
          role: "assistant",
          content:
            "Something went wrong while processing your question. Please try again.",
        },
      ]);
    } finally {
      setStreaming(false);
    }
  }

  function onEnterSend(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  }

  // ------------------------------------------------------------
  // UI
  // ------------------------------------------------------------
  return (
    <div>
      {/* Transcript */}
      <div
        ref={transcriptRef}
        className="mb-4 max-h-64 overflow-y-auto space-y-3 text-sm text-zinc-800 dark:text-zinc-200"
      >
        {messages.map((m, i) => (
          <div
            key={i}
            className={
              m.role === "assistant"
                ? "rounded-md bg-white/60 p-3 dark:bg-zinc-900/40"
                : "text-right"
            }
          >
            {m.content}
          </div>
        ))}
      </div>

      {/* Composer */}
      <div className="flex gap-2">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={onEnterSend}
          placeholder="Ask a general question about this material…"
          rows={2}
          className="flex-1 resize-none rounded-md border border-zinc-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-400 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100"
        />

        <button
          onClick={send}
          disabled={streaming}
          className="rounded-md bg-zinc-900 px-4 py-2 text-sm font-medium text-white disabled:opacity-50 dark:bg-zinc-100 dark:text-zinc-900"
        >
          Ask
        </button>
      </div>
    </div>
  );
}
