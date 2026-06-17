"use client";

import { PORTFOLIO_DATA } from "@/lib/data";
import {
  ArrowUp,
  Mail,
  Phone,
  MapPin,
  Sparkles,
} from "lucide-react";
import Image from "next/image";

// ----- Réseaux sociaux avec vrais logos -----
const socialLogos = [
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/kevin-archet",
    src: "/logos/linkedin.png",
  },
  {
    name: "Malt",
    href: "https://www.malt.fr/profile/kevinarchet",
    src: "/logos/malt.png",
  },
  {
    name: "Collective Work",
    href: "https://collective.work",
    src: "/logos/collective.png",
  },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const { name, title, contact } = PORTFOLIO_DATA;

  return (
    <footer className="relative bg-brand-deep text-white overflow-hidden">
      {/* ============================================================
          ATMOSPHÈRE — Glows sur fond deep blue
          ============================================================ */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-brand-blue/15 blur-[150px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-gold-premium/8 blur-[130px] -z-10" />
      <div className="absolute inset-0 bg-grid-subtle opacity-10 -z-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 lg:py-24">
        {/* ========== Grille principale ========== */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* ===== Colonne 1 — Brand (4/12) ===== */}
          <div className="lg:col-span-4">
            <h3 className="text-xl font-extrabold text-white mb-3 tracking-tight">
              {name}
            </h3>
            <p className="text-sm text-white/60 leading-relaxed mb-6 max-w-xs">
              {title}
            </p>

            {/* Contact direct */}
            <div className="space-y-3">
              <a
                href={`mailto:${contact.email}`}
                className="flex items-center gap-3 text-sm text-white/70 hover:text-gold-premium transition-colors group"
              >
                <span className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-gold-premium/20 transition-colors">
                  <Mail className="w-4 h-4 text-white/60 group-hover:text-gold-premium transition-colors" />
                </span>
                {contact.email}
              </a>
              <a
                href={`tel:${contact.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-3 text-sm text-white/70 hover:text-gold-premium transition-colors group"
              >
                <span className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-gold-premium/20 transition-colors">
                  <Phone className="w-4 h-4 text-white/60 group-hover:text-gold-premium transition-colors" />
                </span>
                {contact.phone}
              </a>
              <span className="flex items-center gap-3 text-sm text-white/60">
                <span className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-white/50" />
                </span>
                {contact.location}
              </span>
            </div>
          </div>

          {/* ===== Colonne 2 — Navigation (2/12) ===== */}
          <div className="lg:col-span-2">
            <p className="text-xs font-semibold text-white/40 uppercase tracking-[0.15em] mb-5">
              Navigation
            </p>
            <ul className="space-y-3">
              {[
                { label: "Expertise", href: "#expertise" },
                { label: "Expérience", href: "#experience" },
                { label: "Projets", href: "#projects" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/60 hover:text-gold-premium transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ===== Colonne 3 — Réseaux avec logos PNG (2/12) ===== */}
          <div className="lg:col-span-2">
            <p className="text-xs font-semibold text-white/40 uppercase tracking-[0.15em] mb-5">
              Réseaux
            </p>
            <div className="flex gap-3">
              {socialLogos.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={social.name}
                  className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-gold-premium/20 transition-all duration-300"
                >
                  <Image
                    src={social.src}
                    alt={social.name}
                    width={20}
                    height={20}
                    className="h-5 w-5 object-contain opacity-70 hover:opacity-100 transition-opacity"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* ===== Colonne 4 — CTA (4/12) ===== */}
          <div className="lg:col-span-4">
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="w-4 h-4 text-gold-premium" />
                <p className="text-xs font-semibold text-gold-premium uppercase tracking-wider">
                  Un projet en tête ?
                </p>
              </div>
              <p className="text-sm text-white/70 leading-relaxed mb-5">
                Discutons de vos besoins en architecture mobile et développement
                Android.
              </p>
              <a
                href={PORTFOLIO_DATA.calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gold-premium text-[#0E1726] font-bold text-sm rounded-xl shadow-gold-button hover:shadow-gold-button-hover hover:bg-[#F0D95A] transition-all duration-300"
              >
                Réserver un appel
              </a>
            </div>
          </div>
        </div>

        {/* ========== Séparateur ========== */}
        <div className="border-t border-white/10 my-10 lg:my-12" />

        {/* ========== Barre inférieure ========== */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} {name}. Tous droits réservés.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-white/60 hover:text-white transition-all duration-300 text-sm font-medium"
          >
            Retour au début
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}