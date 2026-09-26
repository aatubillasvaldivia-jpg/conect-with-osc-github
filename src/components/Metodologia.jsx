import React from "react";
import { Activity, Brain, Layers, RefreshCw } from "lucide-react";
import { EJES } from "@/lib/oscData";

const ICONOS = [Activity, Brain, Layers, RefreshCw];

export default function Metodologia() {
  return (
    <section id="metodologia" className="bg-osc-cream py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="font-condensed text-xs uppercase tracking-[0.3em] text-osc-orange">
              Our methodology
            </p>
            <h2 className="mt-4 font-heading text-4xl uppercase leading-[0.95] text-osc-ink sm:text-5xl lg:text-6xl">
              Four pillars behind every session
            </h2>
          </div>
          <p className="max-w-md font-body text-base leading-relaxed text-osc-ink/70">
            Every session at the club is built on these four pillars. They are the backbone of the
            development process at Orlando Soccer Club.
          </p>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-osc-ink/10 bg-osc-ink/10 sm:grid-cols-2 lg:grid-cols-4">
          {EJES.map((eje, i) => {
            const Icono = ICONOS[i];
            return (
              <div key={eje.titulo} className="flex flex-col gap-5 bg-white p-7 lg:p-8">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-osc-orange/15 text-osc-purple">
                  <Icono className="h-6 w-6" />
                </span>
                <p className="font-condensed text-xs uppercase tracking-[0.25em] text-osc-ink/40">
                  Pillar 0{i + 1}
                </p>
                <h3 className="font-heading text-xl uppercase leading-tight text-osc-ink">
                  {eje.titulo}
                </h3>
                <p className="font-body text-sm leading-relaxed text-osc-ink/65">{eje.texto}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}