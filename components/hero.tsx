"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowRight, Phone, Mail, MapPin, Shield, Users, Zap, Download } from "lucide-react";
import Image from "next/image";
import { PORTFOLIO_DATA } from "@/lib/data";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
};

const floatAnimation = (offset: number = 6) => ({
  y: [0, -offset, 0] as number[],
  transition: {
    duration: 4.5,
    repeat: Infinity,
    ease: "easeInOut" as const,
  },
});

const { subtitle, stats, contact } = PORTFOLIO_DATA;
const tagline = PORTFOLIO_DATA.tagline;

const trustMetrics = [
  { value: stats.crashFreeRate, label: "Crash-free", icon: Shield, color: "text-gold-premium" },
  { value: stats.usersHandled, label: "Utilisateurs/jour", icon: Users, color: "text-gold-premium" },
  { value: stats.yearsExperience, label: "Ans d'expertise", icon: Zap, color: "text-gold-premium" },
];

// Logos entreprises — maintenant en colonne à droite de la photo
const partnerLogos = [
  { name: "McDonald's", src: "/logos/mcdonalds.png" },
  { name: "BforBank", src: "/logos/bforbank.png" },
  { name: "Paylib", src: "/logos/paylib.png" },
];

export function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative bg-surface-main overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10 mesh-gradient-hero" />
      <div className="absolute inset-0 -z-10 bg-grid-subtle opacity-60" />
      <div className="absolute -top-40 -left-20 w-[600px] h-[600px] rounded-full bg-brand-blue/6 blur-[120px] -z-10" />
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] rounded-full bg-gold-premium/5 blur-[100px] -z-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[calc(100vh-180px)]">
          {/* ========== COLONNE GAUCHE ========== */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="space-y-6 sm:space-y-8"
          >
            <motion.div variants={fadeUp}>
              <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-surface-alt rounded-full border border-surface-border">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-blue opacity-40" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-blue" />
                </span>
                <span className="text-sm font-medium text-brand-blue">
                  Disponible pour missions
                </span>
              </div>
            </motion.div>

            <motion.div variants={fadeUp}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-text-title leading-[1.08]">
                Expert Android
                <br />
                <span className="text-brand-blue">Lead Developer</span>
              </h1>
            </motion.div>

            <motion.p variants={fadeUp} className="text-base sm:text-lg text-text-secondary max-w-lg leading-relaxed">
              {subtitle}
            </motion.p>

            <motion.div variants={fadeUp} className="border-l-[3px] border-gold-premium pl-5 sm:pl-6 py-1">
              <p className="text-sm font-semibold text-text-primary leading-relaxed italic">
                « {tagline} »
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-1">
              <a
                href={PORTFOLIO_DATA.calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 bg-gold-premium text-[#0E1726] font-bold text-sm sm:text-base rounded-xl shadow-gold-button hover:shadow-gold-button-hover hover:bg-[#F0D95A] transition-all duration-300"
              >
                Réserver un appel
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <button
                onClick={() => scrollToSection("expertise")}
                className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 bg-transparent border border-surface-border text-text-primary font-semibold text-sm sm:text-base rounded-xl hover:bg-surface-alt hover:border-brand-blue/20 transition-all duration-300"
              >
                Voir mon expertise
              </button>
            </motion.div>

            {/* CV Download — Nouveau */}
            <motion.div variants={fadeUp}>
              <a
                href="/cv-kevin-archet.pdf"
                download
                className="inline-flex items-center gap-2 text-sm font-medium text-text-secondary hover:text-brand-blue transition-colors group"
              >
                <Download className="w-4 h-4" />
                Télécharger mon CV
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
              </a>
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-6 sm:gap-8 pt-6 sm:pt-8 border-t border-surface-border">
              {trustMetrics.map((metric) => (
                <div key={metric.label} className="flex items-center gap-3">
                  <metric.icon className={`w-5 h-5 ${metric.color}`} />
                  <div>
                    <p className={`text-lg sm:text-xl font-bold ${metric.color}`}>{metric.value}</p>
                    <p className="text-xs text-text-secondary">{metric.label}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm text-text-secondary">
              <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className="flex items-center gap-2 hover:text-brand-blue transition-colors">
                <Phone className="w-4 h-4" />{contact.phone}
              </a>
              <a href={`mailto:${contact.email}`} className="flex items-center gap-2 hover:text-brand-blue transition-colors">
                <Mail className="w-4 h-4" />{contact.email}
              </a>
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />{contact.location}
              </span>
            </motion.div>
          </motion.div>

          {/* ========== COLONNE DROITE — Portrait + Logos intégrés ========== */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="hidden lg:flex items-center justify-center gap-6"
          >
            {/* Logos à gauche de la photo */}
            <motion.div
              animate={floatAnimation(5)}
              className="flex flex-col gap-4"
            >
              {partnerLogos.map((logo, i) => (
                <motion.div
                  key={logo.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + i * 0.15, duration: 0.5 }}
                  className="bg-white rounded-2xl px-4 py-3 shadow-card border border-surface-border hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
                >
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    width={110}
                    height={32}
                    className="h-8 w-auto object-contain"
                  />
                </motion.div>
              ))}
            </motion.div>

            {/* Photo + Badge Google */}
            <div className="relative">
              {/* Glow */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[280px] h-[280px] lg:w-[300px] lg:h-[300px] rounded-full bg-brand-blue/6 blur-[80px]" />
              </div>

              {/* Photo */}
              <motion.div
                animate={floatAnimation(8)}
                className="relative z-10 w-[260px] h-[330px] lg:w-[300px] lg:h-[380px] overflow-hidden rounded-3xl border-2 border-white/80 shadow-card"
              >
                <Image
                  src="/kevin-archet.jpg"
                  alt="Kevin Archet"
                  fill
                  className="object-cover"
                  priority
                  sizes="300px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/10 to-transparent" />
              </motion.div>

              {/* Badge Google en bas de la photo */}
              <motion.div
                animate={floatAnimation(4)}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: 0.8,
                  ease: "easeInOut" as const,
                }}
                className="absolute -bottom-3 -right-3 z-20 bg-white rounded-2xl px-4 py-3 shadow-card border border-surface-border"
              >
                <Image
                  src="/logos/google-associate.png"
                  alt="Google Associate Android Developer"
                  width={100}
                  height={28}
                  className="h-7 w-auto object-contain"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" as const }}
          className="w-6 h-10 rounded-full border-2 border-surface-border flex items-start justify-center p-1.5"
        >
          <motion.div className="w-1.5 h-3 rounded-full bg-brand-blue/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}