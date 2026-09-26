import React from "react";
import { MessageCircle, ArrowDown } from "lucide-react";
import Crest from "@/components/Crest";
import Photo from "@/components/Photo";
import { CONTACT } from "@/lib/oscData";

const STATS = [
{ valor: "2017", label: "Year founded" },
{ valor: "\xA0 \xA0 4", label: "Development stages" },
{ valor: "", label: "" }];


export default function Hero() {
  return (
    <section id="inicio" className="relative isolate overflow-hidden bg-osc-ink text-osc-cream">
      <Photo
        src="https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=1900&q=80"
        alt="Soccer players in action on the field"
        priority
        className="absolute inset-0 h-full w-full"
        imgClassName="opacity-60"
        note={null} />
      
      <div className="absolute inset-0 bg-gradient-to-b from-osc-ink/85 via-osc-ink/70 to-osc-ink" />
      <div className="absolute inset-0 bg-gradient-to-r from-osc-purple/50 to-transparent" />

      <div className="relative mx-auto flex min-h-[88vh] max-w-7xl flex-col justify-end gap-10 px-5 pb-16 pt-24 lg:px-8 lg:pb-24">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-osc-orange/60 bg-osc-orange/10 px-4 py-1.5 font-condensed text-xs uppercase tracking-[0.25em] text-osc-orange">
            Orlando, Florida · Established 2017
          </span>

          <h1 className="mt-6 font-heading text-[13vw] uppercase leading-[0.9] tracking-tight sm:text-6xl lg:text-[5.5rem]">
            Developing players.
            <span className="block text-osc-orange">Building family.</span>
          </h1>

          <p className="mt-6 max-w-xl font-body text-base leading-relaxed text-osc-cream/85 lg:text-lg">A youth soccer academy for kids across Orlando — every family is welcome. A family-run club founded by Elvis Palomino, where every player grows with the ball, with discipline, and with family by their side..



          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#inscripcion"
              className="rounded-full bg-osc-orange px-7 py-3.5 font-condensed text-sm font-semibold uppercase tracking-[0.15em] text-osc-ink transition hover:bg-osc-cream">
              
              Start registration
            </a>
            <a
              href={CONTACT.whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-full border border-osc-cream/40 px-7 py-3.5 font-condensed text-sm uppercase tracking-[0.15em] text-osc-cream transition hover:border-osc-cream hover:bg-osc-cream/10">
              
              <MessageCircle className="h-4 w-4" />
              {CONTACT.phoneLabel}
            </a>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-8 border-t border-osc-cream/15 pt-8">
          <div className="flex flex-wrap gap-10">
            {STATS.map((stat) =>
            <div key={stat.label}>
                <p className="font-heading text-4xl uppercase leading-none text-osc-orange lg:text-5xl">
                  {stat.valor}
                </p>
                <p className="mt-1 font-condensed text-xs uppercase tracking-[0.2em] text-osc-cream/70">
                  {stat.label}
                </p>
              </div>
            )}
          </div>
          <div className="flex items-center gap-4">
            <Crest className="h-20 w-20 lg:h-24 lg:w-24" badge />
            <a
              href="#etapas"
              className="hidden items-center gap-2 font-condensed text-xs uppercase tracking-[0.2em] text-osc-cream/70 transition hover:text-osc-orange lg:flex">
              
              <ArrowDown className="h-4 w-4" />
              Explore our stages
            </a>
          </div>
        </div>
      </div>
    </section>);

}