"use client";

import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { PORTFOLIO_DATA } from "@/lib/data";
import {
  Briefcase,
  MapPin,
  Calendar,
  Building2,
  Star,
  ChevronDown,
} from "lucide-react";

// ----- Framer Motion Variants -----
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

// ----- Couleurs des dots -----
function getDotColor(index: number): string {
  if (index === 0) return "bg-gold-premium";
  if (index === 1) return "bg-brand-electric";
  return "bg-brand-blue";
}

function getDotGlow(index: number): string {
  if (index === 0) return "shadow-[0_0_12px_rgba(227,200,61,0.4)]";
  if (index === 1) return "shadow-[0_0_12px_rgba(33,78,235,0.3)]";
  return "shadow-[0_0_10px_rgba(18,55,216,0.25)]";
}

// ----- Résumé automatique (1ère phrase ou highlights principaux) -----
function getQuickSummary(experience: (typeof PORTFOLIO_DATA.experiences)[0]): string {
  // Prendre les 2 highlights les plus impactants
  const topHighlights = experience.highlights.slice(0, 2);
  if (topHighlights.length > 0) {
    return topHighlights.join(" · ");
  }
  // Fallback : première phrase de la description
  return experience.description.split(".")[0] + ".";
}

export function ExperienceTimeline() {
  const [expandedIndex, setExpandedIndex] = useState<number>(0); // 1er poste ouvert par défaut

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? -1 : index);
  };

  return (
    <section
      id="experience"
      className="relative py-24 lg:py-32 bg-surface-main overflow-hidden"
    >
      {/* ============================================================
          ATMOSPHÈRE
          ============================================================ */}
      <div className="absolute top-1/3 -right-20 w-[350px] h-[350px] rounded-full bg-brand-blue/3 blur-[100px] -z-10" />
      <div className="absolute bottom-0 -left-20 w-[300px] h-[300px] rounded-full bg-gold-premium/3 blur-[100px] -z-10" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* ========== En-tête ========== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-surface-alt rounded-full border border-surface-border mb-6">
            <Briefcase className="w-4 h-4 text-brand-blue" />
            <span className="text-sm font-medium text-brand-blue">
              Parcours Professionnel
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-extrabold text-text-title tracking-tight mb-4">
            Expérience
          </h2>
          <p className="text-lg text-text-secondary max-w-xl mx-auto">
            10+ ans d&apos;expertise, jusqu'aux applications à 300k
            utilisateurs/jour.
          </p>
        </motion.div>

        {/* ========== Timeline ========== */}
        <div className="relative">
          {/* Ligne timeline */}
          <div className="absolute left-[15px] top-3 bottom-3 w-0.5 bg-gradient-to-b from-brand-blue via-brand-electric to-gold-premium/40 rounded-full" />

          <div className="space-y-6">
            {PORTFOLIO_DATA.experiences.map((experience, index) => {
              const isExpanded = expandedIndex === index;

              return (
                <motion.div
                  key={experience.company + experience.period}
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-80px" }}
                  className="relative pl-14"
                >
                  {/* Dot */}
                  <button
                    onClick={() => toggleExpand(index)}
                    className={`absolute left-[7px] top-4 w-[18px] h-[18px] rounded-full border-[3px] border-surface-main ${getDotColor(index)} ${getDotGlow(index)} z-10 cursor-pointer transition-transform duration-300 ${
                      isExpanded ? "scale-125" : "hover:scale-110"
                    }`}
                    aria-label={isExpanded ? "Réduire" : "Développer"}
                  />

                  {/* Carte */}
                  <div
                    onClick={() => toggleExpand(index)}
                    className={`card-premium p-5 sm:p-6 cursor-pointer group transition-all duration-300 ${
                      isExpanded
                        ? "border-brand-blue/20 shadow-card"
                        : "hover:border-brand-blue/10"
                    }`}
                  >
                    {/* Header — Toujours visible */}
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-0.5">
                          <Building2 className="w-3.5 h-3.5 text-brand-blue shrink-0" />
                          <h3 className="text-base font-bold text-text-title truncate">
                            {experience.company}
                          </h3>
                          {/* Badge poste actuel */}
                          {index === 0 && (
                            <span className="text-[10px] font-bold text-gold-premium bg-gold-premium/10 px-2 py-0.5 rounded-full shrink-0">
                              Actuel
                            </span>
                          )}
                        </div>
                        <p className="text-sm font-semibold text-brand-blue">
                          {experience.role}
                        </p>
                      </div>

                      <div className="flex items-center gap-3 shrink-0">
                        <div className="text-right text-xs text-text-secondary hidden sm:block">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {experience.period}
                          </span>
                          <span className="flex items-center gap-1 mt-0.5">
                            <MapPin className="w-3 h-3" />
                            {experience.location}
                          </span>
                        </div>
                        <ChevronDown
                          className={`w-4 h-4 text-text-secondary transition-transform duration-300 ${
                            isExpanded ? "rotate-180" : ""
                          }`}
                        />
                      </div>
                    </div>

                    {/* Résumé rapide — Visible uniquement quand replié */}
                    {!isExpanded && (
                      <p className="text-sm text-text-secondary mt-2 leading-relaxed line-clamp-1">
                        {getQuickSummary(experience)}
                      </p>
                    )}

                    {/* Métriques rapides — Visibles uniquement quand replié */}
                    {!isExpanded && experience.metrics && (
                      <div className="flex flex-wrap gap-2 mt-2">
                        {Object.entries(experience.metrics).map(([key, value]) => (
                          <span
                            key={key}
                            className="inline-flex items-center gap-1 text-[11px] font-semibold text-gold-premium bg-gold-premium/6 px-2 py-0.5 rounded-lg"
                          >
                            <Star className="w-3 h-3" />
                            {value}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Contenu détaillé — Visible uniquement quand expanded */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="pt-4 mt-4 border-t border-surface-border space-y-4">
                            {/* Description */}
                            <p className="text-sm text-text-secondary leading-relaxed">
                              {experience.description}
                            </p>

                            {/* Highlights */}
                            <ul className="space-y-2">
                              {experience.highlights.map((highlight, hIdx) => (
                                <li
                                  key={hIdx}
                                  className="flex items-start gap-2.5 text-sm text-text-primary leading-relaxed"
                                >
                                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gold-premium/70 shrink-0" />
                                  {highlight}
                                </li>
                              ))}
                            </ul>

                            {/* Métriques */}
                            {experience.metrics && (
                              <div className="flex flex-wrap gap-3 pt-1">
                                {Object.entries(experience.metrics).map(
                                  ([key, value]) => (
                                    <div
                                      key={key}
                                      className="flex items-center gap-1.5 px-3 py-1.5 bg-surface-alt rounded-lg"
                                    >
                                      <Star className="w-3.5 h-3.5 text-gold-premium" />
                                      <span className="text-xs font-semibold text-text-primary">
                                        {value}
                                      </span>
                                      <span className="text-[10px] text-text-secondary capitalize">
                                        {key
                                          .replace(/([A-Z])/g, " $1")
                                          .trim()}
                                      </span>
                                    </div>
                                  )
                                )}
                              </div>
                            )}

                            {/* Technologies */}
                            {experience.technologies && (
                              <div className="flex flex-wrap gap-1.5">
                                {experience.technologies.map((tech) => (
                                  <span
                                    key={tech}
                                    className="px-2.5 py-1 text-[10px] font-medium text-brand-blue bg-brand-blue/5 rounded-full"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}