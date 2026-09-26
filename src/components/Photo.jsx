import React from "react";
import { Image } from "@/components/ui/image";
import { cn } from "@/lib/utils";

/**
 * Content photo. Pass `note` to show an optional small caption badge.
 */
export default function Photo({ src, alt, className, imgClassName, note = null, priority }) {
  return (
    <figure className={cn("relative overflow-hidden bg-osc-ink", className)}>
      <Image
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        fittingType="fill"
        className={cn("h-full w-full object-cover", imgClassName)}
      />
      {note && (
        <figcaption className="absolute bottom-2 left-2 rounded-full bg-osc-ink/80 px-3 py-1 font-condensed text-[10px] uppercase tracking-[0.15em] text-osc-cream backdrop-blur">
          {note}
        </figcaption>
      )}
    </figure>
  );
}