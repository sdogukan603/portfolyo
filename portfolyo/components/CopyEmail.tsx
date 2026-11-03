"use client";

import { useEffect, useRef, useState } from "react";
import { Icon } from "./Icon";

export function CopyEmail({ email }: { email: string }) {
  const [state, setState] = useState<"idle" | "copied" | "failed">("idle");
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => () => clearTimeout(timer.current), []);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setState("copied");
    } catch {
      setState("failed");
    }
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setState("idle"), 2200);
  }

  const copied = state === "copied";

  return (
    <>
      <button
        type="button"
        onClick={copy}
        className={`inline-flex h-11 items-center gap-2 rounded-md border px-4 text-sm font-medium transition-colors duration-200 ${
          copied
            ? "border-accent/60 bg-accent/10 text-accent"
            : "border-line text-fg hover:border-fg/40 hover:bg-surface"
        }`}
      >
        <Icon name={copied ? "check" : "copy"} className="size-4" />
        {copied ? "Kopyalandı" : "Adresi kopyala"}
      </button>
      <span role="status" aria-live="polite" className="sr-only">
        {copied ? "E-posta adresi panoya kopyalandı" : state === "failed" ? "Kopyalanamadı, adresi elle seç" : ""}
      </span>
    </>
  );
}
