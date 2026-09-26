import React from "react";
import { cn } from "@/lib/utils";

export const inputClass =
  "w-full rounded-xl border border-osc-ink/15 bg-white px-4 py-3 font-body text-base text-osc-ink outline-none transition placeholder:text-osc-ink/35 focus:border-osc-purple focus:ring-2 focus:ring-osc-purple/20";

export default function Field({ label, htmlFor, error, hint, children, className }) {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <label
        htmlFor={htmlFor}
        className="font-condensed text-xs uppercase tracking-[0.18em] text-osc-ink/70"
      >
        {label}
      </label>
      {children}
      {hint && !error && <p className="font-body text-xs leading-relaxed text-osc-ink/50">{hint}</p>}
      {error && <p className="font-body text-xs font-medium text-osc-purple">{error}</p>}
    </div>
  );
}