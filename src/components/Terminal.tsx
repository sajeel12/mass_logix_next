"use client";

import { useEffect, useRef, useState } from "react";

type Line = { text: string; tone?: "cmd" | "ok" | "dim" | "accent" };

const script: Line[] = [
  { text: "$ masslogix init --idea \"your-product\"", tone: "cmd" },
  { text: "→ scaffolding architecture ............ done", tone: "ok" },
  { text: "→ wiring APIs + database ............. done", tone: "ok" },
  { text: "→ training AI models ................. done", tone: "ok" },
  { text: "→ provisioning cloud infra .......... done", tone: "ok" },
  { text: "", tone: "dim" },
  { text: "✓ build passed  ·  0 errors  ·  ship it", tone: "accent" },
  { text: "$ _", tone: "cmd" },
];

const toneClass: Record<NonNullable<Line["tone"]>, string> = {
  cmd: "term-fg",
  ok: "term-dim",
  dim: "term-muted",
  accent: "term-accent",
};

/** Types out a fake build log line-by-line, then holds. */
export default function Terminal() {
  const [visible, setVisible] = useState(0);
  const [charCount, setCharCount] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (started.current) return;
    started.current = true;

    let line = 0;
    let char = 0;
    let timer: ReturnType<typeof setTimeout>;

    const tick = () => {
      if (line >= script.length) return;
      const current = script[line].text;
      if (char <= current.length) {
        setCharCount(char);
        char += 1;
        timer = setTimeout(tick, 18);
      } else {
        line += 1;
        char = 0;
        setVisible(line);
        setCharCount(0);
        timer = setTimeout(tick, 260);
      }
    };
    timer = setTimeout(tick, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="terminal-shell glow-border overflow-hidden rounded-2xl shadow-card">
      {/* title bar */}
      <div className="terminal-bar flex items-center gap-2 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
        <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        <span className="terminal-label ml-3 font-mono text-xs">
          masslogix — build
        </span>
      </div>

      {/* body */}
      <div className="terminal-body min-h-[248px] p-5 font-mono text-[13px] leading-relaxed sm:text-sm">
        {script.slice(0, visible).map((l, i) => (
          <p key={i} className={`whitespace-pre ${toneClass[l.tone ?? "dim"]}`}>
            {l.text || " "}
          </p>
        ))}
        {visible < script.length && (
          <p className={`whitespace-pre ${toneClass[script[visible].tone ?? "dim"]}`}>
            {script[visible].text.slice(0, charCount)}
            <span className="cursor-blink text-lime">▍</span>
          </p>
        )}
      </div>
    </div>
  );
}
