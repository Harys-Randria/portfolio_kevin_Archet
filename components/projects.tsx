"use client";

import { motion, type Variants } from "framer-motion";
import { PORTFOLIO_DATA } from "@/lib/data";
import {
  Zap,
  TrendingUp,
  Layers,
  ArrowUpRight,
  Target,
  Briefcase,
} from "lucide-react";

// ----- Framer Motion Variants -----
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

// ----- Hiérarchie visuelle des projets -----
function getProjectAccent(index: number) {
  // Projet 1 (actuel) = gold, projet 2 = electric, autres = blue
  if (index === 0) return "bg-gold-premium";
  if (index === 1) return "bg-brand-electric";
  return "bg-brand-blue";
}

function getProjectBadge(index: number) {
  if (index === 0) return { text: "Actuel", className: "bg-gold-premium/10 text-gold-premium border-gold-premium/20" };
  if (index === 1) return { text: "Récent", className: "bg-brand-electric/10 text-brand-electric border-brand-electric/20" };
  return { text: "Livré", className: "bg-brand-blue/6 text-brand-blue border-brand-blue/10" };
}

export function Projects() {
  return (
    <section
      id="projects"
      className="relative py-24 lg:py-32 bg-surface-alt overflow-hidden"
    >
      {/* ============================================================
          RAPPEL ATMOSPHÉRIQUE — Glows discrets
          ============================================================ */}
      <div className="absolute top-0 left-1/3 w-[400px] h-[400px] rounded-full bg-brand-blue/4 blur-[120px] -z-10" />
      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] rounded-full bg-gold-premium/3 blur-[100px] -z-10" />
      <div className="absolute inset-0 bg-grid-subtle opacity-30 -z-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* ========== En-tête ========== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-16 lg:mb-20"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-surface-main rounded-full border border-surface-border mb-6">
            <Briefcase className="w-4 h-4 text-brand-blue" />
            <span className="text-sm font-medium text-brand-blue">
              Projets Phares
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-extrabold text-text-title tracking-tight mb-4">
            Réalisations
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Des applications mobiles haute charge pour les plus grandes marques,
            avec un impact mesurable.
          </p>
        </motion.div>

        {/* ========== Grille projets ========== */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {PORTFOLIO_DATA.projects.map((project, index) => {
            const badge = getProjectBadge(index);

            return (
              <motion.div
                key={project.name}
                variants={itemVariants}
                className="card-premium overflow-hidden flex flex-col group"
              >
                {/* Barre d'accent */}
                <div
                  className={`h-1.5 ${getProjectAccent(index)} transition-all duration-300 group-hover:h-2`}
                />

                <div className="p-7 flex flex-col flex-1">
                  {/* Badge statut + rôle */}
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-semibold rounded-full border ${badge.className}`}
                    >
                      <Zap className="w-3 h-3" />
                      {badge.text}
                    </span>
                    <span className="text-[11px] font-medium text-text-secondary uppercase tracking-wider">
                      {project.role}
                    </span>
                  </div>

                  {/* Nom du projet */}
                  <h3 className="text-lg font-bold text-text-title mb-3 group-hover:text-brand-blue transition-colors duration-300">
                    {project.name}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-text-secondary leading-relaxed mb-5 flex-1">
                    {project.description}
                  </p>

                  {/* Features clés */}
                  {project.features && project.features.length > 0 && (
                    <div className="mb-5">
                      <p className="text-[11px] font-semibold text-text-primary uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                        <Layers className="w-3.5 h-3.5 text-gold-premium" />
                        Fonctionnalités clés
                      </p>
                      <ul className="space-y-1.5">
                        {project.features.slice(0, 4).map((feature) => (
                          <li
                            key={feature}
                            className="flex items-start gap-2 text-xs text-text-secondary leading-relaxed"
                          >
                            <span className="mt-1 h-1 w-1 rounded-full bg-gold-premium/60 shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Technologies */}
                  <div className="mb-5">
                    <p className="text-[11px] font-semibold text-text-primary uppercase tracking-wider mb-2.5">
                      Stack technique
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.slice(0, 5).map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 text-[10px] font-medium text-brand-blue bg-brand-blue/5 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 5 && (
                        <span className="px-2.5 py-1 text-[10px] font-medium text-text-secondary bg-surface-alt rounded-full">
                          +{project.technologies.length - 5}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Impact — Bloc mis en avant */}
                  <div className="mt-auto pt-5 border-t border-surface-border">
                    <div className="flex items-start gap-3 p-4 bg-gold-premium/4 rounded-2xl border border-gold-premium/10">
                      <div className="w-8 h-8 rounded-xl bg-gold-premium/15 flex items-center justify-center shrink-0">
                        <TrendingUp className="w-4 h-4 text-gold-premium" />
                      </div>
                      <div>
                        <p className="text-[10px] font-semibold text-gold-premium uppercase tracking-wider mb-0.5">
                          Impact
                        </p>
                        <p className="text-sm font-semibold text-text-primary leading-snug">
                          {project.impact}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Indicateur visuel "voir plus" */}
                  <div className="mt-4 flex items-center gap-1.5 text-xs font-medium text-brand-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span>Détails du projet</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}