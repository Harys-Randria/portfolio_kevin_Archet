"use client";

import { motion, type Variants } from "framer-motion";
import { PORTFOLIO_DATA } from "@/lib/data";
import {
  ArrowRight,
  Calendar,
  Clock,
  MessageSquare,
  Phone,
  Star,
  Shield,
  Sparkles,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

// ----- Framer Motion Variants -----
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

// ----- Mapping des icônes -----
const iconMap: Record<string, LucideIcon> = {
  Layers: Star,
  Code2: Star,
  Zap: Star,
  Users: Star,
  Target: Star,
  Briefcase: Star,
};

export function ContactCTA() {
  const { bookingReasons, calendlyUrl, contact } = PORTFOLIO_DATA;

  return (
    <section
      id="contact"
      className="relative py-24 lg:py-32 bg-surface-main overflow-hidden"
    >
      {/* ============================================================
          ATMOSPHÈRE — Glows + grid (rappel Hero)
          ============================================================ */}
      <div className="absolute inset-0 bg-grid-subtle opacity-50 -z-10" />
      <div className="absolute top-10 left-1/4 w-[500px] h-[500px] rounded-full bg-brand-blue/5 blur-[130px] -z-10" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-gold-premium/5 blur-[120px] -z-10" />

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
          <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-surface-alt rounded-full border border-gold-premium/20 mb-6">
            <Sparkles className="w-4 h-4 text-gold-premium" />
            <span className="text-sm font-medium text-gold-premium">
              Démarrez votre projet
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-extrabold text-text-title tracking-tight mb-4">
            Parlons de votre projet
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Un échange de 30 minutes pour comprendre vos enjeux et vous proposer
            la meilleure approche.
          </p>
        </motion.div>

        {/* ========== Layout 2 colonnes ========== */}
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* ===== Colonne gauche — Raisons (3/5) ===== */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="lg:col-span-3 grid sm:grid-cols-2 gap-5"
          >
            {bookingReasons.map((reason) => {
              const IconComponent = iconMap[reason.icon] || Star;

              return (
                <motion.div
                  key={reason.title}
                  variants={itemVariants}
                  className="card-premium p-6 flex items-start gap-4 group cursor-default"
                >
                  {/* Icône avec fond gold */}
                  <div className="w-11 h-11 rounded-2xl bg-gold-premium/10 flex items-center justify-center shrink-0 group-hover:bg-gold-premium/15 transition-colors duration-300">
                    <IconComponent className="w-5 h-5 text-gold-premium" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-text-title mb-1">
                      {reason.title}
                    </h3>
                    <p className="text-xs text-text-secondary leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* ===== Colonne droite — CTA + Trust (2/5) ===== */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="lg:col-span-2"
          >
            {/* Carte CTA principale */}
            <div className="card-premium p-8 lg:p-10 text-center sticky top-24">
              {/* Icône calendrier */}
              <div className="w-16 h-16 rounded-2xl bg-gold-premium/15 flex items-center justify-center mx-auto mb-6">
                <Calendar className="w-8 h-8 text-gold-premium" />
              </div>

              <h3 className="text-xl font-bold text-text-title mb-2">
                Réserver un appel découverte
              </h3>
              <p className="text-sm text-text-secondary mb-8">
                Choisissez le créneau qui vous convient. Échange sans engagement.
              </p>

              {/* Trust signals */}
              <div className="grid grid-cols-3 gap-3 mb-8">
                <div className="text-center p-3 bg-surface-alt rounded-2xl">
                  <Clock className="w-4 h-4 text-brand-blue mx-auto mb-1.5" />
                  <p className="text-sm font-bold text-text-primary">30 min</p>
                  <p className="text-[10px] text-text-secondary">Durée</p>
                </div>
                <div className="text-center p-3 bg-surface-alt rounded-2xl">
                  <Shield className="w-4 h-4 text-brand-blue mx-auto mb-1.5" />
                  <p className="text-sm font-bold text-text-primary">Gratuit</p>
                  <p className="text-[10px] text-text-secondary">Sans engagement</p>
                </div>
                <div className="text-center p-3 bg-surface-alt rounded-2xl">
                  <MessageSquare className="w-4 h-4 text-brand-blue mx-auto mb-1.5" />
                  <p className="text-sm font-bold text-text-primary">&lt;24h</p>
                  <p className="text-[10px] text-text-secondary">Réponse</p>
                </div>
              </div>

              {/* CTA Button — Gold */}
              <a
                href={calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2.5 w-full px-8 py-4 bg-gold-premium text-[#0E1726] font-bold text-base rounded-xl shadow-gold-button hover:shadow-gold-button-hover hover:bg-[#F0D95A] transition-all duration-300"
              >
                Réserver un appel
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <p className="text-[11px] text-text-secondary mt-4">
                Calendly intégré • Aucun email requis
              </p>

              {/* Contact direct */}
              <div className="mt-6 pt-5 border-t border-surface-border">
                <p className="text-xs text-text-secondary mb-2">
                  Ou contactez-moi directement
                </p>
                <a
                  href={`tel:${contact.phone.replace(/\s/g, "")}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-brand-blue hover:text-brand-electric transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  {contact.phone}
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ========== Bandeau bas — Contact direct ========== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mt-20 p-8 lg:p-10 bg-surface-alt rounded-3xl border border-surface-border text-center"
        >
          <p className="text-text-primary font-semibold mb-1">
            Une expertise spécifique en tête ?
          </p>
          <p className="text-sm text-text-secondary">
            Contactez-moi directement à{" "}
            <a
              href={`mailto:${contact.email}`}
              className="text-brand-blue font-semibold hover:underline"
            >
              {contact.email}
            </a>{" "}
            pour un échange personnalisé.
          </p>
        </motion.div>
      </div>
    </section>
  );
}