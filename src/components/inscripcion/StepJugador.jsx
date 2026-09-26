import React from "react";
import Field, { inputClass } from "@/components/inscripcion/Field";
import { calcularEdad, etapaPorEdad } from "@/lib/oscData";

export default function StepJugador({ data, errors, onChange }) {
  const edad = calcularEdad(data.fechaNacimiento);
  const etapa = etapaPorEdad(edad);

  return (
    <div className="grid gap-6">
      <Field
        label="Player's full name"
        htmlFor="jugadorNombre"
        error={errors.jugadorNombre}
      >
        <input
          id="jugadorNombre"
          className={inputClass}
          placeholder="e.g. Mateo Palomino"
          value={data.jugadorNombre}
          onChange={(e) => onChange("jugadorNombre", e.target.value)}
        />
      </Field>

      <Field
        label="Date of birth"
        htmlFor="fechaNacimiento"
        error={errors.fechaNacimiento}
        hint="We use the date of birth to calculate age and the corresponding development stage."
      >
        <input
          id="fechaNacimiento"
          type="date"
          className={inputClass}
          value={data.fechaNacimiento}
          onChange={(e) => onChange("fechaNacimiento", e.target.value)}
        />
      </Field>

      {edad !== null && etapa && (
        <div className="rounded-2xl border border-osc-purple/20 bg-osc-purple/5 p-5">
          <p className="font-condensed text-xs uppercase tracking-[0.2em] text-osc-ink/60">
            Calculated age
          </p>
          <p className="mt-1 font-heading text-3xl uppercase text-osc-purple">
            {edad} {edad === 1 ? "year" : "years"} old
          </p>
          <div className="mt-4 border-t border-osc-purple/15 pt-4">
            <p className="font-condensed text-xs uppercase tracking-[0.2em] text-osc-ink/60">
              Development stage
            </p>
            <p className="mt-1 font-heading text-xl uppercase text-osc-ink">{etapa.titulo}</p>
            <p className="font-condensed text-sm uppercase tracking-[0.15em] text-osc-orange">
              {etapa.rango}
            </p>
            {etapa.nota && <p className="mt-2 font-body text-sm text-osc-ink/70">{etapa.nota}</p>}
          </div>
        </div>
      )}
    </div>
  );
}