import React from "react";
import { ETAPAS } from "@/lib/oscData";

export default function Etapas() {
  return (
    <section id="etapas" className="bg-osc-ink py-20 text-osc-cream lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-3xl">
          <p className="font-condensed text-xs uppercase tracking-[0.3em] text-osc-orange">
            The four development stages
          </p>
          <h2 className="mt-4 font-heading text-4xl uppercase leading-[0.95] sm:text-5xl lg:text-6xl">
            Every age has its process
          </h2>
          <p className="mt-6 font-body text-base leading-relaxed text-osc-cream/70 lg:text-lg">
            We don't train every player the same way. The club organizes its work into four stages,
            each with its own objectives, training loads, and content, so players progress at exactly
            the right moment.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {ETAPAS.map((etapa) => (
            <article
              key={etapa.numero}
              className="group relative overflow-hidden rounded-3xl border border-osc-cream/10 bg-osc-cream/[0.04] p-7 transition hover:border-osc-orange/60 lg:p-9"
            >
              <span className="absolute right-6 top-4 font-heading text-6xl uppercase text-osc-cream/10 transition group-hover:text-osc-orange/25 lg:text-7xl">
                {etapa.numero}
              </span>
              <p className="font-condensed text-sm uppercase tracking-[0.2em] text-osc-orange">
                {etapa.rango}
              </p>
              <h3 className="mt-3 font-heading text-2xl uppercase leading-tight lg:text-3xl">
                {etapa.titulo}
              </h3>
              <p className="mt-4 max-w-lg font-body text-sm leading-relaxed text-osc-cream/75 lg:text-base">
                {etapa.texto}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-4 rounded-2xl border border-osc-cream/10 bg-osc-purple/25 p-6">
          <p className="font-body text-sm text-osc-cream/85 lg:text-base">
            Not sure which stage your child belongs to? Our registration form calculates age
            automatically and shows the correct group.
          </p>
          <a
            href="#inscripcion"
            className="rounded-full bg-osc-orange px-6 py-3 font-condensed text-sm font-semibold uppercase tracking-[0.15em] text-osc-ink transition hover:bg-osc-cream"
          >
            Find my stage
          </a>
        </div>
      </div>
    </section>
  );
}