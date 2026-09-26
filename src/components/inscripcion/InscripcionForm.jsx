import React, { useRef, useState } from "react";
import { ArrowLeft, ArrowRight, MessageCircle, RotateCcw, Check } from "lucide-react";
import StepJugador from "@/components/inscripcion/StepJugador";
import StepResponsable from "@/components/inscripcion/StepResponsable";
import StepTrialDay from "@/components/inscripcion/StepTrialDay";
import { format } from "date-fns";
import { CONTACT, calcularEdad, etapaPorEdad, sesionPorDia } from "@/lib/oscData";
import { cn } from "@/lib/utils";

const PASOS = ["Player", "Guardian", "Trial day"];

const inicial = {
  jugadorNombre: "",
  fechaNacimiento: "",
  responsableNombre: "",
  parentesco: "",
  responsableTelefono: "",
  responsableEmail: "",
  fechaPrueba: "",
  experiencia: "",
  notas: "",
};

export default function InscripcionForm() {
  const [paso, setPaso] = useState(1);
  const [data, setData] = useState(inicial);
  const [errors, setErrors] = useState({});
  const [enviado, setEnviado] = useState(false);
  const [waUrl, setWaUrl] = useState("");
  const topRef = useRef(null);

  const onChange = (campo, valor) => {
    setData((prev) => ({ ...prev, [campo]: valor }));
    setErrors((prev) => ({ ...prev, [campo]: undefined }));
  };

  const irA = (siguiente) => {
    setPaso(siguiente);
    topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const validar = () => {
    const e = {};
    if (paso === 1) {
      if (!data.jugadorNombre.trim()) e.jugadorNombre = "Please enter the player's full name.";
      if (!data.fechaNacimiento) e.fechaNacimiento = "Please enter the date of birth.";
      else if (calcularEdad(data.fechaNacimiento) === null)
        e.fechaNacimiento = "Please check the date: it cannot be in the future.";
    }
    if (paso === 2) {
      if (!data.responsableNombre.trim()) e.responsableNombre = "Please enter the guardian's full name.";
      if (!data.responsableTelefono.trim())
        e.responsableTelefono = "We need a contact phone number.";
      else if (data.responsableTelefono.replace(/\D/g, "").length < 7)
        e.responsableTelefono = "This phone number looks incomplete.";
      if (data.responsableEmail && !data.responsableEmail.includes("@"))
        e.responsableEmail = "Please check the email address.";
    }
    if (paso === 3 && !data.fechaPrueba)
      e.fechaPrueba = "Please pick the day for your free trial session.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const avanzar = () => {
    if (!validar()) return;
    if (paso < 3) return irA(paso + 1);
    enviar();
  };

  const enviar = () => {
    const edad = calcularEdad(data.fechaNacimiento);
    const etapa = etapaPorEdad(edad);
    const fechaNacimiento = data.fechaNacimiento
      ? format(new Date(`${data.fechaNacimiento}T00:00:00`), "MM/dd/yyyy")
      : "";
    const fechaPrueba = format(new Date(`${data.fechaPrueba}T00:00:00`), "EEEE, MMMM d, yyyy");
    const sesion = sesionPorDia(format(new Date(`${data.fechaPrueba}T00:00:00`), "EEEE")) || {
      hora: "",
      lugar: "",
      direccion: "",
    };

    const jugador = [
      "*PLAYER*",
      `Name: ${data.jugadorNombre}`,
      `Date of birth: ${fechaNacimiento} (${edad} years old)`,
      `Stage: ${etapa?.titulo}`,
    ];
    if (data.experiencia) jugador.push(`Previous experience: ${data.experiencia}`);

    const responsable = [
      "*GUARDIAN*",
      `Name: ${data.responsableNombre}${data.parentesco ? ` (${data.parentesco})` : ""}`,
      `Phone: ${data.responsableTelefono}`,
    ];
    if (data.responsableEmail) responsable.push(`Email: ${data.responsableEmail}`);

    const bloques = [
      "Hello Orlando Soccer Club! I'd like to book a *free trial session* for my player.",
      jugador.join("\n"),
      responsable.join("\n"),
      ["*FREE TRIAL SESSION*", `${fechaPrueba} — ${sesion.hora}`, `${sesion.lugar}, ${sesion.direccion}`].join(
        "\n"
      ),
    ];
    if (data.notas) bloques.push(`*Notes:* ${data.notas}`);
    bloques.push("Sent from the club's website.");

    const url = `https://wa.me/${CONTACT.inscripcionNumber}?text=${encodeURIComponent(
      bloques.join("\n\n")
    )}`;
    setWaUrl(url);
    setEnviado(true);
    window.open(url, "_blank", "noopener");
    topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const reiniciar = () => {
    setData(inicial);
    setErrors({});
    setEnviado(false);
    setPaso(1);
  };

  return (
    <div ref={topRef} className="scroll-mt-28">
      {enviado ? (
        <div className="rounded-3xl border border-osc-ink/10 bg-white p-8 text-center lg:p-12">
          <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-osc-orange text-osc-ink">
            <Check className="h-7 w-7" />
          </span>
          <h3 className="mt-6 font-heading text-2xl uppercase text-osc-ink lg:text-3xl">
            You're all set, {data.jugadorNombre.split(" ")[0]}!
          </h3>
          <p className="mx-auto mt-4 max-w-lg font-body text-sm leading-relaxed text-osc-ink/70 lg:text-base">
            WhatsApp is opening with your registration details already written out. Simply send the
            message to {CONTACT.inscripcionLabel} and the club will confirm your spot and the details
            of the first training session.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={waUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-osc-orange px-6 py-3 font-condensed text-sm font-semibold uppercase tracking-[0.15em] text-osc-ink transition hover:bg-osc-purple hover:text-osc-cream"
            >
              <MessageCircle className="h-4 w-4" />
              Open WhatsApp
            </a>
            <button
              type="button"
              onClick={reiniciar}
              className="inline-flex items-center gap-2 rounded-full border border-osc-ink/20 px-6 py-3 font-condensed text-sm uppercase tracking-[0.15em] text-osc-ink transition hover:border-osc-ink/50"
            >
              <RotateCcw className="h-4 w-4" />
              Register another player
            </button>
          </div>
        </div>
      ) : (
        <div className="rounded-3xl border border-osc-ink/10 bg-white p-6 shadow-[0_20px_60px_-40px_rgba(13,9,18,0.6)] lg:p-9">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 border-b border-osc-ink/10 pb-5">
            {PASOS.map((nombre, i) => {
              const num = i + 1;
              const activo = num === paso;
              const hecho = num < paso;
              return (
                <div key={nombre} className="flex items-center gap-3">
                  <span
                    className={cn(
                      "flex h-8 w-8 items-center justify-center rounded-full font-condensed text-sm",
                      activo
                        ? "bg-osc-purple text-osc-cream"
                        : hecho
                          ? "bg-osc-orange text-osc-ink"
                          : "bg-osc-ink/8 text-osc-ink/50"
                    )}
                  >
                    {num}
                  </span>
                  <span
                    className={cn(
                      "font-condensed text-xs uppercase tracking-[0.2em]",
                      activo ? "text-osc-ink" : "text-osc-ink/45"
                    )}
                  >
                    {nombre}
                  </span>
                </div>
              );
            })}
          </div>

          <div className="mt-7">
            {paso === 1 && <StepJugador data={data} errors={errors} onChange={onChange} />}
            {paso === 2 && <StepResponsable data={data} errors={errors} onChange={onChange} />}
            {paso === 3 && <StepTrialDay data={data} errors={errors} onChange={onChange} />}
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-between gap-3">
            {paso > 1 ? (
              <button
                type="button"
                onClick={() => irA(paso - 1)}
                className="inline-flex items-center gap-2 rounded-full border border-osc-ink/20 px-5 py-3 font-condensed text-sm uppercase tracking-[0.15em] text-osc-ink transition hover:border-osc-ink/50"
              >
                <ArrowLeft className="h-4 w-4" />
                Back
              </button>
            ) : (
              <span className="font-body text-xs text-osc-ink/50">Step {paso} of 3</span>
            )}

            <button
              type="button"
              onClick={avanzar}
              className="inline-flex items-center gap-2 rounded-full bg-osc-orange px-6 py-3 font-condensed text-sm font-semibold uppercase tracking-[0.15em] text-osc-ink transition hover:bg-osc-purple hover:text-osc-cream"
            >
              {paso < 3 ? (
                <>
                  Continue
                  <ArrowRight className="h-4 w-4" />
                </>
              ) : (
                <>
                  <MessageCircle className="h-4 w-4" />
                  Send via WhatsApp
                </>
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}