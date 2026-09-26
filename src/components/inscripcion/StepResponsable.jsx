import React from "react";
import Field, { inputClass } from "@/components/inscripcion/Field";

const PARENTESCOS = ["Mother", "Father", "Legal guardian", "Other family member"];

export default function StepResponsable({ data, errors, onChange }) {
  return (
    <div className="grid gap-6">
      <Field
        label="Guardian's full name"
        htmlFor="responsableNombre"
        error={errors.responsableNombre}
      >
        <input
          id="responsableNombre"
          className={inputClass}
          placeholder="e.g. Daniela Palomino"
          value={data.responsableNombre}
          onChange={(e) => onChange("responsableNombre", e.target.value)}
        />
      </Field>

      <Field label="Relationship to player" htmlFor="parentesco">
        <select
          id="parentesco"
          className={inputClass}
          value={data.parentesco}
          onChange={(e) => onChange("parentesco", e.target.value)}
        >
          <option value="">Select an option</option>
          {PARENTESCOS.map((p) => (
            <option key={p} value={p}>
              {p}
            </option>
          ))}
        </select>
      </Field>

      <div className="grid gap-6 sm:grid-cols-2">
        <Field
          label="Phone / WhatsApp"
          htmlFor="responsableTelefono"
          error={errors.responsableTelefono}
        >
          <input
            id="responsableTelefono"
            type="tel"
            className={inputClass}
            placeholder="(407) 000-0000"
            value={data.responsableTelefono}
            onChange={(e) => onChange("responsableTelefono", e.target.value)}
          />
        </Field>

        <Field label="Email address" htmlFor="responsableEmail" error={errors.responsableEmail}>
          <input
            id="responsableEmail"
            type="email"
            className={inputClass}
            placeholder="name@example.com"
            value={data.responsableEmail}
            onChange={(e) => onChange("responsableEmail", e.target.value)}
          />
        </Field>
      </div>
    </div>
  );
}