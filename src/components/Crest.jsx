import React from "react";
import { cn } from "@/lib/utils";

/**
 * Official Orlando Soccer Club logo (public/images/osc-logo.*).
 * Use `badge` on dark backgrounds: it places the logo on a cream circle so the
 * black rings and purple lettering stay visible.
 */
export default function Crest({ className = "h-16 w-16", badge = false }) {
  const img = (
    <picture>
      <source srcSet="/images/osc-logo.webp" type="image/webp" />
      <img
        src="/images/osc-logo.png"
        alt="Orlando Soccer Club logo"
        width={512}
        height={512}
        className={cn("h-full w-full object-contain", !badge && className)}
      />
    </picture>
  );

  if (!badge) return img;

  return (
    <span className={cn("inline-block shrink-0 rounded-full bg-osc-cream p-1.5 shadow-md", className)}>
      {img}
    </span>
  );
}
