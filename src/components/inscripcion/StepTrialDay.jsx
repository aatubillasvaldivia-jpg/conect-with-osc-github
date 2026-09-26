import React, { useState } from "react";
import { CalendarDays } from "lucide-react";
import { format } from "date-fns";
import Field, { inputClass } from "@/components/inscripcion/Field";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { sesionPorDia } from "@/lib/oscData";
import { cn } from "@/lib/utils";

const DIAS_TRIAL = [3, 5]; // Wednesday and Friday
const VENTANA_DIAS = 60;

export default function StepTrialDay({ data, errors, onChange }) {
  const [abierto, setAbierto] = useState(false);

  const hoy = new Date();
  hoy.setHours(0, 0, 0, 0);
  const desde = new Date(hoy);
  desde.setDate(desde.getDate() + 1);
  const hasta = new Date(hoy);
  hasta.setDate(hasta.getDate() + VENTANA_DIAS);

  const seleccionada = data.fechaPrueba ? new Date(`${data.fechaPrueba}T00:00:00`) : undefined;
  const sesion = seleccionada ? sesionPorDia(format(seleccionada, "EEEE")) : null;

  const noDisponibles = [
    { before: desde },
    { after: hasta },
    (fecha) => !DIAS_TRIAL.includes(fecha.getDay()),
  ];

  return (
    <div className="grid gap-6">
      <Field
        label="Preferred free trial day"
        htmlFor="fechaPrueba"
        hint="Your first training session is free. Pick the day you'd like to come."
        error={errors.fechaPrueba}
      >
        <Popover open={abierto} onOpenChange={setAbierto}>
          <PopoverTrigger asChild>
            <button
              id="fechaPrueba"
              type="button"
              className={cn(inputClass, "flex items-center justify-between gap-3 text-left")}
            >
              <span className={seleccionada ? "text-osc-ink" : "text-osc-ink/35"}>
                {seleccionada
                  ? format(seleccionada, "EEEE, MMMM d, yyyy")
                  : "Pick a Wednesday or Friday"}
              </span>
              <CalendarDays className="h-5 w-5 shrink-0 text-osc-purple" />
            </button>
          </PopoverTrigger>
          <PopoverContent align="start" className="w-auto border-osc-ink/10 p-0">
            <Calendar
              mode="single"
              selected={seleccionada}
              defaultMonth={seleccionada || desde}
              fromDate={desde}
              toDate={hasta}
              disabled={noDisponibles}
              onSelect={(fecha) => {
                if (!fecha) return;
                onChange("fechaPrueba", format(fecha, "yyyy-MM-dd"));
                setAbierto(false);
              }}
              classNames={{
                caption_label: "font-heading text-base uppercase tracking-wide text-osc-ink",
                nav_button:
                  "h-9 w-9 rounded-md border border-osc-ink/15 bg-white p-0 text-osc-ink transition hover:border-osc-purple hover:text-osc-purple",
                head_cell: "w-10 font-condensed text-[0.7rem] uppercase tracking-wider text-osc-ink/45",
                cell: "relative p-0 text-center",
                day: "h-10 w-10 rounded-md p-0 font-body text-base font-normal text-osc-purple transition hover:bg-osc-purple/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-osc-purple/30",
                day_selected:
                  "bg-osc-orange text-osc-ink hover:bg-osc-orange hover:text-osc-ink focus:bg-osc-orange focus:text-osc-ink",
                day_today: "bg-osc-purple/10 text-osc-purple",
                day_outside: "text-osc-ink/20",
                day_disabled: "text-osc-ink/25 opacity-45",
              }}
            />
          </PopoverContent>
        </Popover>
      </Field>

      {sesion && (
        <div className="rounded-2xl border border-osc-purple/20 bg-osc-purple/5 p-5">
          <p className="font-condensed text-xs uppercase tracking-[0.2em] text-osc-ink/60">
            Your free trial session
          </p>
          <p className="mt-1 font-heading text-xl uppercase text-osc-purple">
            {format(seleccionada, "EEEE, MMMM d, yyyy")}
          </p>
          <p className="mt-1 font-body text-sm leading-relaxed text-osc-ink/75">
            {sesion.hora} · {sesion.lugar}, {sesion.direccion}
          </p>
        </div>
      )}

      <Field label="Previous experience" htmlFor="experiencia">
        <select
          id="experiencia"
          className={inputClass}
          value={data.experiencia}
          onChange={(e) => onChange("experiencia", e.target.value)}
        >
          <option value="">Select an option</option>
          <option value="First time in an academy">First time in an academy</option>
          <option value="Has played soccer before">Has played soccer before</option>
          <option value="Currently playing for another team">Currently playing for another team</option>
        </select>
      </Field>

      <Field label="Notes for the club (optional)" htmlFor="notas">
        <textarea
          id="notas"
          rows={3}
          className={cn(inputClass, "resize-none")}
          placeholder="Allergies, availability, anything we should know..."
          value={data.notas}
          onChange={(e) => onChange("notas", e.target.value)}
        />
      </Field>
    </div>
  );
}