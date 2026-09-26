import React from "react";
import { Clock, Instagram, Mail, MapPin, MessageCircle, Navigation, Phone } from "lucide-react";
import Crest from "@/components/Crest";
import { CONTACT, NAV_LINKS, SEDES } from "@/lib/oscData";

export default function SiteFooter() {
  return (
    <footer id="contacto" className="bg-osc-ink py-16 text-osc-cream lg:py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr_1fr]">
          <div>
            <div className="flex items-center gap-4">
              <Crest className="h-20 w-20" badge />
              <div>
                <p className="font-heading text-xl uppercase leading-tight">Orlando Soccer Club</p>
                <p className="font-condensed text-xs uppercase tracking-[0.25em] text-osc-cream/60">
                  Youth Academy · Est. 2017
                </p>
              </div>
            </div>
            <p className="mt-6 max-w-sm font-body text-sm leading-relaxed text-osc-cream/70">
              A family-run youth soccer academy serving Orlando's Latino community in Florida. Founded
              and directed by Elvis Palomino.
            </p>
          </div>

          <div>
            <p className="font-condensed text-xs uppercase tracking-[0.25em] text-osc-orange">Explore</p>
            <nav className="mt-5 flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-body text-sm text-osc-cream/75 transition hover:text-osc-orange"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#inscripcion"
                className="font-body text-sm text-osc-cream/75 transition hover:text-osc-orange"
              >
                Registration
              </a>
            </nav>
          </div>

          <div>
            <p className="font-condensed text-xs uppercase tracking-[0.25em] text-osc-orange">Contact</p>
            <div className="mt-5 flex flex-col gap-4">
              <a
                href={CONTACT.whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 font-body text-sm text-osc-cream/80 transition hover:text-osc-orange"
              >
                <MessageCircle className="h-4 w-4 text-osc-orange" />
                {CONTACT.phoneLabel} (WhatsApp)
              </a>
              <a
                href={`tel:+1${CONTACT.phoneLabel.replace(/\D/g, "").slice(1)}`}
                className="flex items-center gap-3 font-body text-sm text-osc-cream/80 transition hover:text-osc-orange"
              >
                <Phone className="h-4 w-4 text-osc-orange" />
                Call the club
              </a>
              <a
                href={`mailto:${CONTACT.email}`}
                className="flex items-center gap-3 font-body text-sm text-osc-cream/80 transition hover:text-osc-orange"
              >
                <Mail className="h-4 w-4 text-osc-orange" />
                {CONTACT.email}
              </a>
              <a
                href={CONTACT.instagramLink}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 font-body text-sm text-osc-cream/80 transition hover:text-osc-orange"
              >
                <Instagram className="h-4 w-4 text-osc-orange" />
                {CONTACT.instagram}
              </a>
            </div>
            <p className="mt-6 font-body text-xs leading-relaxed text-osc-cream/45">
              Registration by WhatsApp at {CONTACT.inscripcionLabel}. Fees: pending
              publication.
            </p>
          </div>
        </div>

        <div className="mt-14 border-t border-osc-cream/10 pt-10">
          <p className="font-condensed text-xs uppercase tracking-[0.25em] text-osc-orange">
            Training schedule
          </p>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {SEDES.map((sede) => (
              <div
                key={sede.dia}
                className="rounded-2xl border border-osc-cream/15 bg-osc-cream/5 p-5"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-osc-purple px-3 py-1 font-condensed text-xs uppercase tracking-[0.2em] text-osc-cream">
                    {sede.dia}
                  </span>
                  <span className="flex items-center gap-2 font-condensed text-sm uppercase tracking-[0.15em] text-osc-cream/75">
                    <Clock className="h-4 w-4 text-osc-orange" />
                    {sede.hora}
                  </span>
                </div>
                <p className="mt-4 font-body text-sm font-medium text-osc-cream">{sede.lugar}</p>
                <p className="mt-1 flex items-start gap-2 font-body text-sm leading-relaxed text-osc-cream/80">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-osc-orange" />
                  {sede.direccion}
                </p>
                <a
                  href={sede.mapa}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center gap-2 font-condensed text-xs uppercase tracking-[0.15em] text-osc-orange transition hover:text-osc-cream"
                >
                  <Navigation className="h-3.5 w-3.5" />
                  View location
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-osc-cream/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-condensed text-xs uppercase tracking-[0.2em] text-osc-cream/45">
            © {new Date().getFullYear()} Orlando Soccer Club
          </p>
          <p className="font-condensed text-xs uppercase tracking-[0.2em] text-osc-cream/45">
            Orlando, Florida · Built for our community
          </p>
        </div>
      </div>
    </footer>
  );
}