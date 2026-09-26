import React from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import Crest from "@/components/Crest";
import { CONTACT, NAV_LINKS } from "@/lib/oscData";

export default function SiteHeader() {
  const [open, setOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-osc-ink/10 bg-osc-cream/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 lg:px-8">
        <a href="#inicio" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <Crest className="h-14 w-14 shrink-0" />
          <span className="leading-none">
            <span className="block font-heading text-lg uppercase tracking-wide text-osc-purple">
              Orlando Soccer Club
            </span>
            <span className="block font-condensed text-[11px] uppercase tracking-[0.25em] text-osc-ink/60">
              Youth Academy · Orlando, FL
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-condensed text-sm uppercase tracking-[0.15em] text-osc-ink/75 transition hover:text-osc-purple"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={CONTACT.whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-full border border-osc-ink/20 px-4 py-2 font-condensed text-sm uppercase tracking-[0.12em] text-osc-ink transition hover:border-osc-ink/50"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </a>
          <a
            href="#inscripcion"
            className="rounded-full bg-osc-orange px-5 py-2 font-condensed text-sm font-semibold uppercase tracking-[0.12em] text-osc-ink transition hover:bg-osc-purple hover:text-osc-cream"
          >
            Register
          </a>
        </div>

        <button
          type="button"
          aria-label="Open menu"
          onClick={() => setOpen((v) => !v)}
          className="rounded-full border border-osc-ink/20 p-2 text-osc-ink lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-osc-ink/10 bg-osc-cream px-5 pb-6 pt-2 lg:hidden">
          <nav className="flex flex-col">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-osc-ink/10 py-3 font-condensed text-base uppercase tracking-[0.15em] text-osc-ink"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-5 flex flex-col gap-3">
            <a
              href="#inscripcion"
              onClick={() => setOpen(false)}
              className="rounded-full bg-osc-orange px-5 py-3 text-center font-condensed text-sm font-semibold uppercase tracking-[0.12em] text-osc-ink"
            >
              Register
            </a>
            <a
              href={CONTACT.whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-osc-ink/20 px-5 py-3 text-center font-condensed text-sm uppercase tracking-[0.12em] text-osc-ink"
            >
              Message us on WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}