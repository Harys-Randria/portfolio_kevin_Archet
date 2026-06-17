"use client";

import { motion, type Variants } from "framer-motion";
import { PORTFOLIO_DATA } from "@/lib/data";
import {
  Quote,
  Building2,
  ArrowRight,
  GraduationCap,
  Globe,
  FileText,
  Download,
  Sparkles,
} from "lucide-react";
import Image from "next/image";

// ----- Framer Motion Variants -----
const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

// ----- Données -----
const { about, education, languages, name } = PORTFOLIO_DATA;

export function About() {
  return (
    <section
      id="about"
      className="relative py-24 lg:py-32 bg-surface-main overflow-hidden"
    >
      {/* ============================================================
          ATMOSPHÈRE
          ============================================================ */}
      <div className="absolute top-1/3 -left-20 w-[400px] h-[400px] rounded-full bg-brand-blue/3 blur-[120px] -z-10" />
      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] rounded-full bg-gold-premium/3 blur-[100px] -z-10" />
      <div className="absolute inset-0 bg-grid-subtle opacity-40 -z-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* ========== En-tête ========== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-16 lg:mb-20"
        >
          <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-surface-alt rounded-full border border-surface-border mb-6">
            <Sparkles className="w-4 h-4 text-brand-blue" />
            <span className="text-sm font-medium text-brand-blue">
              À Propos
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-extrabold text-text-title tracking-tight">
            Mon parcours
          </h2>
        </motion.div>

        {/* ========== Grille 3 colonnes ========== */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid lg:grid-cols-3 gap-8"
        >
          {/* ===== Carte 1 — Résumé exécutif ===== */}
          <motion.div
            variants={fadeUp}
            className="card-premium p-8 flex flex-col"
          >
            <div className="w-12 h-12 rounded-2xl bg-brand-blue/6 flex items-center justify-center mb-6">
              <Quote className="w-6 h-6 text-brand-blue" />
            </div>
            <h3 className="text-lg font-bold text-text-title mb-4">
              Résumé exécutif
            </h3>
            <p className="text-sm text-text-secondary leading-relaxed flex-1">
              {about.summary}
            </p>
            {/* CV Download fictif — tu peux linker un vrai PDF */}
            <a
              href="#"
              className="inline-flex items-center gap-2 mt-6 text-sm font-semibold text-brand-blue hover:text-brand-electric transition-colors group"
            >
              <Download className="w-4 h-4" />
              Télécharger mon CV
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
            </a>
          </motion.div>

          {/* ===== Carte 2 — Formation + Langues ===== */}
          <motion.div
            variants={fadeUp}
            className="card-premium p-8 flex flex-col gap-8"
          >
            {/* Formation */}
            <div>
              <div className="w-12 h-12 rounded-2xl bg-brand-blue/6 flex items-center justify-center mb-6">
                <GraduationCap className="w-6 h-6 text-brand-blue" />
              </div>
              <h3 className="text-lg font-bold text-text-title mb-4">
                Formation
              </h3>
              {education.map((edu) => (
                <div key={edu.institution}>
                  <p className="text-sm font-bold text-text-primary">
                    {edu.degree}
                  </p>
                  <p className="text-sm text-text-secondary mt-1">
                    {edu.institution}
                  </p>
                  <p className="text-xs text-text-secondary mt-0.5">
                    {edu.period} • {edu.location}
                  </p>
                </div>
              ))}
            </div>

            {/* Séparateur */}
            <div className="border-t border-surface-border" />

            {/* Langues */}
            <div>
              <div className="w-12 h-12 rounded-2xl bg-gold-premium/10 flex items-center justify-center mb-6">
                <Globe className="w-6 h-6 text-gold-premium" />
              </div>
              <h3 className="text-lg font-bold text-text-title mb-4">
                Langues
              </h3>
              <div className="space-y-3">
                {languages.map((lang) => (
                  <div
                    key={lang.name}
                    className="flex items-center justify-between"
                  >
                    <span className="text-sm font-medium text-text-primary">
                      {lang.name}
                    </span>
                    <span className="text-xs font-semibold text-gold-premium bg-gold-premium/10 px-3 py-1 rounded-full">
                      {lang.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ===== Carte 3 — Clients & Références ===== */}
          <motion.div
            variants={fadeUp}
            className="card-premium p-8 flex flex-col"
          >
            <div className="w-12 h-12 rounded-2xl bg-gold-premium/10 flex items-center justify-center mb-6">
              <Building2 className="w-6 h-6 text-gold-premium" />
            </div>
            <h3 className="text-lg font-bold text-text-title mb-4">
              Ils m&apos;ont fait confiance
            </h3>

            <div className="space-y-3 flex-1">
              {about.references.map((ref) => (
                <div
                  key={ref}
                  className="flex items-center gap-3 p-3 bg-surface-alt rounded-xl border border-surface-border hover:border-brand-blue/15 transition-all duration-300 group"
                >
                  <div className="w-2 h-2 rounded-full bg-gold-premium shrink-0" />
                  <span className="text-sm font-semibold text-text-primary group-hover:text-brand-blue transition-colors">
                    {ref}
                  </span>
                </div>
              ))}
            </div>

            {/* Lien vers projets */}
            <a
              href="#projects"
              className="inline-flex items-center gap-2 mt-6 text-sm font-semibold text-brand-blue hover:text-brand-electric transition-colors group"
            >
              Voir les réalisations
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}