import React from "react";
import SiteHeader from "@/components/SiteHeader";
import Hero from "@/components/Hero";
import Nosotros from "@/components/Nosotros";
import Etapas from "@/components/Etapas";
import Metodologia from "@/components/Metodologia";
import Galeria from "@/components/Galeria";
import Inscripcion from "@/components/Inscripcion";
import Comunidad from "@/components/Comunidad";
import SiteFooter from "@/components/SiteFooter";

export default function Home() {
  return (
    <div className="min-h-screen bg-osc-cream font-body text-osc-ink">
      <SiteHeader />
      <main>
        <Hero />
        <Nosotros />
        <Etapas />
        <Metodologia />
        <Galeria />
        <Inscripcion />
        <Comunidad />
      </main>
      <SiteFooter />
    </div>
  );
}