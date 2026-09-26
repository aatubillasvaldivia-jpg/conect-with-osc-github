import React from "react";
import { Instagram, MessageCircle } from "lucide-react";
import Photo from "@/components/Photo";
import { CONTACT } from "@/lib/oscData";

export default function Comunidad() {
  return (
    <section className="relative isolate overflow-hidden bg-osc-ink">
      <Photo
        src="/images/team-photo.webp"
        alt="Orlando Soccer Club team photo on the field with coaches"
        className="absolute inset-0 h-full w-full"
        imgClassName="opacity-40"
        note={null}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-osc-purple via-osc-purple/80 to-osc-ink/60" />

      <div className="relative mx-auto max-w-3xl px-5 py-24 text-center text-osc-cream lg:px-8 lg:py-32">
        <p className="font-condensed text-xs uppercase tracking-[0.3em] text-osc-orange">Join the club</p>
        <h2 className="mt-5 font-heading text-4xl uppercase leading-[0.95] sm:text-5xl lg:text-6xl">
          Become part of the community
        </h2>
        <p className="mx-auto mt-6 max-w-xl font-body text-base leading-relaxed text-osc-cream/85 lg:text-lg">
          This is more than training. It is families supporting one another, players growing together,
          and a club that celebrates every achievement as its own. We will see you on the field.
        </p>

        <div className="mt-9 flex flex-wrap justify-center gap-4">
          <a
            href={CONTACT.whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-osc-orange px-7 py-3.5 font-condensed text-sm font-semibold uppercase tracking-[0.15em] text-osc-ink transition hover:bg-osc-cream"
          >
            <MessageCircle className="h-4 w-4" />
            Talk to the club
          </a>
          <a
            href={CONTACT.instagramLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-osc-cream/40 px-7 py-3.5 font-condensed text-sm uppercase tracking-[0.15em] text-osc-cream transition hover:bg-osc-cream/10"
          >
            <Instagram className="h-4 w-4" />
            {CONTACT.instagram}
          </a>
        </div>
      </div>
    </section>
  );
}