"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import Image from "next/image";
import { PORTFOLIO_DATA } from "@/lib/data";

// ----- Navigation -----
const navigationLinks = [
  { label: "Expertise", href: "#expertise" },
  { label: "Expérience", href: "#experience" },
  { label: "Projets", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

// ----- Réseaux sociaux -----
const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/kevin-archet/",
    src: "/logos/linkedin.png",
  },
  {
    name: "Malt",
    href: "https://www.malt.fr/profile/kevinarchet",
    src: "/logos/malt.png",
  },
  {
    name: "Collective Work",
    href: "https://www.collective.work/profile/kevin-archet",
    src: "/logos/collective.png",
  },
];

// ----- Framer Motion Variants -----
const mobileMenuVariants: Variants = {
  closed: {
    opacity: 0,
    height: 0,
    transition: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] },
  },
  open: {
    opacity: 1,
    height: "auto",
    transition: {
      duration: 0.35,
      ease: [0.25, 0.46, 0.45, 0.94],
      staggerChildren: 0.05,
      delayChildren: 0.05,
    },
  },
};

const mobileItemVariants: Variants = {
  closed: { opacity: 0, x: -12 },
  open: { opacity: 1, x: 0, transition: { duration: 0.3 } },
};

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 20);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/85 backdrop-blur-xl shadow-[0_1px_0_#E6EEFF,0_4px_20px_rgba(18,55,216,0.04)]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* ========== Logo ========== */}
          <motion.a
            href="#hero"
            onClick={(e) => handleSmoothScroll(e, "#hero")}
            className="flex-shrink-0 group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="text-lg font-extrabold text-text-title tracking-tight group-hover:text-brand-blue transition-colors duration-300">
              {PORTFOLIO_DATA.name.split(" ")[0]}
              <span className="text-brand-blue">.</span>
            </span>
          </motion.a>

          {/* ========== Desktop Navigation ========== */}
          <div className="hidden md:flex items-center gap-1">
            {navigationLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href)}
                className="relative px-4 py-2 text-sm font-medium text-text-secondary hover:text-text-primary transition-colors duration-200 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-brand-blue rounded-full transition-all duration-300 group-hover:w-3/4" />
              </a>
            ))}
          </div>

          {/* ========== Desktop : Réseaux sociaux + CTA ========== */}
          <div className="hidden md:flex items-center gap-3">
            {/* Logos réseaux sociaux */}
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                title={social.name}
                className="p-2 rounded-xl hover:bg-surface-alt transition-colors duration-200"
              >
                <Image
                  src={social.src}
                  alt={social.name}
                  width={22}
                  height={22}
                  className="h-[22px] w-[22px] object-contain opacity-70 hover:opacity-100 transition-opacity"
                />
              </a>
            ))}

            {/* Séparateur */}
            <div className="w-px h-5 bg-surface-border mx-1" />

            {/* CTA */}
            <a
              href={PORTFOLIO_DATA.calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-5 py-2.5 bg-gold-premium text-[#0E1726] font-bold text-sm rounded-xl shadow-gold-button hover:shadow-gold-button-hover hover:bg-[#F0D95A] transition-all duration-300"
            >
              Parlons projet
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>
          </div>

          {/* ========== Mobile : CTA + Burger ========== */}
          <div className="flex md:hidden items-center gap-3">
            <a
              href={PORTFOLIO_DATA.calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-gold-premium text-[#0E1726] font-bold text-xs rounded-xl shadow-gold-button hover:shadow-gold-button-hover hover:bg-[#F0D95A] transition-all duration-300"
            >
              Parlons
              <ArrowRight className="w-3 h-3" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-xl transition-all duration-300 ${
                scrolled
                  ? "text-text-primary hover:bg-surface-alt"
                  : "text-text-primary hover:bg-white/10"
              }`}
              aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* ========== Mobile Menu ========== */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="md:hidden overflow-hidden"
            >
              <div className="mx-2 mt-2 px-4 py-5 bg-white/95 backdrop-blur-xl rounded-2xl border border-surface-border shadow-[0_15px_50px_rgba(18,55,216,0.08)] space-y-3">
                {/* Liens navigation */}
                <div className="space-y-1">
                  {navigationLinks.map((link) => (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      onClick={(e) => handleSmoothScroll(e, link.href)}
                      variants={mobileItemVariants}
                      className="block px-4 py-3 text-base font-medium text-text-primary hover:text-brand-blue hover:bg-surface-alt rounded-xl transition-all duration-200"
                    >
                      {link.label}
                    </motion.a>
                  ))}
                </div>

                {/* Séparateur */}
                <div className="border-t border-surface-border" />

                {/* Réseaux sociaux mobile */}
                <div className="flex items-center gap-4 px-4 pt-2">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={social.name}
                      className="p-2 rounded-xl hover:bg-surface-alt transition-colors"
                    >
                      <Image
                        src={social.src}
                        alt={social.name}
                        width={24}
                        height={24}
                        className="h-6 w-6 object-contain opacity-70 hover:opacity-100 transition-opacity"
                      />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}