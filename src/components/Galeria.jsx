import React, { useEffect, useRef, useState } from "react";
import { Image } from "@/components/ui/image";
import { cn } from "@/lib/utils";

const INTERVALO = 5000;
const FUNDIDO = 1200;
const ZOOM = 5200;

// Photo list — swap the src / alt / caption of any item and nothing else in
// this component needs to change.
const FOTOS = [
  {
    src: "/images/gallery/huddle.webp",
    alt: "Orlando Soccer Club players and coach in a team huddle",
    caption: "Team huddle before kickoff",
  },
  {
    src: "/images/gallery/goal-celebration.webp",
    alt: "Young OSC players hugging to celebrate a goal",
    caption: "Celebrating a goal together",
  },
  {
    src: "/images/gallery/coach-talk.webp",
    alt: "Coach kneeling on the sideline talking to players in black OSC kits",
    caption: "Coach's talk on the sideline",
  },
  {
    src: "/images/gallery/ussl-game-day.webp",
    alt: "Two OSC players smiling on the field on a US Soccer League game day",
    caption: "USSL game day",
  },
  {
    src: "/images/gallery/coaching-kids.webp",
    alt: "OSC coach giving instructions to young players",
    caption: "Coaching the next generation",
  },
  {
    src: "/images/gallery/match-action.webp",
    alt: "OSC player striking the ball during a match",
    caption: "Match action",
  },
];

export default function Galeria() {
  const [index, setIndex] = useState(0);
  const [previo, setPrevio] = useState(null);
  const [pausado, setPausado] = useState(false);
  const [reducido, setReducido] = useState(false);
  const [ciclo, setCiclo] = useState(0);
  const toque = useRef(null);
  const indexRef = useRef(0);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReducido(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  // A manual jump (thumbnail, swipe, arrow key) moves the slideshow instantly
  // without interrupting the rotation: the countdown keeps running.
  const ir = (destino) => {
    const total = FOTOS.length;
    const siguiente = ((destino % total) + total) % total;
    const actual = indexRef.current;
    if (siguiente === actual) return;
    setPrevio(actual);
    indexRef.current = siguiente;
    setIndex(siguiente);
  };

  useEffect(() => {
    if (pausado || reducido) return;
    const t = setTimeout(() => {
      ir(indexRef.current + 1);
      setCiclo((c) => c + 1);
    }, INTERVALO);
    return () => clearTimeout(t);
  }, [pausado, reducido, ciclo]);

  // When the rotation resumes, restart the countdown so the progress bar and
  // the timer stay in sync.
  useEffect(() => {
    if (pausado || reducido) return;
    setCiclo((c) => c + 1);
  }, [pausado, reducido]);

  // Preload the next photo so the crossfade never stutters.
  useEffect(() => {
    const img = new window.Image();
    img.src = FOTOS[(index + 1) % FOTOS.length].src;
  }, [index]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") ir(indexRef.current + 1);
      if (e.key === "ArrowLeft") ir(indexRef.current - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index]);

  const actual = FOTOS[index];

  return (
    <section id="galeria" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-2xl">
          <p className="font-condensed text-xs uppercase tracking-[0.3em] text-osc-orange">
            Inside the club
          </p>
          <h2 className="mt-4 font-heading text-4xl uppercase leading-[0.95] text-osc-ink sm:text-5xl lg:text-6xl">
            Where the work happens
          </h2>
          <p className="mt-6 font-body text-base leading-relaxed text-osc-ink/70 lg:text-lg">
            Training sessions, game days, and the families behind Orlando Soccer Club.
          </p>
        </div>

        <div
          className="relative mt-12 aspect-[4/5] w-full overflow-hidden rounded-3xl bg-osc-ink sm:aspect-video"
          onMouseEnter={() => setPausado(true)}
          onMouseLeave={() => setPausado(false)}
          onTouchStart={(e) => {
            toque.current = e.touches[0].clientX;
          }}
          onTouchEnd={(e) => {
            if (toque.current === null) return;
            const delta = e.changedTouches[0].clientX - toque.current;
            if (Math.abs(delta) > 40) {
              if (delta < 0) ir(index + 1);
              else ir(index - 1);
            }
            toque.current = null;
          }}
        >
          {FOTOS.map((foto, i) => {
            const activo = i === index;
            const animado = activo || i === previo;
            return (
              <div
                key={foto.src}
                aria-hidden={!activo}
                className={cn(
                  "absolute inset-0 transition-opacity ease-in-out",
                  activo ? "z-10 opacity-100" : "z-0 opacity-0"
                )}
                style={{ transitionDuration: `${FUNDIDO}ms` }}
              >
                <div
                  className="relative h-full w-full"
                  style={
                    animado && !reducido
                      ? {
                          animation: `osc-kenburns ${ZOOM}ms ease-out forwards`,
                          animationPlayState: pausado ? "paused" : "running",
                        }
                      : undefined
                  }
                >
                  {/* Blurred fill so portrait photos sit nicely in the wide frame */}
                  <img
                    src={foto.src}
                    alt=""
                    aria-hidden="true"
                    loading={i === 0 ? "eager" : "lazy"}
                    className="absolute inset-0 hidden h-full w-full scale-110 object-cover opacity-60 blur-2xl sm:block"
                  />
                  <Image
                    src={foto.src}
                    alt={foto.alt}
                    loading={i === 0 ? "eager" : "lazy"}
                    className="relative h-full w-full object-cover sm:object-contain"
                  />
                </div>
              </div>
            );
          })}

          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-osc-ink/90 via-osc-ink/40 to-transparent px-5 pb-7 pt-16 sm:px-7">
            <p className="font-condensed text-[10px] uppercase tracking-[0.2em] text-osc-orange">
              {index + 1} / {FOTOS.length}
            </p>
            <p className="mt-1 font-body text-sm text-osc-cream sm:text-base">{actual.caption}</p>
          </div>

          {!reducido && (
            <div className="absolute inset-x-0 bottom-0 z-30 h-1 w-full bg-osc-cream/20">
              <div
                key={ciclo}
                className="h-full bg-osc-orange"
                style={{
                  animation: `osc-progress ${INTERVALO}ms linear forwards`,
                  animationPlayState: pausado ? "paused" : "running",
                }}
              />
            </div>
          )}
        </div>

        <div className="mt-4 grid grid-cols-6 gap-2 sm:gap-3">
          {FOTOS.map((foto, i) => (
            <button
              key={foto.src}
              type="button"
              onClick={() => ir(i)}
              aria-label={`Show photo: ${foto.caption}`}
              className={cn(
                "relative aspect-video overflow-hidden rounded-lg transition sm:rounded-xl",
                i === index
                  ? "ring-2 ring-osc-orange ring-offset-2 ring-offset-white"
                  : "opacity-55 hover:opacity-100"
              )}
            >
              <Image
                src={foto.src}
                alt={foto.alt}
                loading="lazy"
                className="h-full w-full object-cover object-[center_30%]"
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}