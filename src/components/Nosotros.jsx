import React from "react";
import { Heart, Users, Trophy, MapPin } from "lucide-react";
import Photo from "@/components/Photo";

const VALORES = [
{
  icon: Heart,
  titulo: "Family club",
  texto: "A close-knit environment with a personal approach and open doors for every family."
},
{
  icon: Users,
  titulo: "Open community",
  texto: "A place where our families feel at home, in their own language and culture."
},
{
  icon: Trophy,
  titulo: "Purposeful development",
  texto: "We compete, but character and player development always come first."
},
{
  icon: MapPin,
  titulo: "Rooted in Orlando",
  texto: "Two training locations across the city and a story that began in 2017."
}];


const DIRECTOR = {
  nombre: "Elvis Palomino",
  rol: "Head Coach",
  resumen:
  "Elvis Palomino is the Head Coach at Orlando Soccer Club. He leads the club's on-field methodology, the work of each development stage, and the technical growth of every group — from the youngest players taking their first touches to the competitive squads.",
  descripcion:
  "A coach and club builder, Elvis runs every training session with the same standard: technique first, discipline always, and a real commitment to each player's progress. His work shapes how OSC trains, competes, and develops talent in Orlando."
};

export default function Nosotros() {
  return (
    <section id="nosotros" className="bg-osc-cream py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-2 lg:items-center lg:gap-20 lg:px-8">
        <div>
          <p className="font-condensed text-xs uppercase tracking-[0.3em] text-osc-orange">About us</p>
          <h2 className="mt-4 font-heading text-4xl uppercase leading-[0.95] text-osc-ink sm:text-5xl lg:text-6xl">A club with academy standards

          </h2>
          <p className="mt-6 font-body text-base leading-relaxed text-osc-ink/75 lg:text-lg">
            Orlando Soccer Club was founded in 2017 by Elvis Palomino with a simple conviction: no
            child should be left without a place to play, learn, and grow. What began as a small group
            of players has become a development academy with defined stages, its own methodology, and
            families who have been with us for years.
          </p>
          <p className="mt-4 font-body text-base leading-relaxed text-osc-ink/75 lg:text-lg">
            We are a family club, built by and for Orlando's Latino community. Players progress
            through structured stages, and the game is taught with patience, discipline, and genuine
            pride in the badge.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {VALORES.map((valor) =>
            <div key={valor.titulo} className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-osc-purple text-osc-cream">
                  <valor.icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-condensed text-sm uppercase tracking-[0.12em] text-osc-ink">
                    {valor.titulo}
                  </p>
                  <p className="mt-1 font-body text-sm leading-relaxed text-osc-ink/65">{valor.texto}</p>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="space-y-6">
          <Photo
            src="/images/elvis-palomino.webp"
            alt="Elvis Palomino, Head Coach at Orlando Soccer Club, with club trophies"
            className="aspect-square w-full rounded-3xl sm:aspect-[6/5]"
            imgClassName="object-[center_45%] brightness-[0.85]"
            note={null} />
          

          <div className="rounded-2xl border border-osc-ink/10 bg-white p-6 shadow-[0_10px_30px_-20px_rgba(13,9,18,0.4)] lg:p-8">
            <p className="font-condensed text-[11px] uppercase tracking-[0.2em] text-osc-orange">
              {DIRECTOR.rol}
            </p>
            <p className="mt-2 font-heading text-2xl uppercase text-osc-ink">{DIRECTOR.nombre}</p>
            <p className="mt-4 font-body text-sm leading-relaxed text-osc-ink/70">{DIRECTOR.resumen}</p>
            <p className="mt-3 font-body text-sm leading-relaxed text-osc-ink/65">
              {DIRECTOR.descripcion}
            </p>
          </div>
        </div>
      </div>
    </section>);

}