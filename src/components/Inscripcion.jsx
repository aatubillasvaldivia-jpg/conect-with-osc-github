import React from "react";
import { Clock, MapPin } from "lucide-react";
import InscripcionForm from "@/components/inscripcion/InscripcionForm";
import { SEDES } from "@/lib/oscData";

export default function Inscripcion() {
  return (
    <section id="inscripcion" className="relative overflow-hidden bg-osc-purple py-20 lg:py-28">
      <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-osc-orange/20 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div className="text-osc-cream">
            <p className="font-condensed text-xs uppercase tracking-[0.3em] text-osc-orange">
              Registration form
            </p>
            <h2 className="mt-4 font-heading text-4xl uppercase leading-[0.95] sm:text-5xl lg:text-6xl">
              Register your player in three steps
            </h2>
            <p className="mt-6 font-body text-base leading-relaxed text-osc-cream/80">
              Complete the player's details, the guardian's information, and pick the day for your
              free trial session. At the end, WhatsApp opens with everything pre-filled so the club
              can confirm your spot.
            </p>

            <div className="mt-10 space-y-4">
              {SEDES.map((sede) => (
                <div
                  key={sede.dia}
                  className="flex items-start gap-4 rounded-2xl border border-osc-cream/15 bg-osc-cream/5 p-5"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-osc-orange text-osc-ink">
                    <Clock className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-condensed text-sm uppercase tracking-[0.18em] text-osc-orange">
                      {sede.dia} · {sede.hora}
                    </p>
                    <p className="mt-1 font-body text-sm font-medium text-osc-cream">{sede.lugar}</p>
                    <p className="mt-1 flex items-start gap-2 font-body text-xs leading-relaxed text-osc-cream/70">
                      <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-osc-orange" />
                      {sede.direccion}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <InscripcionForm />
        </div>
      </div>
    </section>
  );
}