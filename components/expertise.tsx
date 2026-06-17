"use client";

import { motion, type Variants } from "framer-motion";
import { Layers, ArrowRight, Users, Wrench, Globe, Server, Sparkles } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { PORTFOLIO_DATA } from "@/lib/data";

// ----- Framer Motion Variants (identiques au Hero) -----
const sectionVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

// ----- Mapping des icônes -----
const categoryIcons: Record<string, LucideIcon> = {
  android: Layers,
  networking: Globe,
  tools: Wrench,
  management: Users,
  back: Server,
};

const domainIcons: Record<string, LucideIcon> = {
  Layers,
  ArrowRight,
  Users,
};

const expertise = PORTFOLIO_DATA.expertise;

export function Expertise() {
  return (
    <section
      id="expertise"
      className="relative py-24 lg:py-32 bg-surface-alt overflow-hidden"
    >
      {/* ============================================================
          RAPPEL ATMOSPHÉRIQUE DU HERO — Glow + grid subtil
          ============================================================ */}
      {/* Glow bleu très discret en haut à gauche */}
      <div className="absolute -top-20 -left-20 w-[400px] h-[400px] rounded-full bg-brand-blue/4 blur-[100px] -z-10" />
      {/* Glow gold très discret en bas à droite */}
      <div className="absolute -bottom-20 -right-20 w-[350px] h-[350px] rounded-full bg-gold-premium/4 blur-[100px] -z-10" />
      {/* Grid pattern identique au Hero mais plus discret */}
      <div className="absolute inset-0 bg-grid-subtle opacity-30 -z-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* ========== En-tête avec badge (rappel du Hero) ========== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-16 lg:mb-20"
        >
          {/* Badge — même style que le badge "Disponible" du Hero */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-surface-main rounded-full border border-surface-border mb-6">
            <Sparkles className="w-4 h-4 text-gold-premium" />
            <span className="text-sm font-medium text-brand-blue">
              Expertise Technique
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-extrabold text-text-title tracking-tight">
            Compétences & Technologies
          </h2>
          <p className="mt-4 text-lg text-text-secondary max-w-2xl mx-auto">
            Un écosystème maîtrisé de bout en bout, de l&apos;architecture
            mobile à l&apos;infrastructure backend.
          </p>
        </motion.div>

        {/* ========== Grille de cartes — Compétences ========== */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {Object.entries(expertise).map(([key, category]) => {
            const Icon = categoryIcons[key] || Layers;

            return (
              <motion.div
                key={key}
                variants={itemVariants}
                className="card-premium p-8 flex flex-col group"
              >
                {/* Icône avec fond brand-blue (comme les icônes Lucide du Hero) */}
                <div className="w-12 h-12 rounded-2xl bg-brand-blue/6 flex items-center justify-center mb-6 group-hover:bg-brand-blue/10 transition-colors duration-300">
                  <Icon className="w-6 h-6 text-brand-blue" />
                </div>

                <h3 className="text-lg font-bold text-text-title mb-4">
                  {category.title}
                </h3>

                {/* Skills avec puces gold (rappel des métriques gold du Hero) */}
                <ul className="space-y-2.5 flex-1">
                  {category.skills.map((skill: string) => (
                    <li
                      key={skill}
                      className="flex items-start gap-2.5 text-sm text-text-secondary leading-relaxed"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gold-premium/60 shrink-0" />
                      {skill}
                    </li>
                  ))}
                </ul>

                {/* Compteur avec accent gold */}
                <div className="mt-6 pt-5 border-t border-surface-border">
                  <span className="text-xs font-bold text-gold-premium uppercase tracking-wider">
                    {category.skills.length} compétences
                  </span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* ========== Domaines d'Excellence ========== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mt-24"
        >
          {/* Sous-titre avec accent gold (comme la tagline du Hero) */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-surface-main rounded-full border border-gold-premium/20 mb-6">
              <span className="h-2 w-2 rounded-full bg-gold-premium" />
              <span className="text-sm font-medium text-gold-premium">
                Domaines d&apos;Excellence
              </span>
            </div>
            <h3 className="text-3xl font-bold text-text-title">
              Ce que j&apos;apporte à vos projets
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {PORTFOLIO_DATA.expertiseDomains.map((domain, index) => {
              const Icon = domainIcons[domain.icon] || Layers;

              return (
                <motion.div
                  key={domain.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  className="card-premium p-8 flex flex-col group"
                >
                  {/* Icône avec fond gold (rappel du CTA gold du Hero) */}
                  <div className="w-12 h-12 rounded-2xl bg-gold-premium/10 flex items-center justify-center mb-5 group-hover:bg-gold-premium/15 transition-colors duration-300">
                    <Icon className="w-6 h-6 text-gold-premium" />
                  </div>
                  <h4 className="text-base font-bold text-text-title mb-3">
                    {domain.category}
                  </h4>
                  <p className="text-sm text-text-secondary leading-relaxed flex-1">
                    {domain.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}